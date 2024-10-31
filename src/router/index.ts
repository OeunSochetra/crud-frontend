import { createRouter, createWebHistory } from "vue-router";
import RouteName from "../constants/router-name";
// import { useAuthStore } from "../store/auth";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: RouteName.HOME,
      component: () => import("../views/Home.vue"),
      meta: { requiresAuth: true, keepAlive: true, title: "Home" },
    },
    {
      path: "/sign_in",
      name: RouteName.SIGN_IN,
      component: () => import("../views/authentication/sign_in.vue"),
      meta: { requiresAuth: false, keepAlive: true, title: "Sign Up" },
    },
    {
      path: "/sign_up",
      name: RouteName.SIGN_UP,
      component: () => import("../views/authentication/sign_up.vue"),
      meta: { requiresAuth: false, keepAlive: true, title: "Sign In" },
    },
    {
      path: "/product",
      name: RouteName.PRODUCT,
      component: () => import("../views/Product.vue"),
      meta: { requiresAuth: true, keepAlive: true, title: "Product" },
    },
    {
      path: "/:pathMatch(.*)*",
      name: RouteName.NOTFOUND,
      component: () => import("../views/404/NotFound.vue"),
      meta: { requiresAuth: true, keepAlive: true, title: "Page not found" },
    },
  ],
});

// Global route guard to protect routes that require authentication
router.beforeEach((to, from, next) => {
  // const authStore = useAuthStore();
  // authStore.accessToken ||
  const token = localStorage.getItem("accessToken");

  // Check if route requires authentication and if the user is authenticated
  if (to.meta.requiresAuth && !token) {
    // Redirect to the sign-in page if not authenticated
    next({ name: RouteName.SIGN_IN });
  } else {
    next(); // Proceed to the route if authenticated or no auth required
  }
});

export default router;
