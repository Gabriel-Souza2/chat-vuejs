<template>
  <v-form ref="profileForm">
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
    />
    <v-select
      v-model="data.gender"
      prepend-inner-icon="fa-venus-mars"
      filled
      ref="gender"
      :items="genders"
      label="Genders"
    ></v-select>
  </v-form>
</template>

<script>
import { required, email } from "@/mixins/forms/rules";
import hooks from "@/mixins/forms/hooks";

export default {
  mixins: [hooks],
  data() {
    return {
      data: {
        gender: "male"
      },
      messages: {
        email: [],
        password: [],
        first_name: [],
        last_name: [],
        birthday: []
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
          label: "Name",
          name: "first_name",
          icon: "fa-user",
          type: "text",
          rules: [required]
        },
        {
          label: "Last Name",
          name: "last_name",
          icon: "fa-address-card",
          type: "text",
          rules: [required]
        },
        {
          label: "Birthday",
          name: "birthday",
          icon: "fa-calendar-day",
          type: "date",
          rules: [required]
        }
      ],
      genders: [
        {
          text: "Male",
          value: "male"
        },
        {
          text: "Female",
          value: "female"
        }
      ]
    };
  },
  methods: {
    validate() {
      return this.$refs.profileForm.validate();
    },
    setErrors(errors) {
      for (let field in errors) {
        this.messages[field] = errors[field];
      }
    }
  }
};
</script>
