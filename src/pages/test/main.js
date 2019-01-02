import Vue from "vue";
 
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'typeface-roboto';
import 'material-design-icons/iconfont/material-icons.css';
import '@/lib/museui';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
