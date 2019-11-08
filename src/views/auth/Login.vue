<template>
  <baseForm
    title="Sign in"
    button_name="Login"
    href="/register"
    link_message="Don't have an account? Register Now!"
    @send="login"
  >
    <v-card-actions class="justify-center mb-5">
      <v-btn v-for="(button, key) in buttons" :key="key" outlined large :color="button.color">
        <v-icon left>{{ button.icon }}</v-icon>
      </v-btn>
    </v-card-actions>
    <LoginForm v-model="data" />
  </baseForm>
</template>

<script>
import baseForm from "@/base/baseForm.vue"; // Importa a base do formulario
import LoginForm from "@/components/forms/LoginForm.vue"; // Importa o formulario

export default {
  data() {
    return {
      data: {},
      buttons: [
        {
          icon: "fab fa-facebook-f",
          color: "primary"
        },
        {
          icon: "fab fa-github",
          color: "black"
        },
        {
          icon: "fab fa-google",
          color: "red"
        }
      ]
    };
  },
  methods: {
    login() {}
  },
  components: {
    baseForm,
    LoginForm
  }
};
</script>

<style>
.v-text-field__details {
  margin-bottom: 0 !important;
}
.forget-link {
  text-align: right;
  order: 2 !important;
}
</style>
