import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Content from "../components/Content.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Content,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
