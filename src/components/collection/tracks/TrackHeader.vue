<template>
  <div class="flex flex-row items-end gap-5 pt-16 pb-6 pl-4 lg:pl-8 tracking-normal">

      <img
        class="shadow-xl w-48 h-48 object-cover"
        :src="playlistPic"
        alt="Liked Songs"
      >

      <div class="flex flex-col gap-1">

        <div class="text-[12px] mt-1 font-bold pb-1">
          ÇALMA LİSTESİ
        </div>

        <div class=" py-0.5 text-5xl playlistSmall:text-7xl playlistMedium:text-8xl font-black cursor-default tracking-tighter">
          {{ playlistName }}
        </div>

        <div
          class="opacity-70 text-[14px] tracking-wide hover:underline"
          v-html="playlistDescription"
          v-if="type !== 'liked'"
        />

        <div class="flex flex-row items-center gap-1">

            <img
              v-if="type==='liked'"
              class="w-6 h-6 object-cover rounded-full"
              :src="playlistAuthorProfilePic"
              alt="profilePic"
            />

            <div class="text-sm font-bold h-full pt-1 cursor-pointer hover:underline">
              {{ playlistAuthor }}
            </div>

            <div
              v-if="playlistLikeCount != 0"
              class="text-[14px] opacity-70"
            >
              • {{ playlistLike }} beğenme
            </div>

            <div class="text-[14px] opacity-70">
              • {{ playlistSongCount }} şarkı
            </div>

        </div>

      </div>

    </div>
</template>

<script>
export default {

  computed: {
    playlistLike() {
      return this.playlistLikeCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
  },

  props: {
    playlistName: {
      type: String,
      required: true,
    },
    playlistAuthor: {
      type: String,
      required: true,
    },
    playlistSongCount: {
      type: Number,
      required: true,
    },
    playlistPic: {
      type: String,
      required: true,
    },
    playlistAuthorProfilePic: {
      type: String,
    },
    type: {
      type: String,
      required: true,
    },
    playlistLikeCount: {
      type: Number,
      required: true,
    },
    playlistDescription: {
      type: String,
      required: true,
    },
  },
};
</script>
