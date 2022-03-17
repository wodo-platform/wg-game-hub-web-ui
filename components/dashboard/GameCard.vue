<template>
  <WgBlock border_color="wd-gray-6" slot_class="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-center justify-between">
    <div class="w-full lg:w-1/3">
      <img src="@/assets/images/tmp/snakeio.jpeg" class="w-full rounded-lg" alt="game image">
    </div>
    <div class="text-wd-black-dark w-full lg:w-3/4 space-y-4">
      <h4 class="font-bold text-xl">SUPER GAME</h4>
      <p class="text-sm mt-2 font-inter text-wd-gray-2">This game will give you what you are looking for</p>
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
      <button @click.prevent="confirmStartGame" class="m-auto">
        <WgButton bg_color="wd-secondary" border_color="wd-secondary-light" hover_border_color="wd-secondary">
          <span class="uppercase text-white">play</span>
        </WgButton>
      </button>
    </div>
  </WgBlock>
</template>
<script>
import GameOptionsIcon from "@/components/images/GameOptionsIcon.vue";
import OnlinePlayersIcon from "@/components/images/OnlinePlayersIcon.vue";
import WgBlock from "@/components/partials/WgBlock.vue";
import WgButton from "@/components/partials/WgButton.vue";

export default {
  components: {WgButton, WgBlock, OnlinePlayersIcon, GameOptionsIcon},
  methods: {
    confirmStartGame() {
      this.$emit('start', true)
    }
  }
}
</script>
