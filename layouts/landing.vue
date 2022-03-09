<template>
  <div class="bg-wd-main-background">
    <LandingNavigation/>
    <div class="">
      <Nuxt />
    </div>
  </div>
</template>
<script>
import Header from "@/components/partials/Header";
import Footer from "@/components/partials/Footer";
import LandingNavigation from "@/components/partials/LandingNavigation.vue";
export default {
  components: {LandingNavigation, Footer, Header}
}
</script>
