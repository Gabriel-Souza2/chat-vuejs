<template>
  <v-form ref="loginForm">
    <v-text-field
      label="email"
      v-model="data.email"
      filled
      name="email"
      prepend-inner-icon="fa-at"
      type="text"
      height="50"
      :rules="[required, email]"
      :error-messages="messages.email"
      @change="clearErrors"
    />
    <div class="forget-link">
      <a href="/forgot/password" class="link">Forgot password?</a>
    </div>
    <v-text-field
      label="password"
      v-model="data.password"
      filled
      name="password"
      prepend-inner-icon="fa-lock"
      type="password"
      height="50"
      :rules="[required]"
      :error-messages="messages.password"
    />
  </v-form>
</template>

<script>
import { required, email } from "@/mixins/forms/rules";
import hooks from "@/mixins/forms/hooks";

export default {
  mixins: [hooks],
  data() {
    return {
      required,
      email,
      data: {},
      messages: {
        email: [],
        password: []
      }
    };
  },
  methods: {
    validate() {
      return this.$refs.loginForm.validate();
    },
    setErrors(errors) {
      for (let field in errors) {
        this.messages[field] = errors[field];
      }
    },
    clearErrors() {
      if (this.messages.email == "The selected email is invalid.")
        this.messages.email = "";
    }
  }
};
</script>
