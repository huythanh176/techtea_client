export interface Header {
  id: string;
  text: string;
  children?: Header[];
}

export function getHeadersAndSubheaders(markdown: string): Header[] {
  const headers: Header[] = [];
  const lines = markdown.split("\n");

  let currentHeader: Header | undefined;
  let previousHeader: Header | undefined;
  const stack: Header[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("#")) {
      const level = line.lastIndexOf("#") + 1;
      const text = line.slice(level + 1).trim();
      const id = text.toLowerCase().replace(/\s+/g, "-");

      currentHeader = { id, text };

      if (level === 1) {
        headers.push(currentHeader);
      } else {
        if (level > stack.length + 1) {
          throw new Error(`Invalid header level at line ${i + 1}`);
        }

        const parent = stack[level - 2];
        if (!parent.children) {
          parent.children = [];
        }

        parent.children.push(currentHeader);
      }

      stack[level - 1] = currentHeader;
      previousHeader = currentHeader;
    } else {
      if (previousHeader && !previousHeader.children) {
        previousHeader.children = [];
      }
    }
  }

  return headers;
}
