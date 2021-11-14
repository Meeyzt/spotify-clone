<template>
    <table
      class="w-full"
      v-if="artistTopTracks"
    >

        <tbody>

            <tr><td class="pt-4"/></tr>

        <!-- TODO: 5 tane gizleme yapılacak -->
            <table-item
              v-for="(track, index) in artistTopTracks"
              :key="track.id"
              :index="index"
              :track="track"
              :liked="track.liked"
              type="artist"
            />

        </tbody>

    </table>
</template>

<script>
import TableItem from '../../TableItem.vue';

export default {
    components: { TableItem },

    props: {
        artistTopTracks: {
            type: Array,
            required: true,
        },
    },
};
</script>
