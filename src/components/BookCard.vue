<template>
  <div class="w-full bg-white shadow-md p-4 rounded-lg">
    <div class="flex gap-4">
      <div>
        <img
          :src="image"
          alt="book"
          class="w-full h-36 object-cover rounded-md shadow-lg"
        />
      </div>
      <div class="flex gap-6">
        <span class="flex flex-col gap-1">
          <p class="text-primary font-semibold capitalize">{{ author }}</p>
          <p class="text-black font-semibold capitalize">{{ title }}</p>
          <p class="text-primaryText font-normal text-[14px]">
            {{ description }}
          </p>
          <span class="flex items-center gap-2.5">
            <Rate /> <span class="text-[14px]">(457)</span>
          </span>
          <p class="text-black font-semibold">
            <Price :price="19.99" :originalPrice="39.99" />
          </p>
        </span>
        <span class="cursor-pointer"><IconClickDot /></span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  image: string;
  author: string;
  title: string;
  description: string;
}
const props = defineProps<Props>();
</script>
<style scoped></style>
