<template>
  <div v-for="(item, index) in productStore.productsList" :key="index">
    <!-- test -->
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        src="https://i.pinimg.com/control/474x/10/3b/27/103b2707be96ee0b90e6c9e2701d4f46.jpg"
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ item.name }}</div>
        <p class="text-gray-700 text-base">{{ item.description }}</p>
      </div>
      <div class="px-2 py-6 flex items-center gap-2 justify-center">
        <button
          @click="handleDelete(item._id)"
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
        <button
          @click="handleDelete(item._id)"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useProductStore } from "./store/productStore";

const productStore = useProductStore();

const handleDelete = (id: string) => {
  productStore.DELETE_PRODUCT(id);
  fetchData();
};

const fetchData = async () => {
  await productStore.GET_PRODUCT();
};

onMounted(() => {
  fetchData();
});
</script>

<style scoped></style>
