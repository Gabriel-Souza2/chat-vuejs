<template>
  <baseForm
    title="Sign Up"
    button_name="Register"
    href="/login"
    link_message="Already have an account? Login Here"
    @send="register"
    :loading="loading"
  >
    <ProfileForm v-model="data" ref="profile" />
  </baseForm>
</template>

<script>
import baseForm from "@/base/baseForm.vue"; // Importa a base do formulario
import ProfileForm from "@/components/forms/ProfileForm.vue"; // Importa o formulario

export default {
  data() {
    return {
      data: {},
      loading: false
    };
  },
  methods: {
    async register() {
      if (this.$refs.profile.validate()) {
        this.loading = true;
        await this.$store
          .dispatch("auth/register", this.data)
          .then(() => {
            this.$router.push({ name: "home" });
          })
          .catch(({ errors }) => {
            this.$refs.profile.setErrors(errors);
          });
      }
      this.loading = false;
    }
  },
  components: {
    baseForm,
    ProfileForm
  }
};
</script>
