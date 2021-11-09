<template>
    <div class="flex items-center pt-6 gap-8">

        <play-button :width="32" :height="32"/>

        <!-- TODO: Texti centerla -->

        <Button text="TAKİP ET"/>

        <div class="opacity-30 hover:opacity-100">
            <details-icon :width="26" :height="26"/>
        </div>

    </div>
</template>

<script>
import DetailsIcon from '@/components/icons/DetailsIcon.vue';
import PlayButton from '../../PlayButton.vue';
import Button from '../../Button.vue';

export default {
    components: {
        DetailsIcon,
        PlayButton,
        Button,
    },
};
</script>
