<template>
  <div class="w-full bg-white p-4 rounded-lg mt-10">
    <div class="flex gap-4">
      <div>
        <img
          src="https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg"
          alt="book"
          class="w-full h-36 object-cover rounded-md shadow-lg"
        />
      </div>
      <div class="flex gap-6">
        <span class="flex flex-col gap-1">
          <p class="text-primary font-semibold">Peter heller</p>
          <p class="text-black font-semibold">Soul Book</p>
          <p class="text-primaryText font-normal text-[14px]">
            Novel Bestseller
          </p>
          <span class="flex items-center gap-2.5">
            <Rate /> <span class="text-[14px]">(457)</span>
          </span>
          <p class="text-black font-semibold">
            <Price :price="19.99" :originalPrice="39.99" />
          </p>
        </span>
        <span class="cursor-pointer"><IconClickDot /></span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped></style>
