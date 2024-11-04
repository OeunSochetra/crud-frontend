<template>
  <div
    :class="[
      'w-full flex flex-col',
      loading ? 'flex items-center justify-center h-screen' : '',
    ]"
  >
    <Loader class="" v-if="loading" />
    <div v-else class="grid grid-cols-3 gap-4 cursor-pointer">
      <BookCard
        @click="navigateToDetail(item._id)"
        v-for="(item, index) in booksList"
        :key="index"
        :image="item?.image"
        :author="item?.author"
        :title="item?.title"
        :description="item?.description"
        :ratingCount="item?.ratingCount"
        :originalPrice="item?.originalPrice"
        :discountPrice="item?.discountPrice"
        :ratingStar="item?.ratingStar"
      />
    </div>
  </div>
  <router-view />
</template>

<script setup lang="ts">
import { useBookStore } from "../../store/bookStore";
import { storeToRefs } from "pinia";
import BookCard from "../../components/BookCard.vue";
import Loader from "../../components/Loader.vue";
import { onMounted, ref } from "vue";
import RouteName from "../../constants/router-name";
import router from "../../router";

const bookStore = useBookStore();
const { booksList, queryBook } = storeToRefs(bookStore);
const { GET_BOOK } = useBookStore();

const navigateToDetail = (id: string) => {
  console.log("id", id);
  router.push({ name: RouteName.BOOK_DETAIL, params: { id } });
};

const search = ref("");
const loading = ref(false);

const fetchData = async () => {
  loading.value = true;
  await GET_BOOK();
  loading.value = false;
};

onMounted(() => {
  fetchData();
});
</script>

<style scoped></style>
