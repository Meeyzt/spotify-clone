<template>
   <div class="grid grid-cols-4 gap-4 gap-x-6">
        <Item v-for="index in 8" :key="index"/>
    </div>
</template>

<script>
import Item from '@/components/content/headbar/Item.vue';

export default {
  components: {
    Item,
  },
};
</script>
