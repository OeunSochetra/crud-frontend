<template>
  <button :class="buttonClasses" @click="$emit('click')" :disabled="disabled">
    <slot>{{ text }}</slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";

interface Props {
  text?: string;
  type?: "primary" | "secondary" | "danger" | "link";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}

const props = defineProps<Props>();

const buttonClasses = computed(() => {
  return [
    "rounded-full w-[8rem] font-semibold transition duration-300",
    {
      "bg-secondary text-white hover:bg-primary": props.type === "primary",
      "bg-primary text-white hover:bg-secondary": props.type === "secondary",
      "bg-secondaryDanger text-white hover:bg-danger": props.type === "danger",
      "text-blue-500 hover:underline": props.type === "link",
      "py-1 px-2 text-sm": props.size === "small",
      "py-2 px-4 text-base": props.size === "medium",
      "py-3 px-6 text-lg": props.size === "large",
      "opacity-50 cursor-not-allowed": props.disabled,
    },
  ];
});
</script>

<style scoped></style>
