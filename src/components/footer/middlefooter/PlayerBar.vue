<template>
  <div class="flex flex-row gap-2 w-full items-center h-4 justify-center">

    <div
      v-if="where==='mid'"
      class="mr-2 text-[10px] font-bold text-normalColor pt-1.5 cursor-default"
    >
      02:13
    </div>

    <div class="h-full w-full flex items-center">

      <div class="group bg-player rounded-full w-full flex flex-row h-[4px] cursor-pointer items-center">

        <div class="bg-normalColor rounded-full group-hover:bg-spotifyGreen w-1/2 h-full"/>
        <div class="hidden group-hover:flex bg-white rounded-full w-3 h-3"/>

      </div>

    </div>

    <div
      v-if="where==='mid'"
      class="ml-2 text-[10px] font-bold text-normalColor pt-1.5 cursor-default"
    >
      4:27
    </div>

  </div>
</template>

<script>
export default {
  props: {
    where: {
      type: String,
      required: true,
    },
  },
};
</script>
