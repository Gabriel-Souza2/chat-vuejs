<template>
  <v-form ref="forgotForm">
    <v-text-field
      label="email"
      v-model="data.email"
      filled
      name="email"
      prepend-inner-icon="fa-at"
      type="text"
      height="50"
      :rules="[required, email]"
      :error-messages="messages['email']"
      :readonly="readonly"
      @input="clearErrors"
    />
  </v-form>
</template>

<script>
import { required, email } from "@/mixins/forms/rules";
import hooks from "@/mixins/forms/hooks";
export default {
  mixins: [hooks],
  props: {
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      required,
      email,
      data: {},
      messages: {
        email: []
      }
    };
  },
  methods: {
    validate() {
      return this.$refs.forgotForm.validate();
    },
    setErrors(errors) {
      for (let field in errors) {
        this.messages[field] = errors[field];
      }
    },
    clearErrors() {
      this.messages.email = [];
    }
  }
};
</script>

