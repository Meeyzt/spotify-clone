<template>
    <ul class="my-1.5 text-normalColor">
      <router-link to="/" exact tag="li" active-class="bg-activeColor rounded text-white" class="text-sm mx-2 px-4 cursor-pointer flex font-bold flex-row gap-x-4 hover:text-white">
         <div class="py-2">
           <HomeIcon/>
         </div>
         <span class="pt-3">Ana sayfa</span>
      </router-link>
      <router-link to="/Search" tag="li" active-class="bg-activeColor rounded text-white" class="text-sm mx-2 px-4 cursor-pointer flex font-bold flex-row gap-x-4 hover:text-white">
         <div class="py-2">
           <SearchIcon/>
         </div>
          <span class="pt-3">Ara</span>
      </router-link>
      <router-link to="/Collection" tag="li" active-class="bg-activeColor rounded text-white" class="text-sm mx-2 px-4 cursor-pointer flex font-bold flex-row gap-x-4 hover:text-white">
          <div class="py-2">
           <CollectionIcon/>
         </div>
          <span class="pt-3">Kitaplığın</span>
      </router-link>
    </ul>
</template>

<script>
import HomeIcon from '@/components/icons/HomeIcon.vue';
import SearchIcon from '@/components/icons/SearchIcon.vue';
import CollectionIcon from '@/components/icons/CollectionIcon.vue';

export default {

  components: {
    HomeIcon,
    SearchIcon,
    CollectionIcon,
  },

};
</script>
