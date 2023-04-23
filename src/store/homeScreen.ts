import axios from "axios";
import { Post, PostState } from "../models/post";
import { Commit } from "vuex";

export default {
  namespaced: true,
  state: (): PostState => ({
    posts: [],
    loading: false,
    error: null,
  }),
  getters: {
    allPosts: (state: PostState) => state.posts,
    postLoading: (state: PostState) => state.loading,
    postError: (state: PostState) => state.error,
  },
  mutations: {
    setPosts: (state: PostState, posts: Post[]) => {
      state.posts = posts;
    },
    setLoading: (state: PostState, loading: boolean) => {
      state.loading = loading;
    },
    setError: (state: PostState, error: string) => {
      state.error = error;
    },
  },
  actions: {
    fetchPosts: async ({ commit }: { commit: Commit }) => {
      commit("setLoading", true);
      const response = await axios.get("https://api.aoumi.site/api/v1/posts");
      commit("setPosts", response.data.data.posts);
    },
  },
};
