<template>
  <div class="flex flex-row items-end gap-5 pt-16 pb-6 pl-4 lg:pl-8 tracking-normal">

  <img
    class="shadow-xl w-48 h-48 object-cover"
    :src="picture"
    alt="Liked Songs"
  />

  <div class="flex flex-col gap-1">

    <div class="text-[12px] mt-1 font-bold pb-1">
      ÇALMA LİSTESİ
    </div>

    <div class=" py-0.5 text-5xl playlistSmall:text-7xl playlistMedium:text-8xl font-black cursor-default tracking-tighter">
      {{ name }}
    </div>

    <div
      class="opacity-70 text-[14px] tracking-wide hover:underline"
      v-html="description"
      v-if="type !== 'liked'"
    />

  </div>

  </div>
</template>

<script>
export default {
  computed: {
    like() {
      return this.likeCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
  },

  props: {
    name: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
    },

    likeCount: {
      type: Number,
      required: true,
    },

    picture: {
      type: String,
      required: true,
    },

    author: {
      type: String,
    },

    songCount: {
      type: Number,
    },

    authorPicture: {
      type: String,
    },

    description: {
      type: String,
    },
  },
};
</script>
