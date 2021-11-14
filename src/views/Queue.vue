<template>
  <div class="flex flex-col text-white px-8 py-10 bg-contentColor h-full overflow-y-auto">

    <div class="text-2xl font-bold tracking-tighter">Sıraya Ekle</div>

      <div class="opacity-60 font-bold pt-3">Şu anda çalan</div>

      <table
        class="w-full pt-2"
        v-if="currentTrack"
      >

        <tbody v-if="currentTrack.item">

          <table-item
            :track="currentTrack.item"
            type="profile"
            :index="0"
          />

        </tbody>

      </table>

      <div class="pt-10 font-bold ">

        <span class="opacity-60">
          Sıradaki parça:
        </span>

        <span class="opacity-60 hover:opacity-100 hover:underline cursor-pointer pl-1">
          {{ currentTrack.item.name }}
        </span>

        <div class="pt-4">

          <table
          class="w-full"
          v-if="currentTrack"
        >

          <tbody v-if="currentTrack.item">

            <table-item
              v-for="index in 10"
              :key="index"
              :track="currentTrack.item"
              type="profile"
              :index="index"
            />

          </tbody>

        </table>

        </div>

      </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import TableItem from '../components/TableItem.vue';

export default {
  components: { TableItem },

  computed: {

    ...mapState([
      'currentTrack',
    ]),
  },

  created() {
    this.$store.dispatch('getCurrentPlayingTrack');
  },
};
</script>
