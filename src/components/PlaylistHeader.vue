<template>
  <div
    :style="type === 'artist' ? { backgroundImage:'url('+ picture +')' } : { backgroundColor: pictureColor }"
    class="pt-[5.5rem] px-8 pb-6 bg-center bg-cover flex gap-6 flex-end items-end"
    :class="{
    'bg-gray-300': !pictureColor,
    }"
  >

    <img
      class="shadow-xl w-48 h-48 object-cover min-w-[12rem] min-h-[12rem] max-w-[12rem] max-h-[12rem]"
      :class="type === 'profile' ? 'rounded-full' : ''"
      :src="picture"
      alt="Liked Songs"
      v-if="type !== 'artist'"
    />

    <div class="flex flex-col gap-2 overflow-x-hidden">

      <div v-if="type === 'artist'" class="flex flex-row gap-1 text-xs mb-3 items-center"><verified-icon/> Doğrulanmış Sanatçı</div>

      <div v-else class="text-[12px] mt-1 font-bold pb-1">
          {{ headerText }}
      </div>

      <div class="py-0.5 text-5xl playlistSmall:text-7xl playlistMedium:text-8xl font-black cursor-default tracking-tighter line-clamp-2">
          {{ name }}
      </div>

      <div
          class="opacity-70 text-[14px] tracking-wide hover:underline"
          v-html="description"
          v-if="type !== 'liked' && type !== 'artist' && type !== 'profile' && type !== 'album'"
      />

      <div
        v-if="type === 'artist'"
        class="pt-2"
      >{{ Count }} aylık dinleyici</div>

      <div v-else class="flex flex-row items-center gap-1 flex-wrap">

        <img
          v-if="type==='liked' || type==='album'"
          class="w-6 h-6 object-cover rounded-full"
          :src="authorPicture"
          alt="profilePic"
        />

        <router-link
          tag="div"
          :to="authorLink"
          class="text-sm h-full pt-1 cursor-pointer opacity-60"
          :class="type !== 'profile' ? 'hover:underline font-bold opacity-100' : ''"
        >
          {{ author }} {{ type === 'profile' ? 'Herkese Açık Çalma Listesi' : '' }}
        </router-link>

        <router-link
          v-if="type === 'profile' && likeCount !== 0"
          class="text-[14px] opacity-100"
          :to="`/user/${ $route.params.id }/followers`"
          >
            • {{ Count }} Takipçi
          </router-link>

        <div
          v-else-if="likeCount !== 0"
          class="text-[14px] opacity-70"
        >
          • {{ type !== 'album' ? Count : likeCount.slice(0, 4) }} {{type !== 'album' ? 'beğenme' : ''}}
        </div>

        <router-link
          v-if="type === 'profile'"
          class="text-[14px] opacity-100"
          :to="`/user/${ $route.params.id }/following`"
        >
            • {{ songCount }} Takip Ediliyor
          </router-link>

        <div v-else class="text-[14px] opacity-60">
            • {{ songCount }} şarkı{{ type === 'playlist' || type === 'album' ? ',': ''}}
        </div>

        <div
          class="text-[14px] opacity-60"
          v-if="type === 'playlist' || type === 'album'"
        >
          yaklaşık {{ Math.ceil((songCount * 3.66)/60) }} saat
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
        type: [Number, String],
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

    authorLink: {
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

    headerText() {
      if (this.type === 'profile') {
        return 'PROFİL';
      }
      if (this.type === 'album') {
        return 'ALBÜM';
      }
        return 'PLAYLİST';
    },
},
};
</script>
