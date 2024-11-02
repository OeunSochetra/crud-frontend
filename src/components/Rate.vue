<template>
  <div class="flex gap-2">
    <IconStar
      v-for="index in 5"
      :key="index"
      :class="index <= ratingStar ? 'text-danger' : 'text-red-100'"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import IconStar from "./icons/IconStar.vue";

interface Props {
  ratingStar?: number;
}

const props = defineProps<Props>();
const ratingStar = props.ratingStar ?? 0;
</script>

<style scoped></style>
