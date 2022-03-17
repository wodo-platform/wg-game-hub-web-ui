<template>
  <div>
    <h5 class="text-xs font-light text-wd-gray-5 uppercase mb-1">BANANO BALANCE</h5>
    <div class="relative flex justify-between w-full items-center space-x-3">
      <div>
        <BananoIcon class="rounded-lg bg-wd-pink-light text-wd-secondary w-10 h-10 p-1"/>
      </div>
      <div class="w-full overflow-hidden text-ellipsis text-wd-gray-5">
        <span class="text-md font-bold text-wd-black-dark">1576</span>
        <span class="text-xs font-inter">1hUjsljdfdjkkLi847bnsu1hUjsljdfdjkkLi847bnsu</span>
      </div>
      <div>
        <CopyIcon class="text-wd-gray-5 cursor-pointer"/>
      </div>
    </div>
  </div>
</template>
<script>
import BananoIcon from "@/components/images/BananoIcon.vue";
import CopyIcon from "@/components/images/CopyIcon.vue";
export default {
  components: {CopyIcon, BananoIcon}
}
</script>
