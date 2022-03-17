<!-- here we list all possible dynamic classes

border-b-[6px]

bg-white
bg-wd-main-background
bg-wd-background-red
bg-wd-primary
bg-wd-primary-dark
bg-wd-primary-light
bg-wd-black-dark
bg-wd-gray-2
bg-wd-gray-3
bg-wd-gray-5
bg-wd-gray-6
bg-wd-secondary
bg-wd-secondary-dark
bg-wd-secondary-light
bg-wd-pink-light
bg-wd-yellow
bg-wd-yellow-light
bg-wd-green
bg-wd-green-light
bg-wd-green-light
bg-wd-turquoise


border-white
border-wd-main-background
border-wd-background-red
border-wd-primary
border-wd-primary-dark
border-wd-primary-light
border-wd-black-dark
border-wd-gray-2
border-wd-gray-3
border-wd-gray-5
border-wd-gray-6
border-wd-secondary
border-wd-secondary-dark
border-wd-secondary-light
border-wd-pink-light
border-wd-yellow
border-wd-yellow-light
border-wd-green
border-wd-green-light
border-wd-green-light
border-wd-turquoise
-->


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
