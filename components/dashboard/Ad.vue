<template>
  <WgBlock bg_color="wd-secondary" border_color="wd-secondary-light" slot_class="flex flex-col lg:flex-row space-y-4 lg:space-y-0 md:space-x-4 items-center">
    <div class="w-full">
      <img src="@/assets/images/tmp/ad_game.jpeg" class="w-full rounded-lg" alt="ad image">
    </div>
    <div class="text-white w-full">
      <h4 class="font-bold text-2xl">The First Retro Gaming Playground Competitions!</h4>
      <p class="text-sm mt-2 font-inter">A small description about the first section explaining about the platform.</p>
    </div>
  </WgBlock>

</template>
<script>
import WgBlock from "@/components/partials/WgBlock.vue";
export default {
  components: {WgBlock}
}
</script>