<template>
  <div class="text-white">
    <Nav />

    <ul class="py-3">
      <li
        class="
          text-sm
          px-4
          py-2
          opacity-70
          cursor-pointer
          flex flex-row
          hover:rounded
          hover:opacity-100
          gap-x-4
          mx-2
        "
      >
        <span
          class="bg-white flex align-center justify-center rounded-sm px-1.5"
        >
          <img src="@/assets/plus.svg" alt="plus" />
        </span>
        Çalma listesi oluştur
      </li>

      <li
        class="
          px-4
          py-2
          opacity-70
          cursor-pointer
          flex flex-row
          hover:rounded
          hover:opacity-100
          gap-x-4
          mx-2
        "
      >
        Beğenilen şarkılar
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
