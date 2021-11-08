<template>
<div
  class="px-4 pt-6 lg:px-8 flex flex-col items-start bg-contentColor overflow-auto h-full"
>
  <section class="text-white mt-0 w-full h-full">

    <div class="mb-4 text-2xl font-bold">Çalma Listeleri</div>

    <div class="grid grid-cols-180 auto-rows-auto gap-3">

      <router-link
        tag="div"
        to="/collection/tracks"
        class="group z-2 relative col-2-span pr-2 bg-gradient-to-br from-gradientBlue justify-end to-gradientPurple rounded-md p-6 flex flex-col gap-3"
        v-if="saved"
      >

        <div class="group flex flex-row flex-wrap overflow-hidden max-h-[100px] mb-3">

          <span v-for="track in savedTracks(10)" :key="track.song" class="ml-1" >

            <span v-text="track.track.artists[0].name"/>

            <span class="ml-1 opacity-70">{{track.track.name}} • </span>

          </span>

        </div>

        <div class="transition opacity-0 group-hover:opacity-100 group-hover:transform group-hover:-translate-y-2 p-3 bg-spotifyGreen rounded-full hover:scale-110 absolute right-2 bottom-2 drop-shadow-xl">
            <PlayIcon :width="24" :height="24"/>
        </div>

        <div>

          <div class="font-bold text-3xl">Beğenilen Şarkılar</div>

          <div>{{saved.total }} beğenilen şarkılar</div>

        </div>

      </router-link>

        <shelf-item type="playlist" v-for="playlistInfo in $store.state.playlists" :playlistInfo="playlistInfo" :key="playlistInfo.id"/>

    </div>
  </section>
</div>
</template>

<script>

import { mapGetters, mapState } from 'vuex';

import ShelfItem from '@/components/home/shelf/Item.vue';
import PlayIcon from '@/components/icons/PlayIcon.vue';

export default {
  components: {
    PlayIcon,
    ShelfItem,
  },
  created() {
    this.$store.dispatch('getSaved');
    this.$store.dispatch('getplaylistData');
  },

  computed: {
    ...mapState([
      'saved',
    ]),

    ...mapGetters([
      'savedTracks',
      'playlists',
    ]),
  },

};
</script>
