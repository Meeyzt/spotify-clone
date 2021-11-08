<template>
    <div
        class="w-full flex justify-start items-start h-10 left-0 top-0 bottom-0"
        v-if="$route.meta.showSearchInput"
    >

        <div class="w-96 min-w-[260px] rounded-full flex flex-row text-black bg-white h-full items-center relative">

            <SearchIcon :width="24" :height="24" class="ml-3 z-10 absolute" />

            <input
                class="h-full w-full rounded-full flex flex-row text-black bg-white focus:outline-none items-center relative p-1 pl-10 text-sm truncate justify-center placeholder-gray-500"
                type="text"
                placeholder="Sanatçılar, şarkılar veya podcast'ler"
            >

        </div>

    </div>
</template>

<script>
import SearchIcon from '../icons/SearchIcon.vue';

export default {
    components: {
        SearchIcon,
    },
};
</script>
