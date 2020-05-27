import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/demo/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "首页",
    component: Home
  },
  {
    path: "/text",
    name: "文本",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/demo/Text.vue")
  },
  {
    path: "/button",
    name: "按钮",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/demo/Button.vue")
  },
  {
    path: "/list",
    name: "列表",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/demo/List.vue")
  },
  {
    path: "/grid",
    name: "宫格",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/demo/Grid.vue")
  },
  {
    path: "/form",
    name: "表格",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/demo/Form.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
