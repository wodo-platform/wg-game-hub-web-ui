<template>
  <WgBlock slot_class="flex flex-col space-y-8 justify-between">
    <WalletBalanceCard/>
    <WalletBalanceCard/>
  </WgBlock>
</template>
<script>
import WalletBalanceCard from "@/components/dashboard/WalletBalanceCard.vue";
import WgBlock from "@/components/partials/WgBlock.vue";
export default {
  components: {WgBlock, WalletBalanceCard}
}
</script>
