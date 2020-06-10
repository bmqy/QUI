import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.prototype.colors = [
  {
    title: "白色",
    name: "white"
  },
  {
    title: "灰色",
    name: "gray"
  },
  {
    title: "黑色",
    name: "black"
  },
  {
    title: "红色",
    name: "red"
  },
  {
    title: "蓝色",
    name: "blue"
  },
  {
    title: "橙色",
    name: "orange"
  }
];

Vue.prototype.sizes = [
  {
    title: "超小",
    name: "mini"
  },
  {
    title: "小",
    name: "small"
  },
  {
    title: "普通",
    name: "normal"
  },
  {
    title: "大",
    name: "large"
  },
  {
    title: "超大",
    name: "bigger"
  }
];

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
