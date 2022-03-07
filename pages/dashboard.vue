<template>
  <div class="relative max-w-7xl mx-auto mt-8">
    <div class="px-4 sm:px-3 md:px-6 xl:px-0">
      <div role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        <div class="col-span-1 sm:col-span-2 lg:col-span-3">
          <Ad/>
          <h1 class="text-wd-black-dark text-3xl font-bold uppercase my-4 md:my-10 ">Games</h1>
          <div class="flex flex-col space-y-4">
            <GameCard/>
            <GameCard/>
            <GameCard/>
          </div>
        </div>
        <div class="col-span-1">
          <MyWallet/>
          <WalletBalance class="mt-4"/>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import Ad from "@/components/dashboard/Ad.vue";
import GameCard from "@/components/dashboard/GameCard.vue";
import MyWallet from "@/components/dashboard/MyWallet.vue";
import WalletBalance from "@/components/dashboard/WalletBalance.vue";
export default {
  components: {WalletBalance, MyWallet, GameCard, Ad}
}
</script>
