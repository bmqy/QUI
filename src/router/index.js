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
    component: () => import("../views/demo/Text.vue")
  },
  {
    path: "/button",
    name: "按钮",
    component: () => import("../views/demo/Button.vue")
  },
  {
    path: "/row",
    name: "栅格",
    component: () => import("../views/demo/Row.vue")
  },
  {
    path: "/list",
    name: "列表",
    component: () => import("../views/demo/List.vue")
  },
  {
    path: "/grid",
    name: "宫格",
    component: () => import("../views/demo/Grid.vue")
  },
  {
    path: "/form",
    name: "表单",
    component: () => import("../views/demo/Form.vue")
  },
  {
    path: "/table",
    name: "表格",
    component: () => import("../views/demo/Table.vue")
  },
  {
    path: "/panel",
    name: "面板",
    component: () => import("../views/demo/Panel.vue")
  },
  {
    path: "/tab",
    name: "tab",
    component: () => import("../views/demo/Tab.vue")
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
