<template>
  <div class="relative bg-wd-background-red pb-20">
    <div class="max-w-6xl mx-auto">
      <h2 class="font-black text-4xl md:text-5xl lg:text-7xl text-white text-center">Our Platform</h2>
      <p class="font-inter text-white text-center text-md md:text-xl mt-3">Features</p>
      <Tabs/>
      <Video/>
      <MultiplayerGames/>
    </div>
  </div>
</template>


<script>
import Tabs from "@/components/homepage/our-platform/Tabs.vue";
import Video from "@/components/homepage/our-platform/video.vue";
import MultiplayerGames from "@/components/homepage/our-platform/MultiplayerGames.vue";
export default {
  components: {MultiplayerGames, Video, Tabs}
}
</script>
