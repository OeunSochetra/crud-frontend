import { defineStore } from "pinia";
import { IBook, IMeta } from "../constants/common";
import { get } from "../services/http";
import { ref } from "vue";

export const useBookStore = defineStore("book", () => {
  const baseURI = "api/books";

  const booksList = ref<IBook[]>([]);
  const topBooksList = ref<IBook[]>([]);
  const bookDetail = ref<IBook | null>(null);
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
      } else {
        console.error("Failed to fetch books:", res.message);
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const GET_TOP_BOOK = async () => {
    try {
      const res = await get<IBook[]>(`${baseURI}/top`);

      if (res.message === "success") {
        topBooksList.value = res.data;
      } else {
        console.error("Failed to fetch top books:", res.message);
      }
    } catch (error) {
      console.error("Error fetching top books:", error);
    }
  };

  const GET_BOOK_DETAIL = async (id: string) => {
    try {
      const res = await get<IBook>(`${baseURI}/${id}`);
      if (res.message === "success") {
        bookDetail.value = res.data;
      } else {
        console.error("Failed to fetch book detail:", res.message);
      }
    } catch (error) {
      console.error("Error fetching book detail:", error);
    }
  };

  return {
    booksList,
    topBooksList,
    bookDetail,
    queryBook,
    GET_BOOK,
    GET_TOP_BOOK,
    GET_BOOK_DETAIL,
  };
});
