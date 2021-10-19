<template>
<div class=" flex-col flex h-full overflow-auto">
  <div class="w-full h-full text-white flex flex-col gap-6 bg-gradient-to-b to-gradientBlue from-gradientPurple">
    <div class="flex flex-row items-end gap-5 pt-16 pl-4 lg:pl-8">
      <img class="shadow-xl w-48 h-48" src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png" alt="Liked Songs">
      <div class="flex flex-col gap-1">
        <div class="text-[12px] mt-1 font-bold">
          ÇALMA LİSTESİ
        </div>
        <div class="py-1 text-5xl lg:text-7xl font-black  tracking-tighter">
          Beğenilen Şarkılar
        </div>
        <div class="flex flex-row items-center gap-1">
          <div class="rounded-full">
            <img class="w-6 h-6 object-cover rounded-full" src="https://i.scdn.co/image/ab6775700000ee850d8934d06959380ede197038" alt="profilePic">
        </div>
        <div class="text-sm font-bold">
          Meeyzt
        </div>
        <div class="text-sm text-gray-400">
          • 1.106 şarkı
        </div>
        </div>
      </div>
    </div>
    <div class="bg-opacity-70 bg-black w-full h-full pt-6 px-4">
      <div class="w-14 h-14 rounded-full bg-spotifyGreen flex flex-row justify-center items-center text-white transition-all hover:scale-110">
        <PlayIcon :width="28" :height="28"/>
      </div>
      <div class="px-4 m-0 text-normalColor">
        <table class="w-full h-full mt-6">
          <tbody>
            <tr class="border-b text-xs">
              <td class="flex flex-row w-full justify-end items-center pr-1"><div>#</div></td>
              <td>BAŞLIK</td>
              <td class="hidden md:table-cell">ALBÜM</td>
              <td class="hidden lg:table-cell">TARİH EKLENDİ</td>
              <td>
                <div class="flex flex-row justify-center w-full">
                  <DurationIcon :width="16" :height="16" class="my-1"/>
                </div>
              </td>
            </tr>

            <tr v-for="(saved, index) in $store.getters.saved" :key="index">
              <td>{{index+1}}</td>
              <td class="py-2">
                <div class="flex flex-row gap-2">
                 <a :href="saved.track.album.external_urls.spotify" class="w-10 h-10">
                    <img :src="saved.track.album.images[0].url" alt="profileImg"/>
                 </a>
                  <div class="flex flex-col">
                    <a :href="saved.track.external_urls.spotify" class="text-white">{{saved.track.name}}</a>
                    <a :href="saved.track.artists[0].external_urls.spotify" class="text-xs text-normalColor">{{saved.track.artists[0].name}}</a>
                  </div>
                </div>
              </td>
              <td class="hidden md:table-cell">
                <a class="text-xs truncate" href="#">{{saved.track.album.name}}</a>
              </td>
              <td class="hidden lg:table-cell">{{ addTo(saved.added_at) }}</td>
              <td>
                <div class="flex flex-row justify-center w-full">
                  <div>{{getSeconds(saved.track.duration_ms)}}</div>
                </div>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
  </div>
  </div>
</div>

</template>

<script>
import dayjs from 'dayjs';
import PlayIcon from '@/components/icons/PlayIcon.vue';
import DurationIcon from '@/components/icons/DurationIcon.vue';

const relativeTime = require('dayjs/plugin/relativeTime');

dayjs.extend(relativeTime);

export default {
  components: {
    PlayIcon,
    DurationIcon,
  },

  methods: {
    addTo(date) {
      console.log(this.$store.getters.saved);
      return dayjs().to(date);
    },
    getSeconds(miliseconds) {
      const min = Math.floor((miliseconds / 1000 / 60));
      const sec = Math.floor((miliseconds / 1000) % 60);
      return `${min}:${sec}`;
    },
  },
};
</script>
