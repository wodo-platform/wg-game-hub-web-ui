<template>
  <div class="px-4 py-2 bg-white border-wd-gray-6 border-b-8 border-4 rounded-lg">
    <div class="flex flex-col space-y-2 px-2 py-2 justify-between py-4">
      <WalletBalanceCard/>
      <WalletBalanceCard/>
    </div>
  </div>
</template>
<script>
import WalletBalanceCard from "@/components/dashboard/WalletBalanceCard.vue";
export default {
  components: {WalletBalanceCard}
}
</script>
