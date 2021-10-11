<template>
  <div class="text-s py-3 px-4 opacity-70 cursor-pointer flex font-semibold
      flex-row hover:rounded hover:opacity-100 gap-x-4 text-white">
      <DownloadIcon/>
      <span class="pt-1">Uygulamayı Yükle</span>
    </div>
</template>

<script>
import DownloadIcon from '@/components/icons/DownloadIcon.vue';

export default {
  components: { DownloadIcon },

};
</script>
