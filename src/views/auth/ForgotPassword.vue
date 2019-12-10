<template>
  <baseForm
    title="Forgot Password"
    button_name="send reset password email"
    :link="false"
    @send="sendEmail"
    :loading="loading"
  >
    <div class="mb-2">Enter your email address and we will send you a link to reset your password.</div>
    <ForgotForm v-model="data" ref="forgot" :readonly="readonly" />
  </baseForm>
</template>

<script>
import baseForm from "@/base/baseForm.vue"; // Importa a base do formulario
import ForgotForm from "@/components/forms/ForgotForm.vue"; // Importa o formulario
import session from "@/services/sessionstorage";

export default {
  data() {
    return {
      loading: false,
      data: {}
    };
  },
  methods: {
    async sendEmail() {
      if (this.$refs.forgot.validate()) {
        this.loading = true;
        await this.$store
          .dispatch("auth/forgot", this.data)
          .then(() => {
            this.redirect();
          })
          .catch(({ errors }) => {
            this.$refs.forgot.setErrors(errors);
          });
      }
      this.loading = false;
    },
    redirect() {
      session.set(
        "auth_message",
        "Reset password email was sent successfully!"
      );
      this.$router.push({ name: "login" });
    }
  },
  components: {
    baseForm,
    ForgotForm
  }
};
</script>
