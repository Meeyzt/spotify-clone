<template>
  <div class="text-s py-3 px-4 cursor-pointer flex font-semibold flex-row gap-x-4 text-normalColor hover:text-white">
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
