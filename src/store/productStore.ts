import { get } from "../services/http";
import { ref } from "vue";
import { defineStore } from "pinia";

export const useProductStore = defineStore("product", () => {
  const productsList = ref<any[]>([]);
  const meta = ref<any>(null);

  const queryProduct = ref({
    page: 1,
    limit: 10,
    search: "product",
  });

  const GET_PRODUCT = async () => {
    try {
      const res = await get<any[]>("api/products", {
        params: {
          page: queryProduct.value.page,
          limit: queryProduct.value.limit,
          search: queryProduct.value.search,
        },
      });

      if (res.message === "success") {
        productsList.value = res?.data;
        meta.value = res.meta;
      } else {
        console.error("Failed to fetch products:", res.message);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return { productsList, GET_PRODUCT };
});
