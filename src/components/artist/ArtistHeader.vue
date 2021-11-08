<template>
    <div
        :style="{ backgroundImage:'url('+ bgImage +')' }"
        class="pt-[5.5rem] px-8 pb-6 bg-gradient-to-b to-gray-400 from-black bg-cover bg-center"
        >

            <div class="flex flex-row gap-1 text-xs mb-3 items-center"> <verified-icon/> Doğrulanmış Sanatçı</div>

            <div class="py-0.5 text-7xl playlistSmall:text-8xl font-black cursor-default tracking-tighter">
                {{ artistName }}
            </div>

            <div class="pt-2">{{ artistLikeCount }} aylık dinleyici</div>

        </div>
</template>

<script>
import VerifiedIcon from '@/components/icons/VerifiedIcon.vue';

export default {
    props: {
        bgImage: {
            type: String,
            required: true,
        },

        artistName: {
            type: String,
            required: true,
        },

        artistFollowerCount: {
            type: Number,
            required: true,
        },
    },

    components: {
        VerifiedIcon,
    },

    computed: {
        artistLikeCount() {
            return this.artistFollowerCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        },
    },
};
</script>
