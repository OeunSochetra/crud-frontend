import { get, deleteData, post } from "../services/http";
import { ref } from "vue";
import { defineStore } from "pinia";
import { IProduct, IMeta, ICreateProduct } from "../constants/common";

export const useProductStore = defineStore("product", () => {
  const productsList = ref<IProduct[]>([]);
  const productMeta = ref<IMeta | null>(null);

  const queryProduct = ref({
    page: 1,
    limit: 10,
    search: "",
  });

  // create new product

  const CREATE_PRODUCT = async (data: ICreateProduct) => {
    try {
      const res = await post<ICreateProduct>("api/products", data);

      if (res.message === "success") {
        console.log("Product created successfully");
      } else {
        console.error("Failed to create product:", res.message);
      }
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const GET_PRODUCT = async () => {
    try {
      const res = await get<IProduct[]>("api/products", {
        page: queryProduct.value.page,
        limit: queryProduct.value.limit,
        search: queryProduct.value.search,
      });

      if (res.message === "success") {
        productsList.value = res?.data || [];
        productMeta.value = res?.meta as unknown as IMeta;
        console.log("productMeta", productMeta.value);
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

    CREATE_PRODUCT,
    GET_PRODUCT,
    DELETE_PRODUCT,
  };
});
