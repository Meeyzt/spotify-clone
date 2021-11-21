<template>
  <div
    class="text-s h-10 mx-2 cursor-pointer items-center flex font-semibold flex-row gap-x-4 text-normalColor hover:text-white"
    v-if="isAuthenticated"
  >

    <DownloadIcon class="m-1" :height="19" :width="19"/>
    <span>
      Uygulamayı Yükle
    </span>

    </div>
</template>

<script>
import { mapState } from 'vuex';

import DownloadIcon from '@/components/icons/DownloadIcon.vue';

export default {
  components: { DownloadIcon },
  computed: {
    ...mapState('auth', [
      'isAuthenticated',
    ]),
  },
};
</script>
