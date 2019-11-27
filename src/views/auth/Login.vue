<template>
  <baseForm
    title="Sign in"
    button_name="Login"
    href="/register"
    link_message="Don't have an account? Register Now!"
    @send="login"
    :loading="loading"
  >
    <v-card-actions class="justify-center mb-5">
      <v-btn v-for="(button, key) in buttons" :key="key" outlined large :color="button.color">
        <v-icon left>{{ button.icon }}</v-icon>
      </v-btn>
    </v-card-actions>
    <LoginForm ref="login" v-model="data" />
  </baseForm>
</template>

<script>
import baseForm from "@/base/baseForm.vue"; // Importa a base do formulario
import LoginForm from "@/components/forms/LoginForm.vue"; // Importa o formulario

export default {
  data() {
    return {
      data: {},
      loading: false,
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
    async login() {
      if (this.$refs.login.validate()) {
        this.loading = true;
        await this.$store
          .dispatch("auth/login", this.data)
          .then(() => {
            this.$router.push({ name: "home" });
          })
          .catch(({ errors }) => {
            this.$refs.login.setErrors(errors);
          });
      }
      this.loading = false;
    }
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
