<template>
  <v-card
    :to="{ name: 'post', params: { postId: post.id } }"
    class="mx-auto techtea_card ml-10 mb-15"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
    :style="{
      transform: hover ? 'translateY(-10px)' : '',
      boxShadow: hover ? '0px 10px 15px rgba(0, 0, 0, 0.3)' : '',
      cursor: hover ? 'pointer' : 'auto',
    }"
    transition="transform 0.2s"
  >
    <div class="d-flex">
      <v-col cols="7">
        <div class="techtea_author_container">
          <v-col xs="2" sm="8">
            <v-card-subtitle class="techtea_author">
              {{ post.author.name }}
            </v-card-subtitle>
          </v-col>
          <v-col xs="2" sm="4">
            <v-card-subtitle class="techtea_author">
              {{
                new Date(post.created_at).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })
              }}
            </v-card-subtitle>
          </v-col>
        </div>
        <v-col cols="12">
          <span class="card_title"> {{ post.title }}</span>
        </v-col>
        <v-col cols="12">
          <span class="card_description"> {{ post.description }}</span>
        </v-col>
      </v-col>
      <v-img
        src="https://techtea.s3.ap-southeast-1.amazonaws.com/railsd.png"
        height="320px"
        cover
      ></v-img>
    </div>
  </v-card>
</template>

<style>
@import "../assets/styles/components/postCard.css";
</style>

<script>
export default {
  data: () => ({
    show: false,
    hover: false,
  }),
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>
