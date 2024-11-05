<template>
  <div>
    <ReaderText text="My Profile" size="large" />
  </div>
  <p>{{ meProfile?._id }}</p>
  <p>{{ meProfile?.email }}</p>
  <p>{{ meProfile?.username }}</p>
  <img :src="meProfile?.image" width="70" height="70" alt="" />
</template>
<script setup lang="ts">
import ReaderText from "../../components/ReaderText.vue";
import { useAuthStore } from "../../store/auth";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const authStore = useAuthStore();
const { meProfile } = storeToRefs(authStore);
const { GET_ME } = useAuthStore();

const fetchMe = async () => {
  await GET_ME();
};

onMounted(() => {
  fetchMe();
});
</script>
<style scoped></style>
