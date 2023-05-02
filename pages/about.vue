<template>
  <input type="text" v-model="search" placeholder="Search" />
  <div class="bg-white">
    <DynamicScroller
      class="virtual-list"
      :min-item-size="54"
      :items="filteredData"
    >
      <template v-slot="{ item, index, active }">
        <DynamicScrollerItem
          :item="item"
          :active="active"
          :size-dependencies="[item.title]"
          :data-index="index"
        >
          <div class="thumbnail w-full m-auto pt-3">
            <img
              :src="item.thumbnail"
              :key="item.thumbnail"
              alt="thumbnail"
              class="image w-full"
            />
          </div>
          <div class="px-3">
            <div class="flex items-center justify-between pt-2">
              <h2 class="my-brand">{{ item.brand }}</h2>
              <span class="my-category">{{ item.category }}</span>
            </div>
            <h2 class="">{{ item.title }}</h2>
            <div class="text">{{ item.description }}</div>
            <div class="flex justify-end">
              <button class="show-more text-pri-content cursor-pointer mt-4">
                more
              </button>
            </div>
          </div>
        </DynamicScrollerItem>
      </template>
    </DynamicScroller>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const listData = await useFetch("https://dummyjson.com/products?limit=100");
// console.log(listData.data.value)
const search = ref("");
const filteredData = computed(() =>
  listData.data.value.products.filter((item) => {
    if (!search.value) {
      return true;
    }
    return item.title.toLowerCase().includes(search.value.toLowerCase());
  })
);

// onMounted(async () => {
//   const response = await fetch('https://dummyjson.com/products?limit=100')
//   const jsonData = await response.json()
//   data.value = jsonData.products.map((item, index) => ({ id: index, ...item }))
// })
</script>

<style scoped>
.virtual-list {
  height: 400px;
}
</style>
