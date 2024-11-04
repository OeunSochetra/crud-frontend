<template>
  <div :class="computedClass">
    <p>{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";

interface Props {
  text: string;
  type?: "primary" | "secondary" | "danger" | "link";
  size?: "small" | "medium" | "large";
}

const props = defineProps<Props>();

const computedClass = computed(() => {
  return [
    props.type ? `text-${props.type}` : "",
    props.size ? `text-${props.size}` : "",
  ]
    .join(" ")
    .trim();
});
</script>

<style scoped>
/* .text-primary {
  @apply text-primary;
}

.text-secondary {
  @apply text-secondary;
}

.text-danger {
  @apply text-danger;
}

.text-link {
  @apply text-primary;
} */

.text-small {
  @apply text-[12px] font-bold;
}

.text-medium {
  @apply text-[16px] font-bold;
}

.text-large {
  @apply text-[22px] font-bold;
}
</style>
