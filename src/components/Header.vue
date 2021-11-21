<template>
  <header
    class="bg-contentColor text-white w-full h-[60px] min-h-[60px] px-4 z-10 flex items-center border-b border-white border-opacity-5"
  >

    <div
      class="relative flex flex-shrink-0 flex-grow-0 justify-between items-center w-full gap-3 h-full"
      v-if="isAuthenticated && currentUsersData"
    >
      <header-route/>

      <header-search/>

      <header-tabs/>

      <header-profile
        :key="$route.fullPath"
      />
    </div>

    <header-not-authenticated
      v-if="!isAuthenticated"
    />

  </header>
</template>

<script>
import { mapState } from 'vuex';

import HeaderRoute from './header/HeaderRoute.vue';
import HeaderSearch from './header/HeaderSearch.vue';
import HeaderTabs from './header/HeaderTabs.vue';
import HeaderProfile from './header/HeaderProfile.vue';
import HeaderNotAuthenticated from './header/HeaderNotAuthenticated.vue';

export default {
  components: {
    HeaderRoute,
    HeaderSearch,
    HeaderProfile,
    HeaderTabs,
    HeaderNotAuthenticated,
  },

  computed: {
    ...mapState('currentUser', ['currentUsersData']),

    ...mapState('auth', ['isAuthenticated']),
  },

  watch: {
    isAuthenticated() {
      this.$store.dispatch('currentUser/getCurrentUsersData', null, { root: true });
    },
  },
};
</script>
