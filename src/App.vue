<template>
  <v-app id="app">
    <v-content>
      <router-view v-if="!isLogged" />
      <Layout v-if="isLogged" />
    </v-content>
  </v-app>
</template>

<script>
import Layout from "@/templates/Layout.vue";

export default {
  computed: {
    isLogged() {
      return this.$store.state.auth.isLogged;
    }
  },

  components: {
    Layout
  }
};
</script>
