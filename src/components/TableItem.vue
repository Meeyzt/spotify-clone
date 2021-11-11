<template>
    <tr
        class="group hover:bg-activeColor text-[12px]"
    >

        <td class="mt-10 text-right rounded-l text-base px-2 w-1/12 opacity-60">

            <div class="flex justify-center">

                <span class="group-hover:hidden">
                    {{ index + 1 }}
                </span>

                <play-arrow-icon
                    class="group-hover:block hidden"
                    :height="18"
                    :width="18"
                />

            </div>

        </td>

        <td v-if="type === 'quarterTable'" class="py-2 text-left text-base font-normal w-8/12 pr-4">

            <div class="flex flex-row gap-2">

                <img
                    alt="profileImg" class="w-10 h-10 bg-contain"
                    :src="track.album.images[0].url"
                />

                <div class="flex flex-col justify-center">

                    <div
                        class="text-white text-left items-center cursor-default"
                    >

                        <span class="truncate">{{ track.name }}</span>

                    </div>

                </div>

            </div>
        </td>

        <td v-else-if="type === 'halfTable'" class="py-2 text-left text-base font-normal w-6/12 pr-4">

            <div class="flex w-full flex-row gap-2">

            <a
                href="#"
                class="min-w-[40px] h-10"
            >
                <img
                    :src="track.album.images[0].url"
                    alt="profileImg" class="w-full h-full bg-contain"
                />
            </a>

            <div class="flex flex-col w-full truncate">

                <a
                    href="#"
                    class="text-white"
                >
                    <span class="truncate">{{ track.name }}</span>
                </a>

                <a
                    :href="`/artist/${track.artists[0].id}`"
                    class="text-xs text-normalColor hover:underline truncate"
                >
                    {{ track.artists[0].name }}
                </a>

            </div>

            </div>
        </td>

        <td v-if="type === 'halfTable'" class="hidden md:table-cell w-3/12 truncate">

          <a
            class="hover:underline"
            href="#"
          >

            <span class="truncate text-s opacity-60">
              {{ track.album.name }}
            </span>

          </a>

        </td>

        <td class="rounded-r pr-3 w-2/12">

          <div class="flex flex-row justify-center w-full text-spotifyGreen gap-4">

            <heart-icon class="opacity-0 group-hover:opacity-70 hover:opacity-100 text-white" :width="16" :height="16" />

            <div class="text-normalColor mr-2">
              {{ getSeconds(track.duration_ms) }}
            </div>

            <div class="text-white invisible group-hover:visible">
              <details-icon :height="16" :width="16"/>
            </div>

          </div>

        </td>

    </tr>
</template>

<script>
import DetailsIcon from './icons/DetailsIcon.vue';
import HeartIcon from './icons/HeartIcon.vue';
import PlayArrowIcon from './icons/PlayArrowIcon.vue';

export default {
    props: {
        track: {
            type: Object,
            required: true,
        },

        index: {
            type: Number,
            required: true,
        },

        type: {
            type: String,
            default: 'halfTable',
        },
    },

    components: {
        HeartIcon,
        DetailsIcon,
        PlayArrowIcon,
    },

    methods: {
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
