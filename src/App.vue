<template>
  <HelloWorld />

  <div>
    <form
      @submit.prevent="submitForm"
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          v-model="createProduct.name"
          placeholder="Name"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="description"
        >
          Description
        </label>
        <input
          id="description"
          type="text"
          v-model="createProduct.description"
          placeholder="Description"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="stock">
          Stock
        </label>
        <input
          id="stock"
          type="number"
          v-model="createProduct.stock"
          placeholder="Stock"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="price">
          Price
        </label>
        <input
          id="price"
          type="number"
          v-model="createProduct.price"
          placeholder="Price"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add New Product
      </button>
    </form>
  </div>

  <div
    class="mt-6"
    v-for="(item, index) in productStore.productsList"
    :key="index"
  >
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        src="https://i.pinimg.com/564x/6c/80/e8/6c80e8130810423ad00a5f8f2c8b886b.jpg"
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
import { onMounted, ref } from "vue";
import { useProductStore } from "./store/productStore";
import { ICreateProduct } from "./constants/common";

const productStore = useProductStore();

const createProduct = ref<ICreateProduct>({
  name: "",
  description: "",
  stock: null,
  price: null,
});

const submitForm = async () => {
  if (!createProduct.value.name || !createProduct.value.description) {
    alert("Please fill in all required fields.");
    return;
  }
  await productStore.CREATE_PRODUCT(createProduct.value);
  // Clear the form after submission
  createProduct.value = {
    name: "",
    description: "",
    stock: null,
    price: null,
  };
  fetchData();
};

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
