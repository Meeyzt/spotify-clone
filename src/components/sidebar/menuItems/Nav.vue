<template>
    <ul class="my-1.5">
      <li
      class="text-sm align-center px-4 h-10 flex font-bold flex-row rounded text-white mx-2 bg-activeColor cursor-pointer gap-x-4">
         <div class="py-2">
           <HomeIcon/>
         </div>
         <span class="pt-3">Ana sayfa</span>
      </li>
      <li class="text-sm mx-2 px-4 cursor-pointer flex font-bold flex-row gap-x-4 text-normalColor hover:text-white">
         <div class="py-2">
           <SearchIcon/>
         </div>
          <span class="pt-3">Ara</span>
      </li>
      <li class="text-sm font-bold mx-2 px-4 cursor-pointer flex flex-row gap-x-4 text-normalColor hover:text-white">
          <div class="py-2">
           <CollectionIcon/>
         </div>
          <span class="pt-3">Kitaplığın</span>
      </li>
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
