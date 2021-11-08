<template>
    <div class="flex flex-col px-8 bg-contentColor w-full">

        <artist-content-header/>

        <div class="pt-6 tracking-tighter text-2xl font-bold">Popüler</div>

        <artist-content-table
            :artistTopTracks="topTracks"
        />

        <div class="text-xs pt-10 cursor-default text-normalColor hover:text-white"> SEE MORE</div>

        <artist-content-shelves
            :topTracks="topTracks"
        />

    </div>
</template>

<script>
import ArtistContentHeader from '@/components/artist/artist-content/ArtistContentHeader.vue';
import ArtistContentTable from '@/components/artist/artist-content/ArtistContentTable.vue';
import ArtistContentShelves from '@/components/artist/artist-content/ArtistContentShelves.vue';

export default {
    components: {
        ArtistContentHeader,
        ArtistContentTable,
        ArtistContentShelves,
    },

    props: {
        topTracks: {
            type: Array,
            required: true,
        },

        artistID: {
            type: String,
            required: true,
        },
    },
};
</script>
