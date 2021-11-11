<template>
    <div>
        <Shelf
            class="pt-10"
            title="Popüler yayınlar"
            type="playlist"
            :data="playlists(6)"
            link=""
            :row="1"
            v-if="playlists()"
        />
        <Shelf
            class="pt-10"
            title="Albümler"
            type="playlist"
            :data="playlists(6)"
            :row="1"
            v-if="playlists()"
        />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Shelf from '@/components/Shelf.vue';

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
