<template>
  <div class="relative max-w-7xl mx-auto mt-8">
    <div class="px-4 sm:px-3 md:px-6 xl:px-0">
      <div role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        <div class="col-span-1 sm:col-span-2 lg:col-span-3">
          <Ad/>
          <h1 class="text-wd-black-dark text-3xl font-bold uppercase my-4 md:my-10 ">Games</h1>
          <div class="flex flex-col space-y-4">
            <GameCard @start="confirmStartGame"/>
            <GameCard @start="confirmStartGame"/>
            <GameCard @start="confirmStartGame"/>
          </div>
        </div>
        <div class="col-span-1">
          <MyWallet/>
          <WalletBalance class="mt-4"/>
        </div>
      </div>
    </div>
    <simple-modal v-if="showStartGameModal">
      Play Game
      <template v-slot:subtitle>
        <div class="aspect-w-3.06 aspect-h-1 mb-2">
          <img src="@/assets/images/modals/confirmStartGame.png" alt="confirmStartGame image">
        </div>
        <p class="font-bold text-lg mb-2">A small description about the first section.</p>
        <p>A small description about the first section explaining about the platform.</p>
      </template>
      <template v-slot:buttons>
        <div class="flex justify-between">
          <button @click.prevent="showStartGameModal = false" type="button" class="uppercase bg-white rounded-md border-b-8 border-4 border-wd-gray-2 px-3 py-1.5 w-auto m-auto hover:border-wd-secondary">
            Cancel
          </button>
          <button @click.prevent="startGame"  class="uppercase bg-wd-secondary text-white rounded-md border-b-8 border-4 border-wd-secondary-light px-3 py-1.5 w-auto m-auto hover:border-wd-secondary" >
            Start
          </button>
        </div>
      </template>
    </simple-modal>
  </div>
</template>
<script>
import Ad from "@/components/dashboard/Ad.vue";
import GameCard from "@/components/dashboard/GameCard.vue";
import MyWallet from "@/components/dashboard/MyWallet.vue";
import WalletBalance from "@/components/dashboard/WalletBalance.vue";
import SimpleModal from "@/components/modals/simple-modal.vue";
export default {
  components: {SimpleModal, WalletBalance, MyWallet, GameCard, Ad},
  data() {
    return {
      showStartGameModal: false,
    }
  },
  methods: {
    confirmStartGame() {
      this.showStartGameModal = true
    },
    startGame() {
      console.log('game started')
      this.$router.push('/games/1')
    }
  }
}
</script>
