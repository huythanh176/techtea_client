<template>
  <v-row>
    <v-col sm="8" class="techtea_post pr-15">
      <div class="info_author d-flex pt-15">
        <v-avatar size="45">
          <v-img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="John"
          ></v-img>
        </v-avatar>
        <div class="author_name">
          <div>{{ post && post.author.name }}</div>
          <div class="post_datetime">
            {{
              new Date(post && post.created_at).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
              })
            }}
            · 6 min read
          </div>
        </div>
      </div>
      <div class="techtea_post_content mt-10">
        <div class="techtea_post_title">{{ post && post.title }}</div>
        <div
          class="techtea_post_description mt-10"
          v-html="convertToHtml(post && post.content)"
        ></div>
      </div>
    </v-col>
    <v-col sm="4" class="techtea_table_of_content">
      <div class="pt-15">
        <TableOfContent :headers="getTableOfContents(post && post.content)" />
      </div>
    </v-col>
  </v-row>
</template>

<style>
@import "../assets/styles/view/details.css";
</style>

<script lang="ts">
import { defineComponent } from "vue";
import MarkdownIt from "markdown-it";
import mdHighlight from "markdown-it-highlighted";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import { getHeadersAndSubheaders, Header } from "../helpers/markdownHelper";

// Components
import TableOfContent from "../components/TableOfContent.vue";
import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Details",

  components: {
    TableOfContent,
  },
  data() {
    return {
      headers: [] as Header[],
    };
  },
  mounted() {
    console.log(this.$route.params);
    this.fetchPostDetail(this.$route.params.postId || this.$route.params.id);
  },
  computed: {
    ...mapGetters("postDetail", {
      post: "postDetail",
    }),
  },
  methods: {
    ...mapActions("postDetail", {
      fetchPostDetail: "fetchPostDetail",
    }),
    convertToHtml(markdown: any) {
      if (!markdown) {
        return null;
      }
      const md: MarkdownIt = new MarkdownIt({
        highlight: function (str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return (
                '<pre class="hljs"><code>' +
                hljs.highlight(lang, str, true).value +
                "</code></pre>"
              );
              // eslint-disable-next-line no-empty
            } catch (__) {}
          }

          return (
            '<pre class="hljs"><code>' +
            md.utils.escapeHtml(str) +
            "</code></pre>"
          );
        },
      });
      md.use(mdHighlight);

      let html = md.render(markdown.replace(/\\n/g, "\n"));

      return html.replace(/\n/g, "<br>");
    },
    getTableOfContents(markdown: any) {
      if (!markdown) {
        return null;
      }
      console.log(markdown);
      return getHeadersAndSubheaders(markdown.replace(/\\n/g, "\n"));
    },
  },
});
</script>

<style>
@import "../assets/styles/view/home.css";
</style>
