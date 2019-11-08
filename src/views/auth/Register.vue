<template>
  <baseForm
    title="Sign Up"
    button_name="Register"
    href="/login"
    link_message="Already have an account? Login Here"
    @send="register"
  >
    <ProfileForm v-model="data" />
  </baseForm>
</template>

<script>
import baseForm from "@/base/baseForm.vue"; // Importa a base do formulario
import ProfileForm from "@/components/forms/ProfileForm.vue"; // Importa o formulario
export default {
  data() {
    return {
      data: {}
    };
  },
  methods: {
    register() {
      console.log(this.data);
    }
  },
  components: {
    baseForm,
    ProfileForm
  }
};
</script>
