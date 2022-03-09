<template>
  <section>
    <GamesCarousel class="w-80 m-auto top-0"/>
    <div class="pointer-events-none -mt-10 h-full">
      <CarpetImage class="h-full w-full max-w-full"/>
    </div>
  </section>
</template>
<script>
import GamesCarousel from "@/components/homepage/GamesCarousel";
import CarpetImage from "@/components/images/CarpetImage.vue";
export default {
  components: {CarpetImage, GamesCarousel}
}
</script>
