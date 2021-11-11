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

          <shelf
            type="playlist"
            title="Bu ayın en çok dinlenen parçaları"
            :link="`${this.$route.path}/top/tracks`"
            :data="playlists(6)"
            v-if="playlists()"
          />

          <shelf
            type="artist"
            title="Takipçiler"
            :data="playlists(6)"
            v-if="playlists()"
          />

          <shelf
            v-if="playlists()"
            title="Takip edilenler"
            :data="playlists(6)"
            type="artist"
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

export default {
  computed: {
    ...mapState([
      'profile',
      'artists',
    ]),

    ...mapGetters([
      'playlists',
    ]),
  },

  components: {
    PlaylistHeader,
    DetailsIcon,
    Shelf,
  },

  beforeRouteUpdate(to) {
    this.$store.dispatch('getProfile', to.params.id);
  },

  created() {
    this.$store.commit('setIsLoading', false);
    this.$store.dispatch('getplaylistData');
    this.$store.dispatch('getProfile', this.$route.params.id);
    this.$store.dispatch('getArtists');
  },
};
</script>
