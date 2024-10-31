<template>
  <div>Home</div>
  <p class="cursor-pointer" @click="$router.push(RouteName.PRODUCT)">
    go to product
  </p>
  <p class="cursor-pointer" @click="logout()">Log Out</p>
</template>

<script setup lang="ts">
import { useAuthStore } from "../store/auth";
import { useRouter } from "vue-router";
import RouteName from "../constants/router-name";

const router = useRouter();
const authStore = useAuthStore();

const logout = async () => {
  await authStore.SIGN_OUT();
  router.push(RouteName.SIGN_IN);
};
</script>
