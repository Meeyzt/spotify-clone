<template>
    <div
        :style="type === 'artist' ? { backgroundImage:'url('+ picture +')' } : { backgroundColor: pictureColor }"
        class="pt-[5.5rem] px-8 pb-6 bg-center flex gap-6 flex-end items-end bg-opacity-50"
        :class="{
        'bg-gray-300': !pictureColor,
        }"
    >

        <img
            class="shadow-xl w-48 h-48 object-cover"
            :src="picture"
            alt="Liked Songs"
            v-if="type !== 'artist'"
        />

        <div class="flex flex-col gap-2">
            <div v-if="type === 'artist'" class="flex flex-row gap-1 text-xs mb-3 items-center"> <verified-icon/> Doğrulanmış Sanatçı</div>

            <div v-else class="text-[12px] mt-1 font-bold pb-1">
                ÇALMA LİSTESİ
            </div>

            <div class="py-0.5 text-5xl playlistSmall:text-7xl playlistMedium:text-8xl font-black cursor-default tracking-tighter">
                {{ name }}
            </div>

            <div
                class="opacity-70 text-[14px] tracking-wide hover:underline"
                v-html="description"
                v-if="type !== 'liked' && type !== 'artist'"
            />

            <div v-if="type === 'artist'" class="pt-2">{{ Count }} aylık dinleyici</div>

            <div v-else class="flex flex-row items-center gap-1">

                <img
                    v-if="type==='liked'"
                    class="w-6 h-6 object-cover rounded-full"
                    :src="authorPicture"
                    alt="profilePic"
                />

                <div class="text-sm font-bold h-full pt-1 cursor-pointer hover:underline">
                    {{ author }}
                </div>

                <div
                    v-if="likeCount != 0"
                    class="text-[14px] opacity-70"
                >
                    • {{ Count }} beğenme
                </div>

                <div class="text-[14px] opacity-70">
                    • {{ songCount }} şarkı
                </div>

            </div>

        </div>

    </div>
</template>

<script>
import { average } from 'color.js';
import VerifiedIcon from '@/components/icons/VerifiedIcon.vue';

export default {
props: {
    name: {
        type: String,
        required: true,
    },

    type: {
        type: String,
        required: true,
    },

    likeCount: {
        type: Number,
        required: true,
    },

    picture: {
        type: String,
        required: true,
    },

    author: {
        type: String,
    },

    songCount: {
        type: Number,
    },

    authorPicture: {
        type: String,
    },

    description: {
        type: String,
    },
},

components: {
    VerifiedIcon,
},

    data() {
        return {
            pictureColor: undefined,
        };
    },

methods: {
    setAverageColor(initialColor) {
        average(initialColor, { format: 'hex' })
            .then((color) => {
                this.pictureColor = color;
            });
    },
},

    created() {
        this.setAverageColor(this.picture);
    },

computed: {
    Count() {
        return this.likeCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
},
};
</script>
