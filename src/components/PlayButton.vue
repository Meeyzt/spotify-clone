<template>
    <div
        :class="`
        ${ color === 'green' ? 'bg-spotifyGreen ' : 'bg-white ' }
        transition-all rounded-full flex items-center hover:scale-110 p-3 justify-center`"
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
