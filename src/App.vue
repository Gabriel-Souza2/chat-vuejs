<template>
  <v-app id="app">
    <router-view v-if="!isLogged" />
    <v-content v-if="isLogged">
      <h1>Layour</h1>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  computed: {
    isLogged() {
      return this.$store.state.auth.isLogged;
    }
  }
};
</script>
