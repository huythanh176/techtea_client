import axios from "axios";
import { UserState } from "../models/user";
import { Commit } from "vuex";

export default {
  namespaced: true,
  state: (): UserState => ({
    loggedIn: false,
    loading: false,
    error: null,
  }),
  getters: {
    getLoggedIn: (state: UserState) => state.loggedIn,
    postLoading: (state: UserState) => state.loading,
    postError: (state: UserState) => state.error,
  },
  mutations: {
    setLoggedIn: (state: UserState, loggedIn: boolean) => {
      state.loggedIn = loggedIn;
    },
    setLoading: (state: UserState, loading: boolean) => {
      state.loading = loading;
    },
    setError: (state: UserState, error: string) => {
      state.error = error;
    },
  },
  actions: {
    userLogin: async (
      { commit }: { commit: Commit },
      payload: { email: string; password: string }
    ) => {
      commit("setLoading", true);
      try {
        console.log(payload);
        const response = await axios.post(
          "https://api.aoumi.site/api/v1/sign_in",
          { user: payload }
        );
        console.log(response);

        const loggedIn = response.data?.data?.access_token !== undefined;
        console.log(loggedIn);

        commit("setLoggedIn", loggedIn);
      } catch (error: any) {
        if (error.response && error.response.status === 400) {
          // Handle the 400 Bad Request error
          // For example, show an error message or perform specific actions
          console.log("Bad Request error occurred:", error.response.data);
        } else {
          // Handle other types of errors
          // For example, network error or server error
          console.log("Error occurred:", error.message);
        }
      }
    },
    userLoginSocial: async (
      { commit }: { commit: Commit },
      payload: { id_token: string }
    ) => {
      commit("setLoading", true);
      try {
        console.log(payload);
        const response = await axios.post(
          "https://api.aoumi.site/api/v1/social_login",
          { user: payload }
        );
        console.log(response);

        const loggedIn = response.data?.data?.access_token !== undefined;
        console.log(loggedIn);

        commit("setLoggedIn", loggedIn);
      } catch (error: any) {
        if (error.response && error.response.status === 400) {
          // Handle the 400 Bad Request error
          // For example, show an error message or perform specific actions
          console.log("Bad Request error occurred:", error.response.data);
        } else {
          // Handle other types of errors
          // For example, network error or server error
          console.log("Error occurred:", error.message);
        }
      }
    },
  },
};
