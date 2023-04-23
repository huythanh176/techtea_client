<template>
  <div>
    <div class="container">
      <v-img
        src="https://techtea.s3.ap-southeast-1.amazonaws.com/bgg.jpg"
        alt="bac"
      ></v-img>
      <div class="slogan">Tech Over Tea</div>
      <div class="slogan_explain">Welcome to Tech Over Tea!</div>
      <div class="slogan_explain_2">
        We drink tea and talk about technology.
      </div>
    </div>
    <div class="techtea_body">
      <div class="postcard_list">
        <v-row>
          <v-col xs="12" sm="8" class="techtea_col_card">
            <PostCard v-for="(post, index) in posts" :key="index" :post="post">
            </PostCard>
          </v-col>
          <v-col>
            <GroupTopic></GroupTopic>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import PostCard from "../components/PostCard.vue";
import GroupTopic from "../components/GroupTopic.vue";
import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",

  components: {
    PostCard,
    GroupTopic,
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapGetters("homeScreen", {
      posts: "allPosts",
    }),
  },
  methods: {
    ...mapActions("homeScreen", {
      fetchPosts: "fetchPosts",
    }),
  },
});
</script>

<style>
@import "../assets/styles/view/home.css";
</style>
