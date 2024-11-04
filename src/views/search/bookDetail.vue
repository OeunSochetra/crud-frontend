<template>
  <div
    :class="[
      'w-full flex flex-col',
      loading ? 'flex items-center justify-center h-screen' : '',
    ]"
  >
    <Loader class="" v-if="loading" />
    <p v-else>
      this is book detail page
      {{ bookDetail }}
    </p>
  </div>
</template>
<script setup lang="ts">
import { useBookStore } from "../../store/bookStore";
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import Loader from "../../components/Loader.vue";

const bookStore = useBookStore();
const { GET_BOOK_DETAIL } = useBookStore();
const { bookDetail } = storeToRefs(bookStore);

const route = useRoute();
const loading = ref(false);

console.log("bookDetail", bookDetail.value);

const fetchData = async () => {
  loading.value = true;
  await GET_BOOK_DETAIL(route?.params?.id as string);
  loading.value = false;
};

onMounted(() => {
  fetchData();
});
</script>
<style scoped></style>
