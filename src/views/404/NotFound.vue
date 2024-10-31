<!-- src/views/NotFound.vue -->
<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Page Not Found</p>
    <router-link to="/">Go back to Home</router-link>
  </div>
</template>

<script setup lang="ts">
// You can add any additional setup code here if needed
</script>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 2rem;
}
</style>
