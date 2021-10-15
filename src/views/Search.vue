<template>
  <div class="w-full h-full">
    <SearchSlider />
    <ComponentShelf />
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
