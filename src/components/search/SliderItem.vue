<template>
  <div class="cursor-pointer rounded-md h-56 overflow-hidden relative col-span-2">

    <div
      class=" top-4 left-1 font-bold tracking-tighter leading-9 break-words p-4 absolute"
      v-text="title"
    />

    <img
      :src="source"
      :class="` ${imgSize === 'big' ? 'h-32 w-32':'h-24 w-24'} absolute object-center object-cover right-0 bottom-0 rotate-[25deg] translate-x-[18%] -translate-y-[2%]`"
      alt="rockimg"
    />

  </div>
</template>

<script>
export default {
  props: {
    source: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    imgSize: {
      type: String,
      required: true,
    },
  },
};
</script>
