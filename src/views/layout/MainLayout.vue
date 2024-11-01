<!-- src/layouts/MainLayout.vue -->
<template>
  <div class="w-full flex justify-between">
    <Sidebar />
    <div class="">
      <router-view />
    </div>

    <SidebarRight />
  </div>
</template>

<script setup lang="ts">
// Any layout-specific logic here
</script>
