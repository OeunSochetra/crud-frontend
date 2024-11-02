<template>
  <div class="w-[21rem] bg-white shadow-md p-4 rounded-lg">
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
          <p class="text-primary font-semibold capitalize w-[150px] truncate">
            {{ author }}
          </p>
          <p class="text-black font-semibold capitalize w-[140px] truncate">
            {{ title }}
          </p>
          <p
            class="text-primaryText font-normal text-[14px] w-[140px] truncate"
          >
            {{ description }}
          </p>
          <span class="flex items-center gap-2.5">
            <Rate :ratingStar="ratingStar" />
            <span class="text-[14px]"> ({{ ratingCount }}) </span>
          </span>
          <p class="text-black font-semibold">
            <Price
              :discountPrice="discountPrice ?? 0"
              :originalPrice="originalPrice ?? 0"
            />
          </p>
        </span>
        <span class="cursor-pointer"><IconClickDot /></span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Rate from "./Rate.vue";
import Price from "./Price.vue";
import { defineProps } from "vue";

interface Props {
  image: string;
  author: string;
  title: string;
  description: string;
  originalPrice?: number;
  discountPrice?: number;
  ratingCount?: number;
  ratingStar?: number;
}
const props = defineProps<Props>();
</script>
<style scoped></style>
