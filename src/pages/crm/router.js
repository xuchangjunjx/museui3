import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "menu",
      component: () => import("./components/Menu")
    },
    {
      path: "/hello",
      name: "HelloWorld",
      component: () => import("@/components/HelloWorld")
    }
  ]
});
