<template>
  <v-container fluid class="fill-height">
    <v-row>
      <v-col cols="12">
        <v-row justify="center" align="center">
          <v-col md="4" sm="8">
            <v-card class="elevation-4">
              <v-card-title class="justify-center">
                <h2>Sign In</h2>
              </v-card-title>
              <v-card-actions class="justify-center">
                <v-btn
                  v-for="(button, key) in buttons"
                  :key="key"
                  outlined
                  large
                  :color="button.color"
                >
                  <v-icon left>{{ button.icon }}</v-icon>
                </v-btn>
              </v-card-actions>
              <div class="form pa-5">
                <v-form>
                  <v-text-field
                    label="email"
                    filled
                    name="email"
                    prepend-inner-icon="fa-user"
                    type="text"
                    height="50"
                    :rules="[rules.required, rules.email]"
                  />
                  <div class="forget-link">
                    <a href="/forget/password" class="link">Forget password?</a>
                  </div>
                  <v-text-field
                    label="password"
                    filled
                    name="password"
                    prepend-inner-icon="fa-lock"
                    type="password"
                    height="50"
                    :rules="[rules.required]"
                  />
                  <v-btn block dark>Login</v-btn>
                </v-form>
                <v-card-actions class="pl-0 mt-2">
                  <a href="/register" class="link">Don't have an account? Register Now!</a>
                </v-card-actions>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        {
          icon: "fab fa-facebook-f",
          color: "primary"
        },
        {
          icon: "fab fa-github",
          color: "black"
        },
        {
          icon: "fab fa-google",
          color: "red"
        }
      ],
      rules: {
        required: value => !!value || "Field is required.",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        }
      }
    };
  }
};
</script>

<style>
.forget-link {
  text-align: right;
}
.link {
  color: #616161 !important;
  font-size: 14px;
}
</style>
