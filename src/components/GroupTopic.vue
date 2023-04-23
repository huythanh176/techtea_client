<template>
  <v-card class="mx-auto" max-width="400">
    <v-toolbar flat color="blue-grey-lighten-3" dark>
      <v-toolbar-title>Other topics you may be interested in</v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <h2 class="text-h6 mb-2">Choose topic</h2>

      <v-chip-group v-model="topics" column>
        <v-chip filter variant="outlined"> Elevator </v-chip>
        <v-chip filter variant="outlined"> Washer / Dryer </v-chip>
        <v-chip filter variant="outlined"> Fireplace </v-chip>
        <v-chip filter variant="outlined"> Wheelchair access </v-chip>
        <v-chip filter variant="outlined"> Dogs ok </v-chip>
        <v-chip filter variant="outlined"> Cats ok </v-chip>
        <v-chip filter variant="outlined"> Ben </v-chip>
        <v-chip filter variant="outlined"> Gun ok </v-chip>
        <v-chip filter variant="outlined"> Ha ok </v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    topics: [0],
  }),
};
</script>
