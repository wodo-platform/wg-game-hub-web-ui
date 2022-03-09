<template>
  <div class="relative bg-wd-secondary-dark py-16 md:py-28">
    <div class="max-w-6xl mx-auto">
      <h2 class="font-black text-4xl md:text-5xl lg:text-7xl text-white text-center w-3/4 m-auto">Team</h2>
      <div class="m-auto px-6 md:px-4 lg:px-4 xl:px-0 mt-16">
        <section class="team-section">
          <div class="relative">
            <CoolLightBox
              :items="matchesData"
              :index="index"
              @close="index = null">
            </CoolLightBox>

            <swiper class="swiper" :options="swiperOption">
              <swiper-slide v-for="(match, imageIndex) in matchesData" :key="imageIndex">
                <div class="relative">
                  <div class="flex flex-col justify-center space-y-6">
                    <img class="object-cover m-auto rounded-full border-8 border-white w-[180px]" :src="require(`~/assets/images/team/${match.image}`)" :alt="match.name">
                    <div>
                      <h5 class="text-center text-bold text-2xl text-white">{{match.name}}</h5>
                      <p class="text-center text-bold text-xl text-white">{{match.position}}</p>
                    </div>
                    <div class="bg-white rounded-xl px-8 py-12">
                      <div class="flex space-x-4 mb-2">
                        <a v-for="social in match.social" :href="social.url" target="_blank">
                          <img :src="require(`~/assets/images/social/${social.icon}.svg`)">
                        </a>
                      </div>
                      <p class="font-inter font-light text-wd-black-dark">
                        {{match.summary}}
                      </p>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>

            <div class="hidden xl:block livesection-button-prev swipper-arrow text-white absolute top-2/4 transform -translate-y-2/4 md:w-68 w-55 lg:h-55 h-11 bg-cover flex items-center justify-center hover:bg-arrow-hover-shape bg-arrow-shape transition-all lg:-left-16 left-3 z-10 cursor-pointer">
              <img class="w-4 h-6" src="@/assets/images/gamehub-slider/previous.svg" alt="">
            </div>
            <div class="hidden xl:block livesection-button-next swipper-arrow text-white absolute top-2/4 transform -translate-y-2/4 md:w-68 w-55 lg:h-55 h-11 flex items-center justify-center hover:bg-arrow-hover-shape bg-arrow-shape bg-cover transition-all lg:-right-16 lg:left-auto right-3 z-10 cursor-pointer">
              <img class="w-4 h-6" src="@/assets/images/gamehub-slider/next.svg" alt="">
            </div>

          </div>
          <div class="relative mt-6">
            <div class="swiper-pagination team-swiper-pagination space-x-4 w-full"></div>
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
          "name": "Bekir Dağ",
          "position": "CEO",
          "image": "bekirdag.jpeg",
          "social": [
            {
              "icon": "linkedin",
              "url": "https://www.linkedin.com/in/bekirdag"
            },
          ],
          "summary": "Bekir has been working as a software developer for the last 18 years, started his own web-shop in 2011. He has worked on tens of different projects of various sizes in different industries. He is strongest in product creation since he had several different roles in the product life cycle",
        },
        {
          "name": "Serhat Tanrıkut",
          "position": "CTO",
          "image": "serhat.jpeg",
          "social": [
            {
              "icon": "linkedin",
              "url": "https://www.linkedin.com/in/serhattanrikut/"
            },
          ],
          "summary": "Serhat has worked for Nokia for 13 years and moved to another company in recent years after his Engineering Manager role. He has been managing international teams delivering complex, high throughput software platforms. He has vast experience in software product development, software architecture, and cloud technologies."
        },
        {
          "name": "Catherine Mckimm",
          "position": "Legal Consultant",
          "image": "catherine.jpeg",
          "social": [
            {
              "icon": "linkedin",
              "url": "https://www.linkedin.com/in/catherine-mckimm-443a7141/"
            },
          ],
          "summary": "Catherine has been a practising lawyer for over 40 years with a particular focus on commercial law and litigation.  Since January 2014 she has been in-house legal counsel for an Australian based software development firm. She specialises in intellectual property and related issues."
        },
        {
          "name": "Salih Genç",
          "position": "Site Reliability & Cloud Infrastructure",
          "image": "salihgenc.jpeg",
          "social": [
            {
              "icon": "linkedin",
              "url": "https://www.linkedin.com/in/salih-genc/"
            },
          ],
          "summary": "Salih has 14 years of total experience as network and cloud infrastructure engineer. He worked with Cisco, Hp/Aruba, Fortinet, and many other vendors. He has vast knowledge of network designing and implementations of network infrastructure, security technologies, and cloud infrastructures."
        },
        {
          "name": "Asst. Prof. Özgür Özmen",
          "position": "Head of Research & Standardization",
          "image": "ozgurozmen.jpeg",
          "social": [
            {
              "icon": "linkedin",
              "url": "https://www.linkedin.com/in/ozgur-ozmen-645bb894/"
            },
          ],
          "summary": "His publication record includes many book chapters, articles, proceedings and abstracts of international dimension covering international trade, entrepreneurship, immigration economy & entrepreneurship, EFQM/Total Quality Management and innovation management."
        },
      ],
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: ".team-swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          '620': {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          '621': {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          '1201': {
            slidesPerView: 3,
            spaceBetween: 60,
          },
        },
        loop: true,
        navigation: {
          nextEl: '.team-section .livesection-button-next',
          prevEl: '.team-section .livesection-button-prev'
        }
      },
      index: null
    }
  }
}
</script>
