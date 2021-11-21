<template>
  <div class="w-full flex items-center justify-end text-white gap-4 text-xs tracking-widest font-bold">
    <button
      @click="$store.dispatch('auth/getAuthorize', null, { root: true })"
      class="hover:scale-110 font-bold tracking-widest"
      >
        KAYDOL
      </button>

    <button
      @click="$store.dispatch('auth/getAuthorize', null, { root: true })"
      class="bg-white rounded-full pb-2 pt-3 px-4 text-black hover:scale-105 tracking-widest font-bold"
    >
      OTURUM AÇ
    </button>
  </div>
</template>

<script>
  export default {

  };
</script>
