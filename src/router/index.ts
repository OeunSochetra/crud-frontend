import { createRouter, createWebHistory } from "vue-router";
import RouteName from "../constants/router-name";

const routes = [
  {
    path: "/",
    name: RouteName.HOME,
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/login",
    name: RouteName.LOGIN,
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/product",
    name: RouteName.PRODUCT,
    component: () => import("../views/Product.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
