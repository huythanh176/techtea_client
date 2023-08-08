<template>
  <GoogleLogin :callback="callback"/>
</template>
<script setup>
import { useStore } from "vuex"; // Import useStore from vuex

const store = useStore(); // Initialize the Vuex store

const callback = async (response) => {
  // Call the Vuex action to send user data to the API
  try {
      await store.dispatch("appHeader/userLoginSocial", { id_token: response.credential });
      console.log("User data sent to API successfully");
  } catch (error) {
      console.error("Error sending user data to API:", error);
  }
}
</script>
