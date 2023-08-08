<template>
  <v-app-bar
    class="techtea_header"
    color="#B0BEC5"
    :elevation="20"
    height="100"
  >
    <router-link to="/" class="logo">TECHTEA</router-link>
    <v-spacer></v-spacer>
    <template v-if="!loggedIn">
      <div class="login-button">
        <v-btn @click="openModal">Sign In</v-btn>
      </div>
    </template>
    <template v-else>
      <div class="avatar">
        <v-avatar>
          <v-img
            src="https://techtea.s3.ap-southeast-1.amazonaws.com/railsd.png"
          ></v-img>
        </v-avatar>
      </div>
    </template>
    <v-dialog v-model="showModal" max-width="500">
      <v-card>
        <v-card-title>Login</v-card-title>
        <v-card-text>
          <v-text-field v-model="email" label="Email"></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
          ></v-text-field>
        </v-card-text>
        <div class="signup-buttons">
      <LoginGoogle @google-login="handleGoogleLogin"> </LoginGoogle>
  </div>
        <v-card-actions>
          <v-btn color="primary" @click="login">Sign In</v-btn>
          <v-btn @click="closeModal">Cancel</v-btn>
          <div></div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import LoginGoogle from "../components/LoginGoogle.vue";

export default {
  data() {
    return {
      showModal: false,
      email: "",
      password: "",
      userAvatar: "path-to-avatar-image",
    };
  },
  components: {
    LoginGoogle
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    handleGoogleLogin(data) {
      // Perform login logic using the received data
      console.log('Received data:', data);
      console.log("12312")
      // Call your login function with the data
      this.login(data);
    },

    closeModal() {
      this.showModal = false;
    },
    login() {
      // Perform login logic here, e.g., send email and password to the server

      this.userLogin({ email: this.email, password: this.password });
      // Close the modal after login logic is complete
      this.closeModal();
    },
    ...mapActions("appHeader", {
      userLogin: "userLogin",
    }),
  },
  computed: {
    ...mapGetters("appHeader", {
      loggedIn: "getLoggedIn",
    }),
  },
  
};
</script>

<style>
@import "../assets/styles/components/appHeader.css";
</style>
