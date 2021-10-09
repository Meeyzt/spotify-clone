<template>
  <div class="w-60 bg-menuColor">

    <div class="px-6 pt-6 pb-3">
      <a href="#">
        <img src="@/assets/logo.svg" alt="spotify logo"/>
      </a>
    </div>

    <Menu />

  </div>
</template>

<script>
import Menu from './sidebar/Menu.vue';

export default {
  components: {
    Menu,
  },
};
</script>
