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
      <v-btn
        v-for="(button, key) in buttons"
        :key="key"
        outlined
        large
        :color="button.color"
        @click="loginSocial(button.type)"
      >
        <v-icon left>{{ button.icon }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-alert
      v-model="alert"
      dismissible
      close-text="close"
      :type="alertType"
      transition="slide-x-transition"
    >{{message}}</v-alert>
    <LoginForm ref="login" v-model="data" />
  </baseForm>
</template>

<script>
import baseForm from "@/base/baseForm.vue"; // Importa a base do formulario
import LoginForm from "@/components/forms/LoginForm.vue"; // Importa o formulario
import session from "@/services/sessionstorage";

export default {
  data() {
    return {
      data: {},
      alert: false,
      alertType: "",
      message: "",
      loading: false,
      buttons: [
        {
          icon: "fab fa-facebook-f",
          color: "primary",
          type: "facebook"
        },
        {
          icon: "fab fa-github",
          color: "black",
          type: "github"
        },
        {
          icon: "fab fa-google",
          color: "red",
          type: "google"
        }
      ]
    };
  },
  mounted() {
    let message = "";
    if ((message = session.getAndRemove("auth_message"))) {
      this.alert = true;
      this.alertType = "success";
      this.message = message;
    }
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
          .catch(({ status, data }) => {
            if (status == 401) {
              this.alert = true;
              this.alertType = "error";
              this.message = "The email or password is incorrect.";
            } else {
              this.$refs.login.setErrors(data.errors);
            }
          });
      }
      this.loading = false;
    },
    loginSocial(type) {
      this.$store.dispatch("auth/loginSocial", type);
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
