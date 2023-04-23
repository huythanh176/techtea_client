<template>
  <v-app>
    <v-main>
      <AppHeader />
      <router-view />
    </v-main>
  </v-app>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "/src/components/AppHeader.vue";

export default defineComponent({
  name: "App",

  components: {
    AppHeader,
  },
  data() {
    return {
      //
    };
  },
});
</script>
