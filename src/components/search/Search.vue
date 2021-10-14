<template>
  <div class="text-white">
    <div class="font-bold text-2xl leading-7 normal-case tracking-tighter ">
        En çok dinlediğin türler
      </div>
    <div class="flex flex-col relative">
      <div class=" py-2 relative">
        <div class="overflow-auto">
          <div class="grid-cols-226 gap-6 grid auto-rows-sifir overflow-hidden h-56 w-[calc((7*24px)+(8*226px))] ">
            <div class="transition -right-5 flex absolute items-center z-1 hover:scale-110">
              <div class="text-base box-border transition text-center relative font-bold rounded-full inline-block ">
                <div class="bg-white shadow-md relative text-black rounded-full w-12 h-12">
                  <div class="flex absolute top-3 left-3 ">
                    <ArrowIcon/>
                  </div>
                </div>
              </div>
            </div>
            <a class="cursor-pointer bg-red-600 rounded-md h-56 overflow-hidden relative w-full text-white col-span-2 ">
              <div class=" top-4 left-1 text-[40px] font-bold tracking-tighter leading-5 break-words p-4 absolute">
                  Rock
              </div>
              <img src="https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730" class="h-32 w-32 absolute object-center object-cover right-0 bottom-0 rotate-[25deg] translate-x-[18%] -translate-y-[2%]" alt="rockimg"/>
            </a>
             <a class="cursor-pointer bg-nicePurple rounded-md h-56 overflow-hidden relative w-full text-white col-span-2 ">
              <div class=" top-4 left-1 text-[40px] font-bold tracking-tighter leading-5 break-words p-4 absolute">
                  Pop
              </div>
              <img src="https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730" class="h-32 w-32 absolute object-center object-cover right-0 bottom-0 rotate-[25deg] translate-x-[18%] -translate-y-[2%]" alt="rockimg"/>
            </a>
            <a class="cursor-pointer bg-purple-400 rounded-md h-56 overflow-hidden relative w-full text-white col-span-2 ">
              <div class=" top-4 left-1 text-[40px] font-bold tracking-tighter leading-5 break-words p-4 absolute">
                  Pop
              </div>
              <img src="https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730" class="h-32 w-32 absolute object-center object-cover right-0 bottom-0 rotate-[25deg] translate-x-[18%] -translate-y-[2%]" alt="rockimg"/>
            </a>
            <a class="cursor-pointer bg-purple-400 rounded-md h-56 overflow-hidden relative w-full text-white col-span-2 ">
              <div class=" top-4 left-1 text-[40px] font-bold tracking-tighter leading-5 break-words p-4 absolute">
                  Pop
              </div>
              <img src="https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730" class="h-32 w-32 absolute object-center object-cover right-0 bottom-0 rotate-[25deg] translate-x-[18%] -translate-y-[2%]" alt="rockimg"/>
            </a>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowIcon from '@/components/icons/ArrowIcon.vue';

export default {
  components: {
    ArrowIcon,
  },
};
</script>
