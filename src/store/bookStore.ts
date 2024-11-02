import { defineStore } from "pinia";
import { IBook, IMeta } from "../constants/common";
import { get } from "../services/http";
import { ref } from "vue";

export const useBookStore = defineStore("book", () => {
  const baseURI = "api/books";

  const booksList = ref<IBook[]>([]);
  const bookMeta = ref<IMeta | null>(null);

  const queryBook = ref({
    page: 1,
    limit: 10,
    search: "",
  });

  const GET_BOOK = async () => {
    try {
      const res = await get<IBook[]>(baseURI, {
        page: queryBook.value.page,
        limit: queryBook.value.limit,
        search: queryBook.value.search,
      });

      if (res.message === "success") {
        booksList.value = res?.data;
        bookMeta.value = res?.meta as unknown as IMeta;
        console.log("Books fetched from res", res.data);
        console.log("Books fetched from store", booksList.value);
      } else {
        console.error("Failed to fetch books:", res.message);
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return {
    booksList,
    queryBook,
    GET_BOOK,
  };
});
