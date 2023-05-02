<template>
  <input
    class="w-full my-3 p-2 rounded-md border-pri-title border"
    type="text"
    v-model="search"
    placeholder="Search"
  />
  <div class="bg-white">
    <template v-if="filteredData.length">
      <DynamicScroller
        class="virtual-list"
        :min-item-size="54"
        :items="filteredData"
        useNativeScroll
      >
        <template v-slot="{ item, index, active }">
          <DynamicScrollerItem
            :item="item"
            :active="active"
            :size-dependencies="[item.title]"
            :data-index="index"
          >
            <div class="thumbnail w-full md:w-1/2 m-auto pt-3">
              <img
                :src="item.thumbnail"
                :key="item.thumbnail"
                alt="thumbnail"
                class="image w-full"
              />
            </div>
            <div class="px-3 md:w-1/2 m-auto">
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
    </template>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const data = ref([]);
const search = ref("");
const filteredData = computed(() =>
  data.value.filter((item) => {
    if (!search.value || !data.value) {
      return true;
    }
    const searchTerm = search.value.toLowerCase();
    return (
      item.title.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm)
    );
  })
);

onMounted(async () => {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=100");
    const jsonData = await response.json();
    data.value = jsonData.products;
  } catch {
    data.value = [];
    console.log(jsonData);
    console.log(data);
  }
});
// const listData = await useFetch("https://dummyjson.com/products?limit=100");
</script>

<style scoped>
.virtual-list {
  height: calc(100vh - 200px);
}
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #999;
}
</style>
