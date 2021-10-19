<template>
<div class="px-4 pt-6 lg:px-8 flex flex-col items-start bg-contentColor overflow-auto h-full">
  <div class="w-full h-full">
    <SearchSlider />
    <ComponentShelf />
  </div>
</div>
</template>

<script>
import SearchSlider from '@/components/search/SearchSlider.vue';
import ComponentShelf from '@/components/search/componentShelf.vue';

export default {
  components: {
    SearchSlider,
    ComponentShelf,
  },
};
</script>
