<template>
  <div class="pt-9">
    <div class="text-2xl font-bold tracking-tighter">Sanatçının seçtikleri</div>
    <div class="pt-4 flex">
      <div class="w-[4.5rem] h-[4.5rem] shadow-lg mr-4 rounded-smmr-4 relative">
        <img :src="albumImg" alt="ArtistsChoosenItem">
      </div>
      <div>
        <div class="flex p-0.5 bg-white rounded-full text-black items-center">
          <img class="rounded-full w-6 h-6" :src="artistImg" alt="ArtistProfilePicture">
          <div class="text-s pl-1 pr-2">Manga en iyi Rock grubudur</div>
        </div>
        <div class="flex gap-2 flex-col pt-2">
          <router-link
          class="hover:underline"
          :to="`/album/${albumId}`"
          >
            {{ albumName }}
          </router-link>
          <div class="text-s opacity-60">Çalma listesi</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default ({
  props: {
    artistImg: {
      type: String,
      required: true,
    },

    albumId: {
      type: String,
      required: true,
    },

    albumName: {
      type: String,
      required: true,
    },

    albumImg: {
      type: String,
      required: true,
    },
  },
});
</script>
