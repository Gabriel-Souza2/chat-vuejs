<template>
  <baseForm
    title="Reset Password"
    button_name="send password reset email"
    :link="false"
    @send="sendEmail"
  >
    <div class="mb-2">
      Enter your email address and we will send you a link to reset your password.
    </div>
    <ForgotForm v-model="data" />
  </baseForm>
</template>

<script>
import baseForm from "@/base/baseForm.vue"; // Importa a base do formulario
import ForgotForm from "@/components/forms/ForgotForm.vue"; // Importa o formulario
export default {
  data() {
    return {
      data: {}
    };
  },
  methods: {
    sendEmail() {}
  },
  components: {
    baseForm,
    ForgotForm
  }
};
</script>
