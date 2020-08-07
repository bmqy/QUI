import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/demo/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/QUI/",
    name: "首页",
    component: Home
  },
  {
    path: "/QUI/text",
    name: "文本",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/demo/Text.vue")
  },
  {
    path: "/QUI/button",
    name: "按钮",
    component: () => import("../views/demo/Button.vue")
  },
  {
    path: "/QUI/row",
    name: "栅格",
    component: () => import("../views/demo/Row.vue")
  },
  {
    path: "/QUI/list",
    name: "列表",
    component: () => import("../views/demo/List.vue")
  },
  {
    path: "/QUI/grid",
    name: "宫格",
    component: () => import("../views/demo/Grid.vue")
  },
  {
    path: "/QUI/form",
    name: "表单",
    component: () => import("../views/demo/Form.vue")
  },
  {
    path: "/QUI/table",
    name: "表格",
    component: () => import("../views/demo/Table.vue")
  },
  {
    path: "/QUI/panel",
    name: "面板",
    component: () => import("../views/demo/Panel.vue")
  },
  {
    path: "/QUI/tab",
    name: "tab",
    component: () => import("../views/demo/Tab.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
