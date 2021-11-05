<template>
  <table class="w-full h-full mt-6 text-white px-4" v-if="playlistData !== null">
    <thead>

      <tr class="text-[12px] tracking-tighter border-b border-gray-500 opacity-60">

        <th class="py-1 flex items-center justify-end font-normal text-[16px]">
          <div>
            #
          </div>
        </th>

        <th class="text-left pl-3 font-normal tracking-widest">
          BAŞLIK
        </th>

        <th class="hidden md:table-cell text-left font-normal truncate tracking-widest">
          ALBÜM
        </th>

        <th class="hidden lg:table-cell whitespace-nowrap truncate font-normal pr-10 text-left tracking-widest">
          TARİH EKLENDİ
        </th>

        <th class="flex flex-row justify-center items-center">
          <DurationIcon :width="16" :height="16"/>
        </th>

      </tr>

    </thead>
    <tbody>
      <tr>
        <td class="pt-4"></td>
      </tr>

      <tr
        class="group hover:bg-activeColor text-[12px]"
        v-for="(playlist, index) in playlistData"
        :key="index"
      >

        <td class="mt-10 text-right rounded-l text-base">
          <div class="flex justify-center w-full">
              <span class="group-hover:hidden">
                {{ index + 1 }}
              </span>
              <play-arrow
                class="flex-row justify-end group-hover:flex hidden"
                :height="18"
                :width="18"
              />
          </div>
        </td>

        <td class="py-2 pl-3 text-left text-base font-normal max-w-[14rem]">
          <div class="flex w-full flex-row gap-2">

            <a
              :href="playlist.track.album.external_urls.spotify"
              class="min-w-[40px] h-10"
            >
              <img
                :src="playlist.track.album.images[0].url"
                alt="profileImg" class="w-full h-full bg-contain"
              />
            </a>

            <div class="flex flex-col w-full truncate">

              <a
                :href="playlist.track.external_urls.spotify"
                class="text-white truncate overflow-hidden"
              >
                <span class="truncate">{{ playlist.track.name }}</span>
              </a>

              <a
                :href="playlist.track.artists[0].external_urls.spotify"
                class="text-xs text-normalColor hover:underline"
              >
                {{ playlist.track.artists[0].name }}
              </a>

            </div>

          </div>
        </td>

        <td class="hidden md:table-cell max-w-[12rem] truncate">

          <a
            class="text-xs text-normalColor hover:underline w-full"
            :href="playlist.track.album.external_urls.spotify"
          >
            <span class="truncate">
              {{ playlist.track.album.name }}
            </span>
          </a>
        </td>

        <td class="hidden lg:table-cell">
          {{ addTo(playlist.added_at) }}
        </td>

        <td class="rounded-r pr-2 mr-2 w-2">

          <div class="flex flex-row justify-center w-full text-spotifyGreen gap-4">
            <FilledHeartIcon v-if="playlist.liked || type ==='liked'" :width="16" :height="16"/>
            <HeartIcon v-else class="opacity-0 group-hover:opacity-100 text-white" :width="16" :height="16" />

            <div class="text-normalColor mr-2">
              {{ getSeconds(playlist.track.duration_ms) }}
            </div>

            <div class="text-white invisible group-hover:visible">
              <DetailsIcon :height="16" :width="16"/>
            </div>

          </div>

        </td>

      </tr>

    </tbody>
  </table>
</template>

<script>
import dayjs from 'dayjs';
import DurationIcon from '@/components/icons/DurationIcon.vue';
import FilledHeartIcon from '@/components/icons/FilledHeartIcon.vue';
import HeartIcon from '@/components/icons/HeartIcon.vue';
import DetailsIcon from '@/components/icons/DetailsIcon.vue';
import PlayArrow from '@/components/icons/PlayArrowIcon.vue';

const relativeTime = require('dayjs/plugin/relativeTime');
require('dayjs/locale/tr');

dayjs.extend(relativeTime);
dayjs.locale('tr');

export default {
  components: {
    DurationIcon,
    FilledHeartIcon,
    HeartIcon,
    DetailsIcon,
    PlayArrow,
  },

  props: {
    playlistData: {
      type: Array,
      required: true,
    },

    type: {
      type: String,
      required: true,
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
