const routes = [
  {
    path: "/",
    component: () => import("@/templates/Layout.vue"),
    children: [
      {
        path: "home",
        name: "home",
        meta: { auth: true },
        component: () => import("@/views/Home.vue")
      },
      {
        path: "about",
        name: "about",
        meta: { auth: true },
        component: () => import("@/views/About.vue")
      }
    ]
  },

  // Init Auth Routes

  {
    path: "/login",
    name: "login",
    component: () => import("@/views/auth/Login.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/auth/Register.vue")
  },
  {
    path: "/forgot/password",
    name: "forgotPassword",
    component: () => import("@/views/auth/ForgotPassword.vue")
  },
  {
    path: "/reset/password/:token",
    name: "resetPassword",
    component: () => import("@/views/auth/ResetPassword.vue")
  },
  {
    path: "/auth/social/login/:token",
    name: "socialLogin"
  },

  // End Auth Routes
  {
    path: "*",
    component: () => import("@/views/errors/Error404.vue")
  }
];

export default routes;
