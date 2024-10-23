import { get, deleteData } from "../services/http";
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
        console.log("meta", meta.value);
      } else {
        console.error("Failed to fetch products:", res.message);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const DELETE_PRODUCT = async (id: string) => {
    try {
      const res = await deleteData<{ message: string }>("api/products", id);

      if (res.message === "success") {
        console.log("Product deleted successfully");
      } else {
        console.error("Failed to delete product:", res.message);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return {
    productsList,

    //function

    GET_PRODUCT,
    DELETE_PRODUCT,
  };
});
