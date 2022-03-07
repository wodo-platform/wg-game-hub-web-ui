<template>
  <div class="mt-8 mx-2 xl:mx-0">
    <div class="flex justify-center bg-wd-secondary-dark rounded-lg w-full space-x-1 p-1">
      <button :class="{ 'bg-wd-background-red': tab !== '1' }" class="relative font-extrabold p-1 rounded-lg transition duration-500 w-full " @click="tab = '1'">
        <span class="text-white duration-150 ease-in-out hidden sm:block">Play</span>
        <GameIcon class="w-8 h-5 sm:hidden m-auto"/>
      </button>
      <button :class="{ 'bg-wd-background-red': tab !== '2' }" class="font-extrabold p-1 rounded-lg transition duration-500 w-full" @click="tab = '2'">
        <span class="text-white duration-150 ease-in-out hidden sm:block">Develop</span>
        <CodeIcon class="w-8 h-5 sm:hidden m-auto"/>
      </button>
      <button :class="{ 'bg-wd-background-red': tab !== '3' }" class="font-extrabold p-1 rounded-lg transition duration-500 w-full" @click="tab = '3'">
        <span class="text-white duration-150 ease-in-out hidden sm:block">Launchpad</span>
        <RocketIcon class="w-8 h-5 sm:hidden m-auto text-white"/>
      </button>
      <button :class="{ 'bg-wd-background-red': tab !== '4' }" class="font-extrabold p-1 rounded-lg transition duration-500 w-full" @click="tab = '4'">
        <span class="text-white duration-150 ease-in-out hidden sm:block">Gamestore</span>
        <BasketIcon class="w-8 h-5 sm:hidden m-auto"/>
      </button>
      <button :class="{ 'bg-wd-background-red': tab !== '5' }" class="font-extrabold p-1 rounded-lg transition duration-500 w-full" @click="tab = '5'">
        <span class="text-white duration-150 ease-in-out hidden sm:block">Marketplace</span>
        <StoreIcon class="w-8 h-5 sm:hidden m-auto"/>
      </button>
      <button :class="{ 'bg-wd-background-red': tab !== '6' }" class="font-extrabold p-1 rounded-lg transition duration-500 w-full" @click="tab = '6'">
        <span class="text-white duration-150 ease-in-out hidden sm:block">Wodolet</span>
        <WalletIcon class="w-8 h-5 sm:hidden m-auto"/>
      </button>
    </div>

    <div class="relative flex flex-col mt-4 md:mt-16">
      <transition
        enter-active-class="transition ease-in-out duration-500 transform order-first"
        enter-from-class="opacity-0 scale-98"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition ease-out duration-300 transform absolute"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-98"
      >
        <div class="w-full flex flex-col md:flex-row items-center" v-show="tab === '1'">
          <div class="w-1/2 md:w-1/4">
            <div class="flex w-52 h-52 m-auto p-8 bg-white bg-opacity-30 rounded-full">
              <JoystickImage/>
            </div>
          </div>
          <div class="relative px-6 w-full md:w-3/4 text-center md:text-left mt-4 md:mt-0">
            <h4 class="mb-2 text-2xl font-extrabold text-white">Play - Wodo Games</h4>
            <p class="text-lg font-inter text-white">Sign up to Wodo Gaming Portal, play online Wodo games with other community members and earn instant cryptocurrencies and NFTs during your game play. Plenty of games with cryptocurrency and NFT capabilities are hosted on the wodo game fleet. As a community member, you can socialize, attend tournaments, play multiplayer wodo games. Based on your activity, engagement score on the wodo gaming community, you can collect air-drops and be eligible for intensive and staking programs.</p>
          </div>
        </div>
      </transition>

      <transition
        enter-active-class="transition ease-in-out duration-500 transform order-first"
        enter-from-class="opacity-0 scale-98"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition ease-out duration-300 transform absolute"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-98"
      >
        <div class="w-full flex flex-col md:flex-row items-center" v-show="tab === '2'">
          <div class="w-1/2 md:w-1/4">
            <div class="flex w-52 h-52 m-auto p-8 bg-white bg-opacity-30 rounded-full">
              <DesignerImage/>
            </div>
          </div>
          <div class="relative px-6 w-full md:w-3/4 text-center md:text-left mt-4 md:mt-0">
            <h4 class="mb-2 text-2xl font-extrabold text-white">Develop - Wodo Gaming APIs - SDK</h4>
            <p class="text-lg font-inter text-white">Wodo Gaming offers an integrated platform with scalable services, APIs, and a software development kit (SDK). The platform empowers game developers to use simple, interoperable blockchain APIs, NFT APIs, and metaverse APIs for accelerating the game development phases in a unified and secure way. The SDK and client libraries simplify integration between gaming projects and the Wodo Gaming APIs so that game developers can rapidly enrich their games with several use cases such as blockchain payment cases, NFT generation as in-game assets.</p>
          </div>
        </div>
      </transition>

      <transition
        enter-active-class="transition ease-in-out duration-500 transform order-first"
        enter-from-class="opacity-0 scale-98"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition ease-out duration-300 transform absolute"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-98"
      >
        <div class="w-full flex flex-col md:flex-row items-center" v-show="tab === '3'">
          <div class="w-1/2 md:w-1/4">
            <div class="flex w-52 h-52 m-auto p-8 bg-white bg-opacity-30 rounded-full">
              <RocketImage/>
            </div>
          </div>
          <div class="relative px-6 w-full md:w-3/4 text-center md:text-left mt-4 md:mt-0">
            <h4 class="mb-2 text-2xl font-extrabold text-white">Launchpad - Crypto-kick-start your game</h4>
            <p class="text-lg font-inter text-white">Our goal is to help the game developers to raise enough capital to crypto-kick-start their projects on a platform providing services in many aspects of the game development tasks such as game store, marketplace, metaverse integrations, crypto-payment integrations, hosting for scalability and a complete set of interoperability tools for several different blockchain technologies.</p>
          </div>
        </div>
      </transition>

      <transition
        enter-active-class="transition ease-in-out duration-500 transform order-first"
        enter-from-class="opacity-0 scale-98"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition ease-out duration-300 transform absolute"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-98"
      >
        <div class="w-full flex flex-col md:flex-row items-center" v-show="tab === '4'">
          <div class="w-1/2 md:w-1/4">
            <div class="flex w-52 h-52 m-auto p-8 bg-white bg-opacity-30 rounded-full">
              <WinImage/>
            </div>
          </div>
          <div class="relative px-6 w-full md:w-3/4 text-center md:text-left mt-4 md:mt-0">
            <h4 class="mb-2 text-2xl font-extrabold text-white">Publish - Game Store</h4>
            <p class="text-lg font-inter text-white">Publish and advertise your new-generation games on the Wodo Game Store. You can reach out to Wodo Gaming community members and onboard them on your game without dealing with the hassle of the crypto world such as setting up wallets etc. The game store provides detailed search capabilities and insights to find, compare and analyze games hosted on the wodo game fleet as well as in the gaming industry.</p>
          </div>
        </div>
      </transition>

      <transition
        enter-active-class="transition ease-in-out duration-500 transform order-first"
        enter-from-class="opacity-0 scale-98"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition ease-out duration-300 transform absolute"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-98"
      >
        <div class="w-full flex flex-col md:flex-row items-center" v-show="tab === '5'">
          <div class="w-1/2 md:w-1/4">
            <div class="flex w-52 h-52 m-auto p-8 bg-white bg-opacity-30 rounded-full">
              <MarketplaceImage/>
            </div>
          </div>
          <div class="relative px-6 w-full md:w-3/4 text-center md:text-left mt-4 md:mt-0">
            <h4 class="mb-2 text-2xl font-extrabold text-white">Trade - Marketplace</h4>
            <p class="text-lg font-inter text-white">Design unique NFT assets, skins, and interoperable Metaverse components and sell/buy them in the Wodo Gaming Marketplace. Wodo Gaming provides detailed analytic data and insights so that community members can compare prices and trends over cross marketplace integration capabilities.</p>
          </div>
        </div>
      </transition>

      <transition
        enter-active-class="transition ease-in-out duration-500 transform order-first"
        enter-from-class="opacity-0 scale-98"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition ease-out duration-300 transform absolute"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-98"
      >
        <div class="w-full flex flex-col md:flex-row items-center" v-show="tab === '6'">
          <div class="w-1/2 md:w-1/4">
            <div class="flex w-52 h-52 m-auto p-8 bg-white bg-opacity-30 rounded-full">
              <WalletImage class="w-3/4 m-auto"/>
            </div>
          </div>
          <div class="relative px-6 w-full md:w-3/4 text-center md:text-left mt-4 md:mt-0">
            <h4 class="mb-2 text-2xl font-extrabold text-white">Wodo Wallet - Wodolet</h4>
            <p class="text-lg font-inter text-white">Manage your crypto assets and NFT items in one single, unified wallet. Wodolet is seamlessly integrated with all solutions of the wodo ecosystem. It connects you to your desired game instantly</p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import GameIcon from "@/components/images/GameIcon.vue";
import CodeIcon from "@/components/images/CodeIcon.vue";
import RocketIcon from "@/components/images/RocketIcon.vue";
import BasketIcon from "@/components/images/basketIcon.vue";
import StoreIcon from "@/components/images/StoreIcon.vue";
import WalletIcon from "@/components/images/WalletIcon.vue";
import JoystickImage from "@/components/images/JoystickImage.vue";
import DesignerImage from "@/components/images/DesignerImage.vue";
import RocketImage from "@/components/images/RocketImage.vue";
import WinImage from "@/components/images/WinImage.vue";
import MarketplaceImage from "@/components/images/MarketplaceImage.vue";
import WalletImage from "@/components/images/WalletImage.vue";
export default {
  name: 'Tabs',
  components: {
    WalletImage,
    MarketplaceImage,
    WinImage,
    RocketImage,
    DesignerImage, JoystickImage, WalletIcon, StoreIcon, BasketIcon, RocketIcon, CodeIcon, GameIcon},
  data: function () {
    return {
      tab: '1'
    }
  },
}
</script>
