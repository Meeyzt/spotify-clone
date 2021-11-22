<template>
  <div class="pt-10 w-full pb-4">
    <div class="text-2xl font-bold tracking-tighter">Hakkında</div>

    <div
      class="hover:scale-105 cursor-pointer transition mt-4 rounded-lg bg-white w-full h-[32.25rem] flex flex-col justify-end shadow-lg bg-cover"
      :style="{ backgroundImage:'url('+ artistImg +')' }"
    >
      <div class="h-full w-full bg-gradient-to-b from-white to-black opacity-25 rounded-t-lg relative" />

      <div>

        <div class="font-bold text-base z-10 bg-black bg-opacity-25 pl-3 ">
          9.176.527 Aylık dinleyici
        </div>

        <div class="font-bold text-base bg-black bg-opacity-25 pl-3 pb-8">
         {{ artistName }} is a famous group
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default ({
  props: {
    artistImg: {
      type: String,
      required: true,
    },

    artistName: {
      type: String,
      required: true,
    },
  },
});
</script>
