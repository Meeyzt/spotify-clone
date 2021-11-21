<template>
  <div class="pt-9">
    <div class="text-2xl font-bold tracking-tighter">Sanatçının seçtikleri</div>
    <div class="pt-4 flex">
      <div class="w-[4.5rem] h-[4.5rem] shadow-lg mr-4 rounded-sm" mr-4>
        <img :src="artistImg" alt="ArtistsChoosenItem">
      </div>
      <div>
        <div class="flex p-0.5 bg-white rounded-full text-black items-center">
          <img class="rounded-full w-6 h-6" :src="artistImg" alt="ArtistProfilePicture">
          <div class="text-s pl-1 pr-2">Manga en iyi Rock grubudur</div>
        </div>
        <div class="flex gap-2 flex-col pt-2">
          <router-link
          :to="`/album/${albumId}`"
          >
            Greatest Hits Vol. 1 AREA21
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
  },
});
</script>
