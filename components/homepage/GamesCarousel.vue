<template>
  <section class="live-section">
    <div class="container relative">

      <CoolLightBox
        :items="matchesData"
        :index="index"
        @close="index = null">
      </CoolLightBox>

      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(match, imageIndex) in matchesData" :key="imageIndex">
          <div class="relative h-64">
            <h3 class="text-wd-yellow text-lg font-extrabold text-center m-auto mb-6 fancy_text" :title="match.title">{{ match.title }}</h3>
            <img class="object-cover w-52 h-52 m-auto" :src="require(`~/assets/images/slider/${match.img}`)" :alt="match.title">
            <div class="absolute left-1/2 bottom-0 transform -translate-x-2/4 bg-no-repeat bg-center w-full flex justify-center items-center">
              <h3 class="text-wd-yellow font-extrabold fancy_text" :title="match.footerTitle">{{ match.footerTitle }}</h3>
            </div>
          </div>
        </swiper-slide>
      </swiper>

      <div class="livesection-button-prev swipper-arrow text-white absolute top-2/4 transform -translate-y-2/4 md:w-68 w-55 md:h-55 h-11 bg-cover flex items-center justify-center hover:bg-arrow-hover-shape bg-arrow-shape transition-all 2xl:-left-28 left-3 z-10 cursor-pointer">
        <img class="w-4 h-6" src="@/assets/images/slider/nav-arrow2.svg" alt="">
      </div>
      <div class="livesection-button-next swipper-arrow text-white absolute top-2/4 transform -translate-y-2/4 md:w-68 w-55 md:h-55 h-11 flex items-center justify-center hover:bg-arrow-hover-shape bg-arrow-shape bg-cover transition-all 2xl:-right-28 2xl:left-auto right-3 z-10 cursor-pointer">
        <img class="w-4 h-6" src="@/assets/images/slider/nav-arrow1.svg" alt="">
      </div>
    </div>
  </section>
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
          "title": "bluemage sale",
          "footerTitle": "bluemage sale",
          "img": "blue_mage.png",
        },
        {
          "title": "retro sale",
          "footerTitle": "upcoming",
          "img": "80s_token_sale.png",
        },
        {
          "title": "necromancer sale",
          "footerTitle": "upcoming",
          "img": "necromancer_sale.png",
        },
        {
          "title": "samurai sale",
          "footerTitle": "upcoming",
          "img": "token_sale.png",
        },
      ],
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: false,
        loop: true,
        navigation: {
          nextEl: '.live-section .livesection-button-next',
          prevEl: '.live-section .livesection-button-prev'
        }
      },
      index: null
    }
  }
}
</script>
