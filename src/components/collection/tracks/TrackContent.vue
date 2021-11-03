<template>
        <table class="w-full h-full mt-6 text-white px-4" v-if="playlistData.length > 0">
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

            <tr class="group hover:bg-activeColor text-[12px]" v-for="(saved, index) in playlistData" :key="index">

              <td class="mt-10 text-right rounded-l text-base">
                {{index+1}}
              </td>

              <td class="py-2 pl-3 text-left text-base font-normal max-w-[14rem]">
                <div class="flex w-full flex-row gap-2">

                  <a :href="saved.track.album.external_urls.spotify" class="min-w-[40px] h-10">
                    <img :src="saved.track.album.images[0].url" alt="profileImg" class="w-full h-full bg-contain"/>
                  </a>

                  <div class="flex flex-col w-full truncate pr-2 overflow-hidden">

                    <a :href="saved.track.external_urls.spotify" class="text-white truncate overflow-hidden">
                      <span class=" truncate">{{ saved.track.name }}</span>
                    </a>

                    <a :href="saved.track.artists[0].external_urls.spotify" class="text-xs text-normalColor hover:underline">
                      {{ saved.track.artists[0].name }}
                    </a>

                  </div>

                </div>
              </td>

              <td class="hidden md:table-cell align-middle max-w-[12rem] truncate">

                <a class="text-xs text-normalColor hover:underline w-full" :href="saved.track.album.external_urls.spotify">
                  <span class="truncate">
                    {{ saved.track.album.name }}
                  </span>
                </a>
              </td>

              <td class="hidden lg:table-cell">
                {{ addTo(saved.added_at) }}
              </td>

              <td class="rounded-r pr-2 mr-2">

                <div class="flex flex-row justify-center w-full text-spotifyGreen gap-4">

                  <HeartIcon :width="16" :height="16"/>

                  <div class="text-normalColor mr-2">
                    {{ getSeconds(saved.track.duration_ms) }}
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
import HeartIcon from '@/components/icons/HeartIcon.vue';
import DetailsIcon from '@/components/icons/DetailsIcon.vue';

const relativeTime = require('dayjs/plugin/relativeTime');
require('dayjs/locale/tr');

dayjs.extend(relativeTime);
dayjs.locale('tr');

export default {
  components: {
    DurationIcon,
    HeartIcon,
    DetailsIcon,
  },

  props: {
    playlistData: {
      type: Array,
      required: true,
    },
  },

  methods: {
    addTo(date) {
      return dayjs().to(date);
    },

    getSeconds(miliseconds) {
      const min = Math.floor((miliseconds / 1000 / 60));
      let sec = Math.floor((miliseconds / 1000) % 60);
      if (sec <= 10) {
        sec = `0${sec}`;
      }
      return `${min}:${sec}`;
    },
  },
};
</script>
