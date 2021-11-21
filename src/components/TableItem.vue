<template>
  <tr
    class="group hover:bg-activeColor text-[12px]"
  >

    <td
      class="mt-10 text-right rounded-l text-base px-2"
      :class="type === 'playlist' ? 'w-5' : 'w-10'"
    >

      <div class="flex justify-center w-full">

          <span class="group-hover:hidden">
            {{ index + 1 }}
          </span>

          <play-arrow-icon
            class="flex-row justify-end group-hover:flex hidden"
            :height="18"
            :width="18"
          />

      </div>

    </td>

    <td class="py-2 text-left text-base font-normal max-w-[14rem] pr-4">
      <div class="flex w-full flex-row gap-2">

        <div
          class="min-w-[40px] h-10"
          v-if="type !== 'album'"
        >
          <img
            :src="track.album.images[0].url"
            alt="profileImg" class="w-full h-full bg-contain"
          />
        </div>

        <div class="flex flex-col w-full truncate">

          <div class="text-white truncate overflow-hidden">
            <span class="truncate">{{ track.name }}</span>
          </div>

          <router-link
            :to="`/artist/${track.artists[0].id}`"
            class="text-xs text-normalColor hover:underline"
          >
            {{ track.artists[0].name }}
          </router-link>

        </div>

      </div>
    </td>

    <td class="hidden md:table-cell max-w-[12rem] truncate pr-4">

      <router-link
        :to="type !== 'album' ? `/album/${track.album.id}` : ''"
        class="hover:underline w-full"
        :class="type === 'playlist' ? 'text-xs text-normalColor' : 'text-s text-normalColor'"
        v-if="type !== 'album'"
      >
        <span class="truncate">
          {{ type === 'playlist' || type === 'liked' || type === 'profile' ?  track.album.name : '16.000.000' }}
        </span>
      </router-link>
    </td>

    <td v-if="type === 'playlist' || type=== 'liked'" class="hidden lg:table-cell w-14 opacity-60">
      {{ addTo(added_at) }}
    </td>

    <td class="rounded-r pr-2 mr-2 w-2">

      <div class="flex flex-row justify-center w-full text-spotifyGreen gap-4">

        <component
          :is="track.liked || type === 'liked' || liked ? 'FilledHeartIcon' : 'HeartIcon'"
          :class="!track.liked && type !== 'liked' && !liked ? 'opacity-0 group-hover:opacity-70 hover:opacity-100 text-white':'text-spotifyGreen'"
          :width="16"
          :height="16"
        />

        <div class="text-normalColor mr-2">
          {{ getSeconds(track.duration_ms) }}
        </div>

        <div class="text-white invisible group-hover:visible">
          <DetailsIcon :height="16" :width="16"/>
        </div>

      </div>

    </td>

  </tr>
</template>

<script>
import dayjs from 'dayjs';
import DetailsIcon from '@/components/icons/DetailsIcon.vue';
import PlayArrowIcon from '@/components/icons/PlayArrowIcon.vue';
import HeartIcon from '@/components/icons/HeartIcon.vue';
import FilledHeartIcon from '@/components/icons/FilledHeartIcon.vue';

const relativeTime = require('dayjs/plugin/relativeTime');
require('dayjs/locale/tr');

dayjs.extend(relativeTime);
dayjs.locale('tr');

export default {
  components: {
    DetailsIcon,
    PlayArrowIcon,
    FilledHeartIcon,
    HeartIcon,
  },

  props: {
      track: {
          type: Object,
          required: true,
      },

      added_at: {
        type: String,
        default: '',
      },

      index: {
          type: Number,
          required: true,
      },

      liked: {
        type: Boolean,
        default: false,
      },

      type: {
          type: String,
          default: 'halfTable',
      },
  },

  methods: {
    addTo(date) {
      return dayjs().to(date);
    },

      getSeconds(miliseconds) {
          const min = Math.floor((miliseconds / 1000 / 60));
          const sec = Math.floor((miliseconds / 1000) % 60) < 10
          ? `0${Math.floor((miliseconds / 1000) % 60)}`
          : Math.floor((miliseconds / 1000) % 60);

          return `${min}:${sec}`;
      },
  },
};
</script>
