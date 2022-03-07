<template>
  <div class="relative bg-wd-background-red py-20">
    <div class="max-w-5xl mx-auto">
      <h2 class="font-black text-4xl md:text-5xl lg:text-7xl text-white text-center w-3/4 m-auto">Game Hub</h2>
      <div class="m-auto px-6 md:px-4 lg:p-0 mt-16">
        <section class="gamehub-section">
          <div class="relative">
            <CoolLightBox
              :items="matchesData"
              :index="index"
              @close="index = null">
            </CoolLightBox>

            <swiper class="swiper" :options="swiperOption">
              <swiper-slide v-for="(match, imageIndex) in matchesData" :key="imageIndex">
                <div class="relative">
                  <img class="object-cover m-auto rounded-lg" :src="require(`~/assets/images/gamehub-slider/${match.img}`)" :alt="match.alt">
                </div>
              </swiper-slide>
            </swiper>

            <div class="hidden md:block livesection-button-prev swipper-arrow text-white absolute top-2/4 transform -translate-y-2/4 md:w-68 w-55 md:h-55 h-11 bg-cover flex items-center justify-center hover:bg-arrow-hover-shape bg-arrow-shape transition-all 2xl:-left-28 left-3 z-10 cursor-pointer">
              <img class="w-4 h-6" src="@/assets/images/gamehub-slider/previous.svg" alt="">
            </div>
            <div class="hidden md:block livesection-button-next swipper-arrow text-white absolute top-2/4 transform -translate-y-2/4 md:w-68 w-55 md:h-55 h-11 flex items-center justify-center hover:bg-arrow-hover-shape bg-arrow-shape bg-cover transition-all 2xl:-right-28 2xl:left-auto right-3 z-10 cursor-pointer">
              <img class="w-4 h-6" src="@/assets/images/gamehub-slider/next.svg" alt="">
            </div>

          </div>
          <div class="relative mt-6">
            <div class="swiper-pagination space-x-4 w-full"></div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import '@/assets/css/swiper.css';

export default {

  components: {
    Swiper,
    SwiperSlide,
    CoolLightBox
  },
  data() {
    return {
      matchesData: [
        {
          "alt": "game hub slide 1",
          "img": "slide1.png",
        },
        {
          "alt": "game hub slide 2",
          "img": "slide2.png",
        },
        {
          "alt": "game hub slide 3",
          "img": "slide3.png",
        },
        {
          "alt": "game hub slide 4",
          "img": "slide4.png",
        },
        {
          "alt": "game hub slide 5",
          "img": "slide5.png",
        },
        {
          "alt": "game hub slide 6",
          "img": "slide6.png",
        },
        {
          "alt": "game hub slide 7",
          "img": "slide7.png",
        },
        {
          "alt": "game hub slide 8",
          "img": "slide8.png",
        },
      ],
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        loop: true,
        navigation: {
          nextEl: '.gamehub-section .livesection-button-next',
          prevEl: '.gamehub-section .livesection-button-prev'
        }
      },
      index: null
    }
  }
}
</script>
