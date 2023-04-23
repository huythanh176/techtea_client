<template>
  <div class="d-flex">
    <v-col sm="6"><div class="techtea_toc_title">Table Of Contents</div></v-col>
    <v-col class="align-self-center">
      <v-divider :thickness="3"></v-divider
    ></v-col>
  </div>
  <v-list>
    <v-list-item v-for="header in headers" :key="header.id">
      <v-list-item-content>
        <v-list-item-title
          @click="scrollToHeader(header.text)"
          class="techtea_toc_title_item"
          >{{ header.text }}</v-list-item-title
        >
      </v-list-item-content>
      <v-list-item-group>
        <v-list-item v-for="subHeader in header.children" :key="subHeader.id">
          <v-list-item-content>
            <v-list-item-title
              @click="scrollToHeader(subHeader.text)"
              class="techtea_toc_subtitle_item"
              >{{ subHeader.text }}</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list-item>
  </v-list>
</template>

<style>
@import "../assets/styles/components/tableOfContent.css";
</style>

<script>
export default {
  data() {
    return {};
  },
  props: {
    headers: {
      type: Object,
    },
  },
  methods: {
    scrollToHeader(markdown) {
      const headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
      headers.forEach((header) => {
        if (header.textContent === markdown) {
          header.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      });
    },
  },
};
</script>
