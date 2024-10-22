import { get } from "../services/http";
import { ref } from "vue";
import { defineStore } from "pinia";

export const useProductStore = defineStore("product", () => {
  const productsList = ref<any[]>([]);

  const GET_PRODUCT = async () => {
    try {
      const res = await get<any[]>("api/products");
      console.log("res", res);

      if (res.message === "success") {
        productsList.value = res.data;
      } else {
        console.error("Failed to fetch products:", res.message);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return { productsList, GET_PRODUCT };
});
