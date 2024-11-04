<template>
  <div class="w-full flex flex-col gap-4">
    <div>
      <Hero />
    </div>

    <div class="flex items-center justify-between">
      <ReaderText text="Popular" size="large" />
      <Button @click="$router.push(RouteName.SEARCH)" type="primary"
        >View All
      </Button>
    </div>

    <div class="grid grid-cols-3 gap-4">
      <BookCard
        v-for="(item, index) in topBooksList"
        :key="index"
        :image="item?.image"
        :author="item.author"
        :title="item.title"
        :description="item.description"
        :ratingCount="item.ratingCount"
        :originalPrice="item.originalPrice"
        :discountPrice="item.discountPrice"
        :ratingStar="item.ratingStar"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBookStore } from "../../store/bookStore";
import { storeToRefs } from "pinia";
import BookCard from "../../components/BookCard.vue";
import Button from "../../components/Button.vue";
import ReaderText from "../../components/ReaderText.vue";
import Hero from "../../components/Hero.vue";
import { onMounted, ref } from "vue";
import RouteName from "../../constants/router-name";

const bookStore = useBookStore();
const { topBooksList } = storeToRefs(bookStore);
const { GET_TOP_BOOK } = useBookStore();
const loading = ref(false);

const fetchData = async () => {
  loading.value = true;
  await GET_TOP_BOOK();
  loading.value = false;
};

onMounted(() => {
  fetchData();
});
</script>
