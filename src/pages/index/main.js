import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "typeface-roboto";
import "material-design-icons/iconfont/material-icons.css";
import "@/lib/museui";
import "ionicons/dist/css/ionicons.css";
import markdownElement from "@/components/markdownElement.vue";
Vue.component("markdown-element", markdownElement);
import theme from "@/lib/theme";

Vue.config.productionTip = false;
Vue.prototype.$theme = theme;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
