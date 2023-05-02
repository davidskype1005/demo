<template>
  <header class="bg-pri-main text-white">
    <div class="my-container">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <img class="w-8 h-8" src="https://picsum.photos/500/400?random=2" />
          <span class="ml-2 text-xl font-bold">My Website</span>
        </div>
        <button class="block md:hidden text-3xl" @click="open = !open">
          <font-awesome-icon :icon="['fa-solid', 'fa-bars']" class="icon alt" />
        </button>
        <nav class="hidden md:flex md:items-center">
          <NuxtLink class="block py-1 px-3 hover:bg-gray-700 rounded" to="/"
            >Home</NuxtLink
          >
          <NuxtLink
            class="block py-1 px-3 hover:bg-gray-700 rounded"
            to="/about"
            >About</NuxtLink
          >
          <NuxtLink
            class="block py-1 px-3 hover:bg-gray-700 rounded"
            to="/contact"
            >Contact</NuxtLink
          >
        </nav>
      </div>
      <div class="md:hidden" :class="{ block: open, hidden: !open }">
        <NuxtLink
          class="block py-1 px-3 hover:bg-gray-700 rounded"
          to="/"
          @click="open = false"
          >Home</NuxtLink
        >
        <NuxtLink
          class="block py-1 px-3 hover:bg-gray-700 rounded"
          to="/about"
          @click="open = false"
          >About</NuxtLink
        >
        <NuxtLink
          class="block py-1 px-3 hover:bg-gray-700 rounded"
          to="/contact"
          @click="open = false"
          >Contact</NuxtLink
        >
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
const open = ref(false);
</script>
