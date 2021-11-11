<template>
    <div
        :class="`
        ${ color === 'green' ? 'bg-spotifyGreen p-3' : 'bg-white p-2' }
        transition-all rounded-full flex items-center hover:scale-110 justify-center`"
    >
        <play-icon :class="`${ color === 'green' ? 'text-white' : 'text-black' }`" :width="width" :height="height"/>
    </div>
</template>

<script>
import PlayIcon from '@/components/icons/PlayIcon.vue';

export default {
    props: {
        color: {
            type: String,
            default: 'green',
        },

        width: {
            type: Number,
            default: 16,
        },

        height: {
            type: Number,
            default: 16,
        },
    },

    components: {
        PlayIcon,
    },
};
</script>
