import { createRouter, createWebHistory } from "vue-router";
import RouteName from "../constants/router-name";
import { useAuthStore } from "../store/auth";

const routes = [
  {
    path: "/",
    name: RouteName.HOME,
    component: () => import("../views/Home.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/sign_in",
    name: RouteName.SIGN_IN,
    component: () => import("../views/authentication/sign_in.vue"),
  },
  {
    path: "/sign_up",
    name: RouteName.SIGN_UP,
    component: () => import("../views/authentication/sign_up.vue"),
  },
  {
    path: "/product",
    name: RouteName.PRODUCT,
    component: () => import("../views/Product.vue"),
    meta: { requiresAuth: true },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Global route guard to protect routes that require authentication
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const token = localStorage.getItem("accessToken");
  // console.log("Is Authenticated:", authStore.isAuthenticated);

  if (to.meta.requiresAuth && !token) {
    // If the route requires auth and the user is not authenticated, redirect to login
    next({ path: RouteName.SIGN_IN });
  } else {
    next(); // Proceed to the route
  }
});

export default router;
