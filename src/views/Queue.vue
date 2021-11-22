<template>
  <div
    class="flex flex-col text-white px-8 py-10 bg-contentColor h-full overflow-y-auto"
  >

    <div class="text-2xl font-bold tracking-tighter">Sıraya Ekle</div>

      <div class="opacity-60 font-bold pt-3">Şu anda çalan</div>

      <table class="w-full pt-2">

        <tbody v-if="currentUsersCurrentPlayingTrack">

          <table-item
            :track="currentUsersCurrentPlayingTrack"
            type="profile"
            :index="0"
          />

        </tbody>
        <tbody v-else class="text-center"> Şuanda çalan bir şarkı yok. </tbody>

      </table>

      <div class="pt-10 font-bold ">

        <span class="opacity-60">
          Sıradaki parça:
        </span>

        <span v-if="currentUsersCurrentPlayingTrack" class="opacity-60 hover:opacity-100 hover:underline cursor-pointer pl-1">
          {{ currentUsersCurrentPlayingTrack.name }}
        </span>

        <div class="pt-4">

          <table
          class="w-full"
        >

        <tbody v-if="currentUsersCurrentPlayingTrack">

          <table-item
            v-for="index in 10"
            :key="index"
            :track="currentUsersCurrentPlayingTrack"
            type="profile"
            :index="index"
          />

        </tbody>

        <tbody v-else class="text-center"> Şuanda bir şarkı sırası yok. </tbody>

      </table>

      </div>

    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex';
import TableItem from '../components/TableItem.vue';

export default {
  data() {
    return {
      loaded: false,
    };
  },
  components: { TableItem },

  computed: {
    ...mapState('currentUser', [
      'currentUsersCurrentPlayingTrack',
    ]),
  },

  created() {
    this.$store.dispatch('currentUser/getCurrentUsersCurrentPlayingTrack', null, { root: true }).then(() => {
      this.$store.commit('setIsLoading', false);
    });
  },
};
</script>
