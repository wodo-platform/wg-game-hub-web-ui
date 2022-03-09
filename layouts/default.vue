<template>
  <div class="bg-wd-main-background bg-game-pattern min-h-screen">
    <Header />
    <div class="">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/partials/Header";
import Footer from "@/components/partials/Footer";
export default {
  components: {Footer, Header}
}
</script>
