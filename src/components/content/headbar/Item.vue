<template>
  <div class="group w-full h-auto bg-minimalColor cursor-pointer hover:bg-hoverHeadbar rounded-md flex-1 isolate p-4 relative">
    <div class="h-full">
      <div class="mb-4 relative">
        <div class="w-full shadow-lg pb-[100%] relative">
          <img class="w-full h-full left-0 absolute top-0 block object-cover object-center" src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png" alt="dsad"/>
        </div>
        <div class="transition right-2 bottom-2 rounded-full absolute z-2 opacity-0 group-hover:opacity-100 hover:transform group-hover:-translate-y-2">
            <div class="transition bg-spotifyGreen w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
              <PlayIcon class="text-white"/>
            </div>
        </div>
      </div>
      <div class="min-h-[62px] relative items-start justify-center flex flex-col max-w-full">
        <div class="text-white align-middle z-1 inline-block max-w-full text-base font-bold truncated whitespace-nowrap">Beğenilen Şarkılar</div>
        <div class="text-normalColor text-s font-normal truncated whitespace-nowrap mt-1">1.101 şarkı</div>
      </div>
    </div>
  </div>
</template>

<script>
import PlayIcon from '@/components/icons/PlayIcon.vue';

export default {
  components: {
    PlayIcon,
  },
};
</script>
