<template>
    <ul class="py-3">
      <li
      class="text-s align-center px-4 opacity-100 flex font-semibold
      flex-row rounded mx-2 bg-activeColor cursor-pointer gap-x-4"
      >
         <div class="py-2">
           <HomeIcon/>
         </div>
         <span class="pt-3" >Ana sayfa</span>
      </li>
      <li class="text-s px-4 opacity-70 cursor-pointer flex font-semibold
<<<<<<< Updated upstream
      flex-row hover:rounded hover:opacity-100 gap-x-4 mx-2">
          <img src="@/assets/search.svg" class="py-2" alt="search"/>
          <span class="pt-3">Ara</span>
      </li>
      <li class="text-s font-semibold px-4 opacity-70 cursor-pointer
       flex flex-row hover:rounded hover:opacity-100 gap-x-4 mx-2">
          <img class="py-2" src="@/assets/collection.svg" alt="collection"/>
=======
      flex-row hover:opacity-100 gap-x-4 mx-2">
         <div class="py-2">
           <SearchIcon/>
         </div>
          <span class="pt-3">Ara</span>
      </li>
      <li class="text-s font-semibold px-4 opacity-70 cursor-pointer
       flex flex-row hover:opacity-100 gap-x-4 mx-2">
          <div class="py-2">
           <CollectionIcon/>
         </div>
>>>>>>> Stashed changes
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
