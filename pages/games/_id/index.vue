<template>
  <div class="relative max-w-7xl mx-auto mt-8">
    <WgBlock bg_color="wd-primary" border_color="wd-primary-dark" slot_class="flex flex-col lg:flex-row justify-between text-white items-center" class="mx-4 md:mx-8 xl:mx-0">
      <div class="flex justify-start w-full items-center space-x-6">
        <nuxt-link to="/">
          <WgButton bg_color="wd-primary" border_color="white" hover_border_color="white">
            <BackIcon class="w-6 h-6"/>
          </WgButton>
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
        <div class="flex space-x-2 items-center border-l border-wd-gray-2 pl-4">
          <OnlinePlayersIcon class="w-6 h-6 text-white"/>
          <div class="flex flex-col">
            <span class="font-inter text-xs text-wd-gray-5 uppercase">Online PLAYERS</span>
            <span class="text-md uppercase">1,392 PLAYERS</span>
          </div>
        </div>
      </div>
    </WgBlock>
    <div class="relative max-w-6xl mx-auto mt-8 ">
      <div class="mx-4 md:mx-8 xl:mx-0 items-center">
        <ul role="list" class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
          <li v-for="x in 4">
            <WgBlock border_color="wd-primary-dark" slot_class="text-center xl:text-left">
              <div class="space-y-2 xl:space-y-4">
                <div class="aspect-w-3.06 aspect-h-1">
                  <img class="mx-auto rounded-lg w-full" src="@/assets/images/tmp/game.png" alt="game">
                </div>
                <div class="space-y-2 flex items-center justify-between items-center">
                  <h3 class="text-lg font-bold">RESTRICTED RULES</h3>
                  <p class="text-lg uppercase">free</p>
                </div>
                <button class="m-auto w-full" >
                  <WgButton bg_color="wd-secondary" border_color="wd-secondary-light" hover_border_color="wd-secondary">
                    <span class="uppercase text-white">start playing</span>
                  </WgButton>
                </button>
                <div class="flex flex-col text-left">
                  <span class="text-xs font-inter uppercase">game rules</span>
                  <ul class="text-xs font-inter text-wd-gray-5 list-disc ml-4 ">
                    <li>Bag on the board (in-the-count, boarder, or woody)</li>
                    <li>Bag in-the-hole (cornhole): 3 points per bag</li>
                    <li>The objective is to earn the target number of points.</li>
                  </ul>
                </div>
              </div>
            </WgBlock>
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
import WgBlock from "@/components/partials/WgBlock.vue";
import WgButton from "@/components/partials/WgButton.vue";

export default {
  name: 'GamePage',
  components: {
    WgButton,
    WgBlock,
    OnlinePlayersIcon,
    GameOptionsIcon,
    BackIcon
  }
}
</script>
