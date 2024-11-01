<template>
  <div
    class="flex flex-col justify-between bg-backgroundColor shadow-lg w-24 h-screen"
  >
    <div class="flex flex-col gap-6 cursor-pointer items-center mt-[20rem]">
      <p
        v-for="(item, index) in menu"
        :key="index"
        class="group cursor-pointer"
        :class="{
          'text-white bg-custom-gradient px-2.5 py-2.5 rounded-full transition duration-200 ease-in-out':
            activeRoute(item.route),
          ' group-hover:text-primary transition duration-200 ease-in-out':
            !activeRoute(item.route),
        }"
        @click="navigator(item.route)"
      >
        <component
          :is="item.icon"
          width="20"
          height="20"
          :class="{
            ' text-white': activeRoute(item.route),
            'group-hover:text-primary transition duration-200 ease-in-out':
              !activeRoute(item.route),
          }"
        />
      </p>
    </div>
    <span @click="logout" class="mb-6 flex items-center justify-center">
      <div class="Btn cursor-pointer px-3 py-3 rounded-full">
        <IconSignOut class="text-white" />
      </div>
    </span>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { menu } from "../../../constants/constant";
import { useAuthStore } from "../../../store/auth";
import RouteName from "../../../constants/router-name";
import { ref } from "vue";

const isHover = ref<boolean>(false);

const navigator = (route: string) => {
  router.push(route);
};

const activeRoute = (routeName: string) => {
  return router.currentRoute.value.name === routeName;
};

const router = useRouter();
const authStore = useAuthStore();

const logout = async () => {
  await authStore.SIGN_OUT();
  router.push(RouteName.SIGN_IN);
};
</script>

<style scoped>
.Btn {
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
  background: linear-gradient(90deg, #0e89d3, #0daed1);
}
</style>
