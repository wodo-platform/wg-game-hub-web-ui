<template>
  <div class="relative max-w-7xl mx-auto mt-8">
    <div class="flex flex-col lg:flex-row justify-between bg-wd-primary text-white rounded-lg px-6 py-8 border-wd-primary-dark border-b-8 border-4 mx-4 md:mx-8 xl:mx-0 items-center">
      <div class="flex justify-start w-full items-center space-x-6">
        <nuxt-link to="/">
          <div class="px-4 py-2 border-white border-b-8 border-4 rounded-lg">
            <BackIcon class="w-4 h-4"/>
          </div>
        </nuxt-link>
        <div class="flex flex-col space-y-2">
          <span class="font-extrabold text-3xl">SNAKE IO</span>
          <span class="text-md font-inter">A small description about the game.</span>
        </div>
      </div>
      <div class="flex justify-center lg:justify-end mt-4 lg:mt-0 w-full space-x-4">
        <div class="flex space-x-2 items-center">
          <GameOptionsIcon class="w-6 h-6 text-white"/>
          <div class="flex flex-col ">
            <span class="font-inter text-xs text-wd-gray-5 uppercase">GAME OPTIONS</span>
            <span class="text-md uppercase">6 OPTIONS</span>
          </div>
        </div>
        <div class="flex space-x-2 items-center border-l border-wd-gray-2 pl-2">
          <OnlinePlayersIcon class="w-6 h-6 text-white"/>
          <div class="flex flex-col ">
            <span class="font-inter text-xs text-wd-gray-5 uppercase">Online PLAYERS</span>
            <span class="text-md uppercase">1,392 PLAYERS</span>
          </div>
        </div>
      </div>
    </div>
    <div class="relative max-w-6xl mx-auto mt-8 ">
      <div class="mx-4 md:mx-8 xl:mx-0 items-center">
        <ul role="list" class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
          <li class="py-6 px-6 bg-white border-wd-primary-dark border-b-8 border-4 text-center rounded-lg xl:px-6 xl:text-left" v-for="x in 4">
            <div class="space-y-2 xl:space-y-4">
              <div class="aspect-w-3.06 aspect-h-1">
                <img class="mx-auto rounded-lg" src="@/assets/images/tmp/game.png" alt="game">
              </div>
              <div class="space-y-2 xl:flex xl:items-center xl:justify-between items-center">
                <h3 class="text-lg font-bold">RESTRICTED RULES</h3>
                <p class="text-lg uppercase">free</p>
              </div>
              <button class="uppercase bg-wd-secondary text-white rounded-md border-b-8 border-4 border-wd-secondary-light px-3 py-1.5 m-auto hover:border-wd-secondary w-full" >start playing</button>
              <div class="flex flex-col text-left">
                <span class="text-md uppercase">game rules</span>
                <ul class="text-xs font-inter text-wd-gray-5 list-disc ml-4 ">
                  <li>Bag on the board (in-the-count, boarder, or woody)</li>
                  <li>Bag in-the-hole (cornhole): 3 points per bag</li>
                  <li>The objective is to earn the target number of points.</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BackIcon from "@/components/images/BackIcon.vue";
import GameOptionsIcon from "@/components/images/GameOptionsIcon.vue";
import OnlinePlayersIcon from "@/components/images/OnlinePlayersIcon.vue";

export default {
  name: 'GamePage',
  components: {
    OnlinePlayersIcon,
    GameOptionsIcon,
    BackIcon
  }
}
</script>
