<template>
  <Tracks
    v-if="this.$store.getters.saved"
    :playlistData="this.$store.getters.saved"
    playlistName="Beğenilen Şarkılar"
    playlistPic="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
    playlistAuthor="Meeyzt"
    :playlistSongCount="1.107"
    playlistAuthorProfilePic="https://i.scdn.co/image/ab6775700000ee850d8934d06959380ede197038"
    type="liked"
  />
</template>

<script>
import Tracks from '@/components/collection/Tracks.vue';

export default {
  components: {
    Tracks,
  },
};
</script>
