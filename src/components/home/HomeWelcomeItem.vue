<template>
    <router-link
    class="group cursor-pointer w-full bg-minimalColor flex flex-row gap-3 items-center rounded-md hover:bg-hoverHeadbar justify-between"
    :to="`/playlist/${data.id}`"
    tag="div"
    >

        <img
        class="object-cover w-20 h-20 rounded-l"
        :src="data.images[0].url"
        alt="image"
        />

        <div class="text-white text-base font-semibold whitespace-normal pl-1 truncate line-clamp-2 flex-1">
        {{ data.name }}
        </div>

        <play-button class="mr-2 opacity-0 group-hover:opacity-100 "/>

    </router-link>
</template>

<script>
import PlayButton from '../PlayButton.vue';

export default {
    components: {
        PlayButton,
    },

    props: {
        data: {
        type: Object,
        required: true,
        },
    },
};
</script>
