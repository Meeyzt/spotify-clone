<template>
    <ul class="my-1.5 text-normalColor">
      <router-link
        to="/"
        exact
        class="text-sm mx-2 px-4 cursor-pointer flex font-bold flex-row gap-x-4 hover:text-white"
      >

          <div class="py-2">

            <HomeIcon v-if="$route.name !== 'Home'"/>
            <ActiveHomeIcon v-else/>

          </div>

          <span class="pt-3">Ana sayfa</span>
      </router-link>

      <router-link
        to="/search"
        class="text-sm mx-2 px-4 cursor-pointer flex font-bold flex-row gap-x-4 hover:text-white"
      >

          <div class="py-2">

            <SearchIcon v-if="$route.name !== 'Search'"/>
            <ActiveSearchIcon v-else/>

          </div>

          <span class="pt-3">Ara</span>

      </router-link>

      <router-link
        to="/collection"
        class="text-sm mx-2 px-4 cursor-pointer flex font-bold flex-row gap-x-4 hover:text-white"
      >

          <div class="py-2">
            <CollectionIcon v-if="!$route.meta.showCollectionTabs"/>
            <ActiveCollectionIcon v-else/>

          </div>

          <span class="pt-3">Kitaplığın</span>

      </router-link>

      <li class="pt-8"></li>

      <button
        @click="isAuthenticated ? createPlaylist() : null"
        class="group text-sm pl-4 cursor-pointer flex font-semibold flex-row gap-x-4 mx-2 text-normalColor hover:text-white"
      >

        <span
          class="bg-normalColor group-hover:bg-white flex align-center justify-center rounded-xs px-1.5 py-1.5"
        >

          <PlusIcon :width="12" :height="12"/>

        </span>

        <span class="pt-1 overflow-hidden"> Çalma Listesi Oluştur</span>

      </button>

      <router-link
        :to="isAuthenticated ? '/collection/tracks' : ''"
        tag="li"
        class="text-sm pt-4 px-4 cursor-pointer flex font-semibold flex-row gap-x-4 mx-2 opacity-70 hover:opacity-100 text-white"
      >

      <span class="w-6 h-6 flex items-center justify-center bg-gradient-to-br from-purple-900 to-blue-300">

        <HeartIcon :width="12" :height="12"/>

      </span>

        <span class="pt-1">Beğenilen Şarkılar</span>

      </router-link>

      <li class="pb-5"></li>

    </ul>
</template>

<script>
import { mapState } from 'vuex';

import HomeIcon from '@/components/icons/HomeIcon.vue';
import SearchIcon from '@/components/icons/SearchIcon.vue';
import CollectionIcon from '@/components/icons/CollectionIcon.vue';
import ActiveHomeIcon from '@/components/icons/ActiveHomeIcon.vue';
import ActiveSearchIcon from '@/components/icons/ActiveSearchIcon.vue';
import ActiveCollectionIcon from '@/components/icons/ActiveCollectionIcon.vue';
import PlusIcon from '@/components/icons/PlusIcon.vue';
import HeartIcon from '@/components/icons/FilledHeartIcon.vue';

export default {
  components: {
    HomeIcon,
    SearchIcon,
    CollectionIcon,
    ActiveHomeIcon,
    ActiveSearchIcon,
    ActiveCollectionIcon,
    PlusIcon,
    HeartIcon,
  },

  computed: {
    ...mapState('auth', [
      'isAuthenticated',
    ]),

    ...mapState('currentUser', [
      'currentUsersData',
    ]),
  },

  methods: {
    createPlaylist() {
      this.$store.dispatch('pages/playlist/createPlaylist', this.currentUsersData.id);
    },
  },
};
</script>
