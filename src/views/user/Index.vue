<template>
  <div class="text-white h-full overflow-y-auto" v-if="profile && artists">
      <playlist-header
        :name="profile.display_name"
        type="profile"
        :likeCount="profile.followers.total"
        :picture="profile.images[0].url"
        :songCount="artists.length"
        author="13"
      />
      <div class="bg-contentColor p-4">

        <details-icon class="opacity-60 hover:opacity-100" :height="26" :width="26"/>

        <div class="flex flex-col items-start gap-y-6">

          <shelf
            class="pt-10"
            type="playlist"
            title="Bu ayın en çok dinlenen sanatçıları"
            :link="`${this.$route.path}/top/artists`"
            subTitle="Yalnızca sana görünür"
            :data="playlists(6)"
            v-if="playlists()"
          />

          <shelf
            type="playlist"
            title="Herkese açık çalma listeleri"
            link=""
            :data="playlists(3)"
            :row="1"
            v-if="playlists()"
          />

          <div
            class="w-full"
            v-if="playlist"
          >
            <div class="flex w-full justify-between">

              <div class="text-xl font-bold">En çok dinlenenler </div>

              <router-link
                :to="`${this.$route.path}/top/tracks`"
                class="text-normalColor text-[12px] hover:underline cursor-pointer font-bold tracking-widest pt-4 overflow-clip whitespace-nowrap"
              >
                HEPSİNİ GÖR
              </router-link>

            </div>

            <table class="w-full">
              <tbody>
                <table-item
                  class="w-full"
                  type="artist"
                  :key="index+'user'"
                  :index="index"
                  :track="track.track"
                  :added_at="track.added_at"
                  :liked="track.liked"
                  v-for="(track, index) in playlist.tracks.items.slice(0, 4)"
                />
              </tbody>
            </table>

          </div>

          <shelf
            type="artist"
            title="Takipçiler"
            :data="slicedArtists(6)"
            :link="`${this.$route.path}/followers`"
            v-if="slicedArtists()"
          />

          <shelf
            type="artist"
            title="Takip edilenler"
            :data="slicedArtists(6)"
            :link="`${this.$route.path}/following`"
            v-if="slicedArtists()"
          />

        </div>

      </div>
  </div>
</template>

<script>
  import { mapGetters, mapState } from 'vuex';

  import PlaylistHeader from '@/components/PlaylistHeader.vue';
  import DetailsIcon from '@/components/icons/DetailsIcon.vue';
  import Shelf from '@/components/Shelf.vue';
  import TableItem from '../../components/TableItem.vue';

  export default {
    computed: {
      ...mapState([
        'profile',
        'artists',
        'playlist',
        'userPlaylists',
      ]),

      ...mapGetters([
        'playlists',
        'slicedArtists',
      ]),
    },

    components: {
      PlaylistHeader,
      DetailsIcon,
      Shelf,
      TableItem,
    },

    beforeRouteUpdate(to) {
      this.$store.dispatch('getProfile', to.params.id);
    },

    created() {
      this.$store.dispatch('getplaylistData');
      this.$store.dispatch('getProfile', this.$route.params.id);
      this.$store.dispatch('getArtists');
      this.$store.dispatch('getPlaylist', this.userPlaylists[0].id);
    },
  };
</script>
