import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import routes from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.state.auth.isLogged) {
    router.push({ name: "login" });
  }

  if ((to.name == "register" || to.name == "login") && store.state.auth.isLogged) {
    router.push({ name: "home" });
  }

  if (to.name == "socialLogin") {
    store.commit("auth/setToken", to.params);
    router.push({ name: "home" });
  }
  next();
});

export default router;
