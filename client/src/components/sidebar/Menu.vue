<template>
  <div>

    <Nav />

    <CreateItems/>

  </div>
</template>

<script>
import Nav from '@/components/sidebar/menuItems/Nav.vue';
import CreateItems from '@/components/sidebar/menuItems/CreateItems.vue';

export default {
  components: {
    Nav,
    CreateItems,
  },
};
</script>
