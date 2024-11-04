<template>
  <div
    class="grid grid-cols-3 gap-2 p-10 text-[12px] text-white cursor-pointer"
  >
    <div
      class="bg-blue-400 w-24 px-2 py-4 flex items-center justify-center rounded-lg"
    >
      <span class="flex-col gap-2 flex items-center justify-center">
        <IconBusiness class="text-white"></IconBusiness>
        <p>Business</p>
      </span>
    </div>
    <div
      class="bg-red-400 w-24 px-2 py-4 flex items-center justify-center rounded-lg"
    >
      <span class="flex-col gap-2 flex items-center justify-center">
        <IconHealth class="text-white"></IconHealth>
        <p>Health</p>
      </span>
    </div>
    <div
      class="bg-green-400 w-24 px-2 py-4 flex items-center justify-center rounded-lg"
    >
      <span class="flex-col gap-2 flex items-center justify-center">
        <IconEducation class="text-white"></IconEducation>
        <p>Education</p>
      </span>
    </div>
    <div
      class="bg-pink-400 w-24 px-2 py-4 flex items-center justify-center rounded-lg"
    >
      <span class="flex-col gap-2 flex items-center justify-center">
        <IconRomance class="text-white"></IconRomance>
        <p>Romance</p>
      </span>
    </div>
    <div
      class="bg-yellow-400 w-24 px-2 py-4 flex items-center justify-center rounded-lg"
    >
      <span class="flex-col gap-2 flex items-center justify-center">
        <IconAdventure class="text-white"></IconAdventure>
        <p>AAventure</p>
      </span>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconBusiness from "./icons/IconIconBusiness.vue";
import IconHealth from "./icons/IconHealth.vue";
import IconEducation from "./icons/IconEducation.vue";
import IconRomance from "./icons/IconRomance.vue";
import IconAdventure from "./icons/IconAdventure.vue";
</script>
<style scoped></style>
