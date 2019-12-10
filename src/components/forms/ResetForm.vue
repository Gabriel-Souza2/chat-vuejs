<template>
  <v-form ref="ResetForm">
    <v-text-field
      v-for="(field, key) in form"
      :key="key"
      :label="field.label"
      filled
      :ref="field.name"
      v-model="data[field.name]"
      :name="field.name"
      :prepend-inner-icon="field.icon"
      :type="field.type"
      height="50"
      :rules="field.rules"
      :error-messages="messages[field.name]"
      @input="passwordValidation"
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
      data: {},
      messages: {
        email: [],
        password: [],
        password_confirmation: []
      },
      form: [
        {
          label: "email",
          name: "email",
          icon: "fa-at",
          type: "text",
          rules: [required, email]
        },
        {
          label: "password",
          name: "password",
          icon: "fa-lock",
          type: "password",
          rules: [required]
        },
        {
          label: "password confirmation",
          name: "password_confirmation",
          icon: "fa-lock",
          type: "password",
          rules: [required]
        }
      ]
    };
  },
  methods: {
    validate() {
      return (
        this.$refs.ResetForm.validate() &&
        this.messages.password_confirmation.length == 0
      );
    },
    setErrors(errors) {
      for (let field in errors) {
        this.messages[field] = errors[field];
      }
    },
    passwordValidation() {
      if (this.data.password != this.data.password_confirmation) {
        this.messages.password_confirmation.push(
          "Your password and confirmation password do not match"
        );
      } else {
        this.messages.password_confirmation = [];
      }
    }
  }
};
</script>
