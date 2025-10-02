import Vue from "vue";
import VueRouter from "vue-router";

import pagesDetail from "@/views/pagesDetail.vue";
import componentsDetail from "@/views/componentsDetail.vue";
import DashboardPage from "@/views/DashboardPage.vue";

Vue.use(VueRouter);

const routes = [
  {path:"/",name:"dashboard",component:DashboardPage},
  { path: "/components", name: "components", component: componentsDetail },
  { path: "/detail", name: "detail", component: pagesDetail }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
