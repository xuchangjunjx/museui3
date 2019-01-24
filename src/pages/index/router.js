import Vue from "vue";
import Router from "vue-router";
import store from "./store";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      meta: {
        requireAuth: true
      },
      component: () => import("./views/home/home"),
      children: [
        {
          path: "/readme",
          name: "readme",
          component: () => import("./views/readme/readme")
        },
        {
          path: "/render",
          name: "render",
          component: () => import("./views/render/render")
        }
      ]
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("./views/login/login")
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (!store.state.user) {
      next({
        path: "/login",
        query: {
          redirect: to.fullPath
        } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});
export default router;
