<template>
  <v-form>
    <v-text-field
      label="email"
      v-model="data.email"
      filled
      name="email"
      prepend-inner-icon="fa-at"
      type="text"
      height="50"
      :rules="[required, email]"
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
      data: {}
    };
  }
};
</script>
