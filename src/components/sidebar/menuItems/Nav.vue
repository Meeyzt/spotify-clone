<template>
    <ul class="py-3">
      <li
      class="text-s align-center px-4 opacity-100 flex font-semibold
      flex-row rounded mx-2 bg-activeColor cursor-pointer gap-x-4"
      >
         <img src="@/assets/home.svg" class="py-2" alt="home"/>
         <span class="pt-3" >Ana sayfa</span>
      </li>
      <li class="text-s px-4 opacity-70 cursor-pointer flex font-semibold
      flex-row hover:opacity-100 gap-x-4 mx-2">
          <img src="@/assets/search.svg" class="py-2" alt="search"/>
          <span class="pt-3">Ara</span>
      </li>
      <li class="text-s font-semibold px-4 opacity-70 cursor-pointer
       flex flex-row hover:opacity-100 gap-x-4 mx-2">
          <img class="py-2" src="@/assets/collection.svg" alt="collection"/>
          <span class="pt-3">Kitaplığın</span>
      </li>
    </ul>
</template>

<script>
export default {

};
</script>
