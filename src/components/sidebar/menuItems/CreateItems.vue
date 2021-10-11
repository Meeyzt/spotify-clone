<template>
    <ul class="py-4">
      <li
        class="text-s pl-4 opacity-70 cursor-pointer flex font-semibold
      flex-row  hover:opacity-100 gap-x-4 mx-2"
      >
        <span
          class="bg-white flex align-center justify-center rounded-xs px-1.5 py-1.5"
        >
          <PlusIcon :width="12" :height="12"/>
        </span>
       <span class="pt-1 overflow-hidden"> Çalma Listesi Oluştur</span>
      </li>

      <li
       class="text-s pt-4 px-4 opacity-70 cursor-pointer flex font-semibold flex-row hover:opacity-100 gap-x-4 mx-2"
      >
      <span class="w-6 h-6 flex items-center justify-center
      bg-gradient-to-br from-purple-900 to-blue-300">
        <HeartIcon :width="12" :height="12"/>
      </span>
        <span class="pt-1">Beğenilen Şarkılar</span>
      </li>
    </ul>
</template>

<script>
import PlusIcon from '@/components/icons/PlusIcon.vue';
import HeartIcon from '@/components/icons/HeartIcon.vue';

export default {

  components: {
    PlusIcon,
    HeartIcon,
  },

};
</script>
