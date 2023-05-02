<script lang="ts" setup></script>

<template>
  <div class=" min-h-screen relative flex flex-col">
    <Header class="fixed top-0 left-0 w-full" />
    <div class="pt-[60px] flex-1 bg-pri-content">
      <div class=" my-container">
        <slot />
      </div>
    </div>
    <div class="mt-auto">
      <Footer />
    </div>
  </div>
</template>

<style scoped></style>
