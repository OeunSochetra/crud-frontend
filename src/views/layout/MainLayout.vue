<!-- src/layouts/MainLayout.vue -->
<template>
  <div class="">
    <div class="fixed left-0 top-0 h-full z-10">
      <Sidebar />
    </div>
    <div class="w-[65rem] flex flex-col ml-[7.5rem] mt-10">
      <router-view />
    </div>
    <div class="fixed right-0 top-0 h-full z-10">
      <SidebarRight />
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "./components/Sidebar.vue";
import SidebarRight from "./components/SidebarRight.vue";
// Any layout-specific logic here
</script>
