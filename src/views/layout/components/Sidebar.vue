<template>
  <div
    class="flex flex-col justify-between bg-backgroundColor shadow-lg w-24 h-screen overflow-hidden"
  >
    <div
      class="flex flex-col gap-6 cursor-pointer items-center mt-[20rem] overflow-hidden"
    >
      <p
        v-for="(item, index) in menu"
        :key="index"
        class="group cursor-pointer"
        @click="navigator(item.route)"
      >
        <component :is="item.icon" />
      </p>
    </div>
    <span @click="logout" class="mb-6 text-center text-[12px] cursor-pointer">
      Log Out
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

const router = useRouter();
const authStore = useAuthStore();

const logout = async () => {
  await authStore.SIGN_OUT();
  router.push(RouteName.SIGN_IN);
};
</script>

<style scoped></style>
