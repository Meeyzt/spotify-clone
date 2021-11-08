<template>
    <table class="w-full">

        <tbody>

            <tr> <td class="pt-4"/></tr>

        <!-- TODO: 5 tane gizleme yapılacak -->
            <tr
            v-for="(track, index) in artistTopTracks"
            :key="track.id"
            class="group hover:bg-activeColor text-[12px]"
            >

                <td class="mt-10 text-right rounded-l text-base px-2 w-1/12">

                    <div class="flex justify-center">

                        <span class="group-hover:hidden">
                            {{ index + 1 }}
                        </span>

                        <play-arrow
                            class="group-hover:block hidden"
                            :height="18"
                            :width="18"
                        />

                    </div>

                </td>

                <td class="py-2 text-left text-base font-normal w-8/12 pr-4">

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

                <td class="rounded-r pr-3 w-3/12">

                <div class="flex flex-row justify-center w-full text-spotifyGreen gap-4">
                    <HeartIcon class="opacity-0 group-hover:opacity-70 hover:opacity-100 text-white" :width="16" :height="16" />

                    <div class="text-normalColor mr-2">
                        {{ getSeconds(track.duration_ms) }}
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
import DetailsIcon from '@/components/icons/DetailsIcon.vue';
import HeartIcon from '@/components/icons/HeartIcon.vue';
import PlayArrow from '@/components/icons/PlayArrowIcon.vue';

export default {
    props: {
        artistTopTracks: {
            type: Array,
            required: true,
        },
    },

    components: {
        DetailsIcon,
        HeartIcon,
        PlayArrow,
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
