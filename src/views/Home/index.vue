<template>
  <div class="w-full flex flex-col">
    <div>
      <Hero />
    </div>
    <div class="grid grid-cols-3 gap-4 mt-5">
      <BookCard
        v-for="(item, index) in booksList"
        :key="index"
        :image="item?.image"
        :author="item.author"
        :title="item.title"
        :description="item.description"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBookStore } from "../../store/bookStore";
import { storeToRefs } from "pinia";
import BookCard from "../../components/BookCard.vue";
import Hero from "../../components/Hero.vue";
import { onMounted, ref } from "vue";

const bookStore = useBookStore();
const { booksList, queryBook } = storeToRefs(bookStore);
const { GET_BOOK } = useBookStore();

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
