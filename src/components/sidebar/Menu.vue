<template>
  <div class="text-white">

    <Nav />

    <ul class="py-4">
      <li
        class="text-s px-3 pl-4 opacity-70 cursor-pointer flex font-extrabold
      flex-row hover:rounded hover:opacity-100 gap-x-4 mx-2"
      >
        <span
          class="bg-white flex align-center justify-center rounded-xs px-1.5 py-1.5"
        >
          <img src="@/assets/plus.svg" alt="plus" />
        </span>
       <span class="pt-1"> Çalma Listesi Oluştur</span>
      </li>

      <li
       class="text-s pt-4 px-4 opacity-70 cursor-pointer flex font-extrabold
      flex-row hover:rounded hover:opacity-100 gap-x-4 mx-2"
      >
      <span class="w-6 h-6 flex items-center justify-center
      bg-gradient-to-br from-purple-900 to-blue-300">
        <img src="@/assets/heart.svg" alt="hearth">
      </span>
        <span class="pt-1">Beğenilen Şarkılar</span>
      </li>
    </ul>
  </div>
</template>

<script>
import Nav from '@/components/sidebar/menuItems/Nav.vue';

export default {
  components: {
    Nav,
  },
};
</script>
