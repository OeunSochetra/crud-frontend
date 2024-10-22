<template>
  <div v-for="(item, index) in productStore.productsList" :key="index">
    <h1 className="text-3xl text-red-500 font-bold underline">
      {{ item.name }}
    </h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useProductStore } from "./store/productStore";

const productStore = useProductStore();

const fetchData = async () => {
  await productStore.GET_PRODUCT();
};

onMounted(() => {
  fetchData();
});
</script>

<style scoped></style>
