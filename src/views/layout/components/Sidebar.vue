<template>
  <div class="flex flex-col justify-between bg-white shadow-lg w-24 h-screen">
    <div class="flex flex-col gap-6 cursor-pointer items-center mt-[20rem]">
      <p
        v-for="(item, index) in menu"
        :key="index"
        class="text-primary font-semibold"
      >
        <component :is="item.icon" />
      </p>
    </div>
    <span class="mb-6 text-center text-[12px] cursor-pointer">Log Out</span>
  </div>
</template>

<script setup lang="ts">
import { menu } from "../../../constants/constant";
</script>

<style scoped></style>
