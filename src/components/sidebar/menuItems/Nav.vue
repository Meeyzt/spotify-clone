<template>
    <ul class="my-1.5 text-normalColor">
      <router-link to="/" exact active-class="bg-activeColor rounded text-white" class="text-sm mx-2 px-4 cursor-pointer flex font-bold flex-row gap-x-4 hover:text-white">

          <div class="py-2">

            <HomeIcon v-if="$route.name !== 'Home'"/>
            <ActiveHomeIcon v-else/>

          </div>

          <span class="pt-3">Ana sayfa</span>
      </router-link>

      <router-link to="/search" active-class="bg-activeColor rounded text-white" class="text-sm mx-2 px-4 cursor-pointer flex font-bold flex-row gap-x-4 hover:text-white">

          <div class="py-2">

            <SearchIcon v-if="$route.name !== 'Search'"/>
            <ActiveSearchIcon v-else/>

          </div>

          <span class="pt-3">Ara</span>

      </router-link>

      <router-link to="/collection" :class="`text-sm mx-2 px-4 cursor-pointer flex font-bold flex-row gap-x-4 hover:text-white ${$route.name!== 'CollectionPlaylists' ? 'bg-transparent text-normalColor rounded-none' : 'bg-activeColor rounded text-white'}`">

          <div class="py-2">

            <CollectionIcon v-if="$route.name !== 'CollectionPlaylists'"/>
            <ActiveCollectionIcon v-else />

          </div>
          <span class="pt-3">Kitaplığın</span>

      </router-link>
    </ul>
</template>

<script>
import HomeIcon from '@/components/icons/HomeIcon.vue';
import SearchIcon from '@/components/icons/SearchIcon.vue';
import CollectionIcon from '@/components/icons/CollectionIcon.vue';
import ActiveHomeIcon from '@/components/icons/ActiveHomeIcon.vue';
import ActiveSearchIcon from '@/components/icons/ActiveSearchIcon.vue';
import ActiveCollectionIcon from '@/components/icons/ActiveCollectionIcon.vue';

export default {

  components: {
    HomeIcon,
    SearchIcon,
    CollectionIcon,
    ActiveHomeIcon,
    ActiveSearchIcon,
    ActiveCollectionIcon,
  },
};
</script>
