<template>
  <div
    class="px-4 pt-6 w-full flex flex-col items-start bg-contentColor overflow-y-auto h-full"
    v-if="slicedCurrentUsersLikedTracks() && slicedPlaceholderPlaylists()"
  >

    <section class="text-white mt-0 w-full h-full">

      <div class="mb-4 text-2xl font-bold">Çalma Listeleri</div>

      <div class="grid grid-cols-180 auto-rows-auto gap-3 cursor-pointer w-full">

        <router-link
          tag="div"
          to="/collection/tracks"
          class="group relative z-2 col-2-span bg-gradient-to-br from-gradientBlue justify-end to-gradientPurple rounded-md p-6 flex flex-col gap-3"
        >

          <div class="group flex flex-row flex-wrap overflow-hidden max-h-[100px] mb-3 line-clamp-3 mr-4">

            <span v-for="track in slicedCurrentUsersLikedTracks(10).items" :key="track.track.id" class="ml-1" >

              <span v-text="track.track.artists[0].name"/>

              <span class="ml-1 opacity-70">{{track.track.name}} • </span>

            </span>

          </div>

          <div class="transition opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 absolute right-2 bottom-2">
              <play-button :width="24" :height="24"/>
          </div>

          <div>

            <div class="font-bold text-3xl">Beğenilen Şarkılar</div>

            <div>{{currentUsersLikedTracks.total }} beğenilen şarkılar</div>

          </div>

        </router-link>

          <ShelfItem
            type="playlist"
            v-for="playlistInfo in slicedPlaceholderPlaylists(13)"
            :playlistInfo="playlistInfo"
            :key="playlistInfo.id"
          />

      </div>
    </section>

  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
  import { mapGetters, mapState } from 'vuex';

  import ShelfItem from '@/components/shelf/Item.vue';
  import PlayButton from '@/components/PlayButton.vue';

  export default {
    components: {
      ShelfItem,
      PlayButton,
    },

    created() {
      this.$store.dispatch('currentUser/getCurrentUsersLikedTracks', null, { root: true }).then(() => {
        this.$store.dispatch('placeholder/getPlaceholderPlaylists', null, { root: true });
      });
    },

    computed: {
      ...mapState('currentUser', [
        'currentUsersLikedTracks',
      ]),

      ...mapGetters('currentUser', [
          'slicedCurrentUsersLikedTracks',
      ]),

      ...mapGetters('placeholder', [
        'slicedPlaceholderPlaylists',
      ]),
    },
  };
</script>
