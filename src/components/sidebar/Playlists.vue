<template>
  <div class="mx-6 flex-auto border-t border-white border-opacity-20 overflow-auto">
    <div
     :v-for="index in 40" :v-key="index"
     class="text-sm opacity-70 cursor-pointer flex pt-2
      flex-row hover:rounded hover:opacity-100 gap-x-4 text-white">
        new playlist #001
    </div>
  </div>
</template>

<script>
export default {

};
</script>
