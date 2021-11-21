<template>
  <div class="flex flex-col lg:flex-row text-2xl font-bold box-border gap-10 pt-2 pb-10">
    <div class=" whitespace-nowrap">

      <div>Turda</div>

      <div
        class="pt-5 flex items-center"
        v-for="index in 4"
        :key="index"
      >
        <div class=" bg-minimalColor rounded-lg flex flex-col items-center justify-center p-2 mr-4 w-[4.5rem] h-16 shadow-lg">
          <div class="text-xs">MAR</div>
          <div>20</div>
        </div>

        <div>
          <div class="text-xl">Abono General 2 dias Vive Latino 2022</div>
          <div class="text-s font-normal opacity-60 pt-1">Paz 05:00 • Foro Sol, México</div>
        </div>

      </div>

      <div class="pt-4 text-sm font-bold tracking-widest opacity-60 hover:underline cursor-pointer">HEPSİNİ GÖR</div>

    </div>

    <div>
      <div class="mb-5">Ürünler</div>

      <div
        class="hover:bg-yellow-900 p-2 rounded-lg flex w-full"
        v-for="index in 3"
        :key="index"
      >
          <img
            class="w-[4.5rem] h-[4.5rem] shadow-lg mr-4 rounded-sm"
            src="https://merch-img.scdn.co/https%3A%2F%2Fmerchbar.imgix.net%2Fproduct%2Fcdified%2Fupc%2F59%2F606949075927.jpg%3Fblend64%3DaHR0cHM6Ly9tZXJjaGJhci5pbWdpeC5uZXQvfnRleHQ_dHh0LWZvbnQ9c2Fucy1zZXJpZi1ib2xkJnR4dC1jb2xvcj1mZmYmdHh0LXNpemU9NjQmdHh0LXBhZD0xNiZ3PTMyMCZiZz1mNzMxMTkmZHByPTImdHh0LWFsaWduPW1pZGRsZSUyQ2NlbnRlciZ0eHQ2ND1UMDRnVTBGTVJRJTNEJTNE%26blend-mode%3Dnormal%26blend-align%3Dbottom%2Cleft%26dpr%3D2%26blend-w%3D0.25%26w%3D640%26h%3D640?h=300&w=300&s=a3ea3be0ea0849ce80d31ec4109eabe7" alt="merchItem"
          >

          <div class="w-full">
            <div class="w-full text-xl line-clamp-2">
              CHOCOLATE STARFISH & THE HOT DOG FLAVORED WATER CD
            </div>

            <div class="text-s font-normal opacity-60 pt-1 line-clamp-2">
              This is a new, unopened CD in its original packaging.
            </div>
          </div>

      </div>

    </div>

  </div>
</template>
