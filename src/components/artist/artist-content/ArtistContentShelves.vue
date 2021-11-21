<template>
    <div v-if="artistsAlbums">
        <Shelf
            class="pt-10"
            title="Popüler yayınlar"
            type="playlist"
            :data="slicedArtistsAlbums(6)"
            link=""
            :row="1"
            v-if="slicedArtistsAlbums()"
        />
        <Shelf
            class="pt-10"
            title="Albümler"
            type="album"
            :data="slicedArtistsAlbums(6)"
            :row="1"
            v-if="slicedArtistsAlbums()"
        />
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import Shelf from '@/components/Shelf.vue';

export default {
    computed: {
        ...mapGetters('pages/artist', [
          'slicedArtistsAlbums',
        ]),

        ...mapState('pages/artist', [
          'artistsAlbums',
        ]),
    },

    components: {
        Shelf,
    },
};
</script>
