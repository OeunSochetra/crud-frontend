<template>
  <div
    class="flex flex-col justify-between bg-backgroundColor shadow-lg w-[20rem] h-screen"
  >
    <div class="flex items-center justify-between p-8">
      <div class="flex items-center gap-4">
        <span>
          <img
            @click="$router.push(RouteName.PROFILE)"
            class="w-11 h-11 rounded-full shadow-lg object-cover border-2 border-primary cursor-pointer"
            :src="meProfile?.image"
            alt="profile"
          />
        </span>
        <span class="flex flex-col">
          <p class="text-black font-semibold capitalize">
            {{ meProfile?.username }}
          </p>
          <p class="text-primaryText font-normal capitalize text-[8px]">
            {{ meProfile?.email }}
          </p>
        </span>
      </div>
      <div>
        <span class="flex items-center gap-4 cursor-pointer">
          <span class="hover:text-primary transition duration-200 ease-in-out">
            <IconHeart />
          </span>
          <span class="hover:text-primary transition duration-200 ease-in-out">
            <IconShop />
          </span>
        </span>
      </div>
    </div>
    <span class="border border-#D2D2D2 -translate-y-[47rem]"></span>

    <Categories />
  </div>
</template>

<script setup lang="ts">
import Categories from "../../../components/Categories.vue";
import RouteName from "../../../constants/router-name";
import { useAuthStore } from "../../../store/auth";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const authStore = useAuthStore();
const { meProfile } = storeToRefs(authStore);
const { GET_ME } = useAuthStore();

const fetchMe = async () => {
  await GET_ME();
};

onMounted(() => {
  fetchMe();
});
</script>
<style scoped></style>
