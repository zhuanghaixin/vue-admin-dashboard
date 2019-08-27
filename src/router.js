import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Team from "./views/Team.vue";
import SignIn from "./views/SignInFlow/SignIn.vue";
import Request from "./views/SignInFlow/Request.vue";
import Recover from "./views/SignInFlow/Recover.vue";
import * as netlifyIdentityWidget from "netlify-identity-widget";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: Home,
      meta: {
        requireAuth: true
      }
    },
    {
      path: "/team",
      name: "team",
      component: Team,
      meta: {
        requireAuth: true
      }
    },
    {
      path: "/signin",
      name: "SignIn",
      component: SignIn
    },
    {
      path: "/request",
      name: "Request",
      component: Request
    },
    {
      path: "/recover",
      name: "Recover",
      component: Recover
    }
  ]
});
router.beforeEach((to, from, next) => {
  // ...
  const cuurentUser = netlifyIdentityWidget.currentUser();
  const requireAuth = to.matched.some(record => {
    return record.meta.requireAuth
  })
  if (requireAuth && !cuurentUser) {
    next("signin")
  } else {
    next()
  }
})
export default router;