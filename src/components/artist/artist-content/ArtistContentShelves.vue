<template>
    <div>
        <Shelf
            class="pt-10"
            title="Popüler yayınlar"
            type="shelfPlaylist"
            :data="playlists(6)"
            v-if="playlists()"
        />
        <Shelf
            class="pt-10"
            title="Albümler"
            type="shelfPlaylist"
            :data="playlists(6)"
            v-if="playlists()"
        />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Shelf from '@/components/home/Shelf.vue';

export default {
    props: {
        topTracks: {
            type: Array,
            required: true,
        },
    },

    computed: {
        ...mapGetters([
            'playlists',
        ]),
    },

    created() {
        this.$store.dispatch('getplaylistData');
    },

    components: {
        Shelf,
    },
};
</script>
