import Vue from "vue";
import App from "./App.vue";
import Vuelidate from "vuelidate";
import store from "./store";
import "./assets/main.css";
import "./assets/custom.sass";

Vue.use(Vuelidate);

new Vue({
  render: (h) => h(App),
  store: store,
}).$mount("#app");
