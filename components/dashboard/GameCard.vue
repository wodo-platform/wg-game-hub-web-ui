<template>
  <div class="px-4 py-2 bg-white border-wd-gray-6 border-b-8 border-4 rounded-lg">
    <div class="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 px-2 py-2 items-center justify-between">
      <div class="w-full lg:w-1/3">
        <img src="@/assets/images/tmp/snakeio.jpeg" class="w-full rounded-lg" alt="game image">
      </div>
      <div class="text-wd-black-dark w-full lg:w-3/4">
        <h4 class="font-extrabold text-xl">SUPER GAME</h4>
        <p class="text-sm mt-2 font-inter">A small description about the first section explaining about the platform.</p>
        <div class="flex justify-center lg:justify-start pt-2 lg:pt-0 w-full space-x-4">
          <div class="flex space-x-2 items-center">
            <GameOptionsIcon class="w-6 h-6 text-wd-background-red"/>
            <div class="flex flex-col ">
              <span class="font-inter text-xs text-wd-gray-5 uppercase">GAME OPTIONS</span>
              <span class="text-md uppercase">6 OPTIONS</span>
            </div>
          </div>
          <div class="flex space-x-2 items-center border-l border-wd-gray-2 pl-2">
            <OnlinePlayersIcon class="w-6 h-6 text-wd-background-red"/>
            <div class="flex flex-col ">
              <span class="font-inter text-xs text-wd-gray-5 uppercase">Online PLAYERS</span>
              <span class="text-md uppercase">1,392 PLAYERS</span>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/4 text-center lg:text-right ">
        <nuxt-link to="/games/1" class="uppercase bg-wd-secondary text-white rounded-md border-b-8 border-4 border-wd-secondary-light px-3 py-1.5 m-auto hover:border-wd-secondary ">play</nuxt-link>
      </div>

    </div>
  </div>
</template>
<script>
import GameOptionsIcon from "@/components/images/GameOptionsIcon.vue";
import OnlinePlayersIcon from "@/components/images/OnlinePlayersIcon.vue";
export default {
  components: {OnlinePlayersIcon, GameOptionsIcon}
}
</script>
