<template>
  <header v-if="this.$store.userData !== null"
  class="bg-contentColor relative flex flex-row flex-shrink-0 flex-grow-0 justify-between items-center p-4 w-full z-10 gap-3 h-[60px]"
  >
    <header-nav/>

    <header-search/>

    <header-tabs/>

    <header-profile/>
  </header>
</template>

<script>
import HeaderNav from './header/HeaderNav.vue';
import HeaderSearch from './header/HeaderSearch.vue';
import HeaderTabs from './header/HeaderTabs.vue';
import HeaderProfile from './header/HeaderProfile.vue';

export default {
  name: 'Header',

  components: {
    HeaderNav,
    HeaderSearch,
    HeaderProfile,
    HeaderTabs,
  },

  methods: {
    hasHistory() {
      return (window.history.length > 2);
    },
  },

  mounted() {
    this.$store.dispatch('getUserData');
  },
};
</script>
