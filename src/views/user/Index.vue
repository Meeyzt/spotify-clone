<template>
  <div
    class="text-white h-full overflow-y-auto"
    v-if="profile && slicedCurrentUsersFollowedArtists()"
  >
      <playlist-header
        :name="profile.display_name"
        type="profile"
        :likeCount="profile.followers.total"
        :picture="profile.images[0].url"
        :songCount="slicedCurrentUsersFollowedArtists().length"
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
            :data="slicedPlaceholderPlaylists(6)"
            v-if="slicedPlaceholderPlaylists()"
          />

          <shelf
            type="playlist"
            title="Herkese açık çalma listeleri"
            link=""
            :data="slicedPlaceholderPlaylists(3)"
            :row="1"
            v-if="slicedPlaceholderPlaylists()"
          />

          <div
            class="w-full px-4"
            v-if="playlist"
          >
            <div class="flex w-full justify-between">

              <div class="text-xl font-bold">Bu ayın en çok dinlenen parçaları</div>

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
                  type="profile"
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
            :data="slicedCurrentUsersFollowedArtists(6)"
            :link="`${this.$route.path}/followers`"
            v-if="slicedCurrentUsersFollowedArtists()"
          />

          <shelf
            type="artist"
            title="Takip edilenler"
            :data="slicedCurrentUsersFollowedArtists(6)"
            :link="`${this.$route.path}/following`"
            v-if="slicedCurrentUsersFollowedArtists()"
          />

        </div>

      </div>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
  import { mapGetters, mapState } from 'vuex';

  import PlaylistHeader from '@/components/PlaylistHeader.vue';
  import DetailsIcon from '@/components/icons/DetailsIcon.vue';
  import Shelf from '@/components/Shelf.vue';
  import TableItem from '../../components/TableItem.vue';

  export default {
    computed: {
      ...mapState('pages/profile', [
        'profile',
      ]),

      ...mapState('pages/playlist', [
        'playlist',
      ]),

      ...mapState('currentUser', [
        'currentUsersLikedTracks',
      ]),

      ...mapGetters('currentUser', [
        'slicedCurrentUsersFollowedArtists',
      ]),

      ...mapGetters('placeholder', [
        'slicedPlaceholderPlaylists',
      ]),
    },

    components: {
      PlaylistHeader,
      DetailsIcon,
      Shelf,
      TableItem,
    },

    beforeRouteUpdate(to) {
      this.$store.dispatch('pages/profile/getProfile', to.params.id, { root: true });
      this.$store.dispatch('pages/playlist/getPlaylist', this.currentUsersLikedTracks[0].id || '37i9dQZF1EQpVaHRDcozEz', { root: true });
    },

    created() {
      this.$store.dispatch('placeholder/getPlaceholderPlaylists', null, { root: true });
      this.$store.dispatch('pages/profile/getProfile', this.$route.params.id, { root: true });
      this.$store.dispatch('currentUser/getCurrentUsersFollowedArtists', null, { root: true });
      this.$store.dispatch('pages/playlist/getPlaylist', '37i9dQZF1EIV4eiKpyhYqf', { root: true });
    },
  };
</script>
