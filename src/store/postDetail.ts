import axios from "axios";
import { Post, PostDetailState } from "../models/post";
import { Commit } from "vuex";

export default {
  namespaced: true,
  state: (): PostDetailState => ({
    post: null,
    loading: false,
    error: null,
  }),
  getters: {
    postDetail: (state: PostDetailState) => state.post,
  },
  mutations: {
    setPost: (state: PostDetailState, post: Post) => {
      state.post = post;
    },
  },
  actions: {
    fetchPostDetail: async ({ commit }: { commit: Commit }, id: number) => {
      const response = await axios.get(
        `https://api.aoumi.site/api/v1/posts/${id}`
      );
      commit("setPost", response.data.data.post);
    },
  },
};
