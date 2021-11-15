<template>
  <header
    v-if="currentUserData !== null"
    class="bg-contentColor relative flex flex-shrink-0 flex-grow-0 justify-between items-center p-4 w-full z-10 gap-3 h-[60px]"
  >
    <header-route/>

    <header-search/>

    <header-tabs/>

    <header-profile
      :key="$route.fullPath"
    />

  </header>
</template>

<script>
import { mapState } from 'vuex';

import HeaderRoute from './header/HeaderRoute.vue';
import HeaderSearch from './header/HeaderSearch.vue';
import HeaderTabs from './header/HeaderTabs.vue';
import HeaderProfile from './header/HeaderProfile.vue';

export default {
  components: {
    HeaderRoute,
    HeaderSearch,
    HeaderProfile,
    HeaderTabs,
  },

  computed: {
    ...mapState([
      {
        currentUserData: 'currentUser/currentUserData',
      },
    ]),
  },

  mounted() {
    this.$store.dispatch('currentUser/getCurrentUsersData', null, { root: true });
  },
};
</script>
