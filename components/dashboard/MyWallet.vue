<template>
  <div class="px-4 py-2 bg-white border-wd-gray-6 border-b-8 border-4 rounded-lg">
    <div class="flex flex-col space-y-4 px-2 py-2 items-center justify-between py-4">
      <InfoIcon class="text-wd-gray-6"/>
      <h5 class="text-xl text-wd-black-dark font-bold">My Wallet</h5>
      <p class="font-inter text-wd-black-dark text-sm">In order to create a Banano wallet you need to create an account.</p>
      <button class="uppercase bg-white text-wd-black-dark rounded-md border-b-8 border-4 border-wd-gray-3 px-3 py-1.5 m-auto hover:border-wd-gray-6 ">register</button>
      <p class="font-inter text-wd-black-dark text-xs">Powered by <a href="https://wodo.network/" target="_blank" class="font-bold">Wodo Network</a></p>
    </div>
  </div>
</template>
<script>
import InfoIcon from "@/components/images/InfoIcon.vue";
export default {
  components: {InfoIcon}
}
</script>
