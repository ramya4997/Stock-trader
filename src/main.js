import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import { routes } from "./routes";
import store from "./store/store";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuetify);
export default new Vuetify({});

Vue.http.options.root = "https://vuejs-stock-trader-73769.firebaseio.com/";

Vue.filter("currency", (value) => {
  return "$" + value.toLocaleString();
});

const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  router,
  store,
  vuetify: new Vuetify(),
  render: (h) => h(App),
}).$mount("#app");
