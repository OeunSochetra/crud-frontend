<template>
  <div class="flex items-center gap-3 text-[18px]">
    <span class="flex gap-1">
      <p>${{ formattedPrice }}</p>
      <p class="text-[10px] mt-1">.{{ decimalPart }}</p>
    </span>
    <span
      v-if="originalPrice"
      class="text-[12px] mt-2 text-primaryText line-through"
    >
      ${{ originalPrice.toFixed(2) }}
    </span>
  </div>
</template>
<script setup lang="ts">
import { computed, defineProps } from "vue";

interface Props {
  price: number;
  originalPrice?: number;
}
const props = defineProps<Props>();

const formattedPrice = computed(() => Math.floor(props.price));
const decimalPart = computed(() => ((props.price % 1) * 100).toFixed(0));
</script>
<style scoped></style>
