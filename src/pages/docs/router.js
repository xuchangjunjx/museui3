import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      name: "Home",
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
// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title;
//   next();
// });

// router.afterEach(() => {
//   window.scrollTo(0, 0);
// });
export default router;
