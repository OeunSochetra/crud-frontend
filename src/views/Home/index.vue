<template>
  <div class="mt-10">
    <Hero />
  </div>

  <div class="flex flex-col gap-4 mt-24">
    <!-- <div class="flex items-center justify-between">
      <p class="flex text-[18px] gap-2">
        <span class="font-bold">Best</span>
        <span class="font-normal">Seller</span>
      </p>
      <Button
        class="!text-white"
        type="primary"
        size="medium"
        @click="handleClick"
      >
        Click me
      </Button>
    </div> -->

    <div class="grid grid-cols-3 gap-4">
      <BookCard
        image="https://i.pinimg.com/564x/ea/3e/6d/ea3e6db68e086b9cc0203b07f854bd6b.jpg"
        author="Peter heller"
        title="Soul book"
        description="Novel Bestseller"
      />
      <BookCard
        image="https://i.pinimg.com/564x/e3/48/83/e348831994111b27cd102cbcbbe5230d.jpg"
        author="Jami Attenberg"
        title="Forever Yang"
        description="Novel Bestseller"
      />
      <BookCard
        image="https://i.pinimg.com/564x/0b/db/82/0bdb82271ac0e04342516fc8b110be59.jpg"
        author="Jami Attenberg"
        title="Not to be links"
        description="Novel Bestseller"
      />
      <BookCard
        image="https://i.pinimg.com/564x/0a/f8/7d/0af87dd158591443490eb5006bb199b0.jpg"
        author="Peter Heller"
        title="When She Oieo"
        description="Novel Bestseller"
      />
      <BookCard
        image="https://i.pinimg.com/564x/6f/bc/06/6fbc06cf87ffd972ec94f2b4cb18b47d.jpg"
        author="Jami Attenberg"
        title="Forever Yang"
        description="Novel Bestseller"
      />
      <BookCard
        image="https://i.pinimg.com/564x/b8/36/29/b83629f4f7f097d9f505953a01e86cec.jpg"
        author="Jami Attenberg"
        title="Not to be links"
        description="Novel Bestseller"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const handleClick = () => {
  console.log("Hello World");
};
</script>
