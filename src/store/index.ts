import { createStore } from "vuex";
import homeScreen from "./homeScreen";
import postDetail from "./postDetail";

export default createStore({
  modules: {
    homeScreen,
    postDetail,
  },
});
