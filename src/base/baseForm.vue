<template>
  <v-container fluid class="full-height">
    <v-row>
      <v-col cols="12">
        <v-row justify="center" align="center">
          <v-col md="4" sm="9">
            <v-card class="elevation-4 pa-5">
              <v-card-title class="justify-center">
                <h2>{{ title }}</h2>
              </v-card-title>
              <slot></slot>
              <v-btn :loading="loading" block dark class="mt-2" @click="send">{{ button_name }}</v-btn>
              <v-card-actions v-if="link" class="pl-0 mt-2">
                <a :href="href" class="link">{{ link_message }}</a>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    title: String,
    button_name: String,
    link: {
      type: Boolean,
      default: true
    },
    href: {
      type: String,
      default: ""
    },
    link_message: {
      type: String,
      default: ""
    },
    loading: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    send() {
      this.$emit("send", true);
    }
  }
};
</script>
<style scoped>
.full-height {
  height: 100%;
  align-items: center;
  box-align: center;
  display: flex;
  flex-wrap: wrap;
}
</style>
