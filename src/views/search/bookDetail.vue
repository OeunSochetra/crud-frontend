<template>
  this is book detail page
  {{ id }}
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
// router.push("/search");
const id = route?.params?.id as string;
console.log("route", id);
</script>
<style scoped></style>
