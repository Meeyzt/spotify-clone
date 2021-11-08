<template>
    <div class="flex items-center pt-6 gap-8">

        <div class="w-16 h-16 rounded-full bg-spotifyGreen flex items-center justify-center transition hover:scale-110 ">
            <play-icon :height="30" :width="30"/>
        </div>

        <!-- TODO: Texti centerla -->
        <button class="border rounded bg-transparent py-[7px] text-center px-[15px] text-2xs border-opacity-30 hover:border-opacity-100 cursor-default font-bold tracking-widest">
            TAKİP ET
        </button>

        <div class="opacity-30 hover:opacity-100">
            <details-icon :width="26" :height="26"/>
        </div>

    </div>
</template>

<script>
import PlayIcon from '@/components/icons/PlayIcon.vue';
import DetailsIcon from '@/components/icons/DetailsIcon.vue';

export default {
    components: {
        PlayIcon,
        DetailsIcon,
    },
};
</script>
