import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Readme from "./views/readme/readme";
Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/readme",
      name: "readme",
      component: Readme
    },
    {
      path: "/render",
      name: "render",
      component: () => import("./views/render/render")
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
