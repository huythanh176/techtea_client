import { createApp } from "vue";
import vuetify from "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vue3GoogleLogin from 'vue3-google-login'


createApp(App).use(router).use(store).use(vuetify).use(vue3GoogleLogin, {
    clientId: '443301198894-v2s5tkh3j6c9mqt3g29602h7tj7ubbiq.apps.googleusercontent.com'
  }).mount("#app");
