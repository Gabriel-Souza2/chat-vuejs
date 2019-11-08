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
    />
  </v-form>
</template>

<script>
import { required, email } from "@/mixins/forms/rules";
import hooks from "@/mixins/forms/hooks"

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
