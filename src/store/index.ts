import { createStore } from "vuex";
import homeScreen from "./homeScreen";
import postDetail from "./postDetail";
import appHeader from "./appHeader";

export default createStore({
  modules: {
    homeScreen,
    postDetail,
    appHeader,
  },
});
