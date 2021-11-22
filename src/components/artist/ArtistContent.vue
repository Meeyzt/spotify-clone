<template>
    <div class="flex flex-col px-8 bg-contentColor w-full">

        <artist-content-header/>

        <div class="pt-6 tracking-tighter text-2xl font-bold">Popüler</div>

      <div class="flex flex-col small:flex-row">
          <div>
          <artist-content-table />

          <div class="text-xs pt-10 cursor-default text-normalColor hover:text-white"> SEE MORE</div>
        </div>

        <artists-choosen
          :artist-img="artistImg"
          :album-name="slicedArtistsAlbums(6)[0].name"
          :album-id="slicedArtistsAlbums(6)[0].id"
          :album-img="slicedArtistsAlbums(6)[0].images[0].url"
          v-if="artistsAlbums"
        />
      </div>

        <artist-content-shelves />

        <artist-content-about
          :artist-img="artistImg"
          :artist-name="artistName"
        />

        <artist-merch/>

    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

import ArtistContentHeader from '@/components/artist/artist-content/ArtistContentHeader.vue';
import ArtistContentTable from '@/components/artist/artist-content/ArtistContentTable.vue';
import ArtistContentShelves from '@/components/artist/artist-content/ArtistContentShelves.vue';
import ArtistContentAbout from '@/components/artist/artist-content/ArtistContentAbout.vue';
import ArtistMerch from '@/components/artist/artist-content/ArtistMerch.vue';
import ArtistsChoosen from '@/components/artist/artist-content/ArtistsChoosen.vue';

export default {
  props: {
    artistImg: {
      type: String,
      required: true,
    },

    artistName: {
      type: String,
      required: true,
    },
  },

  computed: {
    ...mapGetters('pages/artist', [
      'slicedArtistsAlbums',
    ]),

    ...mapState('pages/artist', [
      'artistsAlbums',
    ]),
  },

  components: {
    ArtistContentHeader,
    ArtistContentTable,
    ArtistContentShelves,
    ArtistContentAbout,
    ArtistMerch,
    ArtistsChoosen,
  },
};
</script>
