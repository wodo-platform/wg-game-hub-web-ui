<template>
  <WgBlock slot_class="flex flex-col space-y-6 items-center justify-between">
    <InfoIcon class="text-wd-gray-6"/>
    <h5 class="text-xl text-wd-black-dark font-bold">My Wallet</h5>
    <p class="font-inter text-wd-gray-2 text-sm text-center">In order to create a Banano wallet you need to create an account.</p>
    <button class="m-auto">
      <WgButton>
        <span class="uppercase text-wd-black-dark">register</span>
      </WgButton>
    </button>
    <p class="font-inter text-wd-gray-2 text-xs">Powered by <a href="https://wodo.network/" target="_blank" class="font-bold">Wodo Network</a></p>
  </WgBlock>
</template>
<script>
import InfoIcon from "@/components/images/InfoIcon.vue";
import WgBlock from "@/components/partials/WgBlock.vue";
import WgButton from "@/components/partials/WgButton.vue";
export default {
  components: {WgButton, WgBlock, InfoIcon}
}
</script>
