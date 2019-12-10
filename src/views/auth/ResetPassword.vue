<template>
  <baseForm title="Reset Password" button_name="Reset" @send="reset" :loading="loading">
    <v-alert
      v-model="alert"
      dismissible
      close-text="close"
      type="error"
      transition="slide-x-transition"
    >
      Reset Password Error! Check if the email is correct or
      <a
        href="/forgot/password"
        class="link-reset"
      >send another email here</a>!
    </v-alert>
    <ResetForm v-model="data" ref="reset" />
  </baseForm>
</template>

<script>
import baseForm from "@/base/baseForm.vue"; // Importa a base do formulario
import ResetForm from "@/components/forms/ResetForm.vue"; // Importa o formulario
import session from "@/services/sessionstorage";

export default {
  data() {
    return {
      data: {},
      alert: false,
      loading: false
    };
  },
  methods: {
    async reset() {
      this.send = false;
      if (this.$refs.reset.validate()) {
        this.loading = true;
        this.data.token = this.$route.params.token;
        await this.$store
          .dispatch("auth/reset", this.data)
          .then(() => {
            this.redirect();
          })
          .catch(({ errors }) => {
            if (errors["token"]) {
              this.alert = true;
            }
            this.$refs.reset.setErrors(errors);
          });
      }
      this.loading = false;
    },
    redirect() {
      session.set("auth_message", "Your password has reset successfully");
      this.$router.push({ name: "login" });
    }
  },
  components: {
    baseForm,
    ResetForm
  }
};
</script>

<style scoped>
.link-reset {
  color: white;
}
</style>
