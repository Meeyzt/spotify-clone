<template>
  <router-link
    tag="div"
    class="group w-full h-auto bg-minimalColor cursor-pointer hover:bg-hoverHeadbar rounded-md flex-1 isolate p-4 relative"
    :to="`/${linkType}/${playlistInfo.id}`"
  >

      <div class="h-full">

        <div class="mb-4 relative">

          <div class="w-full pb-[100%] relative">
            <img
              v-if="type !== 'artist'"
              class="w-full h-full left-0 absolute top-0 block object-cover object-center"
              :src="playlistInfo.images[0].url"
              alt="Photo"
            />

            <img
              v-else
              class="w-full h-full left-0 absolute top-0 rounded-full shadow-lg block object-cover object-center"
              :src="playlistInfo.images[0].url"
              alt="Photo"
            />
          </div>

          <div
            v-if="type !== 'podcast'"
            class="transition right-2 bottom-0 rounded-full absolute z-2 opacity-0 group-hover:opacity-100 hover:transform drop-shadow-lg group-hover:-translate-y-2"
          >

            <play-button/>

          </div>
      </div>
      <div class="min-h-[62px] relative items-start justify-center flex flex-col max-w-full">

        <div class="text-white align-middle inline-block max-w-full text-base font-bold truncate ">
          {{ playlistInfo.name }}
        </div>

        <div
          class="text-normalColor text-s font-normal w-full truncate mt-1"
          v-html="playlistInfo.description"
        >
        </div>

      </div>
    </div>
  </router-link>
</template>

<script>
import PlayButton from '@/components/PlayButton.vue';

export default {
  components: {
    PlayButton,
  },

  computed: {
    linkType() {
      if (this.type === 'artist') {
        return 'artist';
      }
      if (this.type === 'album') {
        return 'album';
      }
      return 'playlist';
    },
  },

  props: {

    type: {
      default: 'playlist',
      type: String,
    },

    playlistInfo: {
      required: true,
      type: [
        Object,
        Array,
      ],
    },
  },
};
</script>
