<template>
  <div class="relative bg-white">
    <div class="px-1 py-2 sm:px-3 md:px-6 md:justify-start md:space-x-10 lg:max-w-7xl m-auto">
      <div class="flex flex-row items-center justify-between">
        <div class="hidden md:block">
          <nav class="md:flex md:space-x-6">
            <a href="https://docs.wodo.io/" type="button" class="font-sans text-wd-black-dark group bg-white flex space-x-1 items-center text-xs hover:text-wd-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false">
              <RocketIcon class="w-4 h-4"/>
              <span class="uppercase">DOCUMENTATION</span>
            </a>
            <a href="https://docs.wodo.io/wodo-gaming/whitepaper" type="button" class="text-wd-black-dark group bg-white flex space-x-1 items-center text-xs hover:text-wd-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false">
              <RocketIcon class="w-4 h-4"/>
              <span class="uppercase">WHITE PAPER</span>
            </a>
            <a href="https://docs.wodo.io/wodo-gaming" type="button" class="text-wd-black-dark group bg-white flex space-x-1 items-center text-xs hover:text-wd-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false">
              <RocketIcon class="w-4 h-4"/>
              <span class="uppercase">ABOUT</span>
            </a>
            <a href="https://docs.wodo.io/wodo-gaming/meet-the-team" type="button" class="text-wd-black-dark group bg-white flex space-x-1 items-center text-xs hover:text-wd-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false">
              <RocketIcon class="w-4 h-4"/>
              <span class="uppercase">TEAM</span>
            </a>
            <a @click.prevent="showWhitelistModal = true" type="button" class="text-wd-black-dark group bg-white flex space-x-1 items-center text-xs hover:text-wd-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false">
              <RocketIcon class="w-4 h-4"/>
              <span class="uppercase">WHITELIST</span>
            </a>
          </nav>
        </div>
        <div class="md:hidden">
          <button class="text-white bg-wd-primary border-wd-black-dark border-2 rounded-lg text-xs px-4 py-2 absolute top-0 left-0 m-0.5 uppercase">get whitelisted</button>
        </div>
        <div class="flex items-center justify-between text-center space-x-1.5">
          <a href="#">
            <NotificationIcon class="w-6 h-6 hover:opacity-80"/>
          </a>
          <a href="https://twitter.com/wodoio" target="_blank">
            <TwitterIcon class="w-6 h-6 hover:opacity-80"/>
          </a>
          <a href="https://github.com/wodo-platform" target="_blank">
            <github-icon class="w-6 h-6 hover:opacity-80"/>
          </a>
          <a href="https://discord.gg/fbyns8Egpb" target="_blank">
            <DiscordIcon class="w-6 h-6 hover:opacity-80"/>
          </a>
          <a href="https://www.reddit.com/r/wodoio" target="_blank">
            <RedditIcon class="w-6 h-6 hover:opacity-80"/>
          </a>
          <a href="https://t.me/wodoio" target="_blank">
            <TelegramIcon class="w-6 h-6 hover:opacity-80"/>
          </a>
          <button @click.prevent="showRightMenu=true" type="button" class="md:hidden ">
            <span class="sr-only text-gray-300 ">Close menu</span>
            <MenuIcon class="ml-2 w-6 h-6"/>
          </button>
        </div>
      </div>
    </div>

    <!--
      Mobile menu, show/hide based on mobile menu state.
    -->
    <div class="fixed top-0 right-0 opacity-90 w-3/4 h-screen sm:w-1/2 bg-black  md:hidden transform ease-in-out transition-all duration-300" :class="showRightMenu ? 'translate-x-0' : 'translate-x-full'">
      <div class="ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
        <div class="pt-5 pb-6 px-5">
          <div class="flex items-center justify-between">
            <div>
              <LogoGrayIcon class="h-8 w-auto" alt="Wodo Gaming Logo"/>
            </div>
            <div class="-mr-2">
              <button @click.prevent="showRightMenu=false" type="button" class="p-2 inline-flex items-center justify-center text-gray-400">
                <span class="sr-only text-gray-300">Close menu</span>
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div class="mt-6">
            <nav class="grid gap-6 divide-gray-200 ">
              <a href="https://docs.wodo.io/" class="-m-3 p-3 rounded-lg hover:bg-gray-50 text-gray-300 hover:text-gray-800">
                <div class="text-md font-bold uppercase">DOCUMENTATION</div>
              </a>
              <a href="https://docs.wodo.io/wodo-gaming/whitepaper" class="-m-3 p-3 rounded-lg hover:bg-gray-50 text-gray-300 hover:text-gray-800">
                <div class="text-md font-bold uppercase">WHITE PAPER</div>
              </a>
              <a href="https://docs.wodo.io/wodo-gaming" class="-m-3 p-3 rounded-lg hover:bg-gray-50 text-gray-300 hover:text-gray-800">
                <div class="text-md font-bold uppercase">ABOUT</div>
              </a>
              <a href="https://docs.wodo.io/wodo-gaming/meet-the-team" class="-m-3 p-3 rounded-lg hover:bg-gray-50 text-gray-300 hover:text-gray-800">
                <div class="text-md font-bold uppercase">TEAM</div>
              </a>
              <a href="#" class="-m-3 p-3 rounded-lg hover:bg-gray-50 text-gray-300 hover:text-gray-800">
                <div class="text-md font-bold uppercase">WHITELIST</div>
              </a>
              <a href="https://docs.wodo.io/" class="-m-3 p-3 rounded-lg hover:bg-gray-50 text-gray-300 hover:text-gray-800">
                <div class="text-md font-bold uppercase">ABOUT WODO</div>
              </a>
              <a href="https://docs.wodo.io/wodo-gaming/terms-of-usage/privacy-policy" class="-m-3 p-3 rounded-lg hover:bg-gray-50 text-gray-300 hover:text-gray-800">
                <div class="text-md font-bold uppercase">Privacy Policy</div>
              </a>
              <a href="https://docs.wodo.io/wodo-gaming/terms-of-usage/terms-of-services" class="-m-3 p-3 rounded-lg hover:bg-gray-50 text-gray-300 hover:text-gray-800">
                <div class="text-md font-bold uppercase">terms of services</div>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <simple-modal v-if="showWhitelistModal">
      Update Status
      <template v-slot:subtitle>
        <p>content</p>
      </template>
      <template v-slot:buttons>
        <div class="flex justify-between">
          <button @click.prevent="showWhitelistModal = false" type="button" class="uppercase bg-white rounded-md border-b-8 border-4 border-wd-gray-2 px-3 py-1.5 w-auto m-auto hover:border-wd-secondary">
            Cancel
          </button>
          <button @click.prevent="submitWhitelist"  class="uppercase bg-wd-secondary text-white rounded-md border-b-8 border-4 border-wd-secondary-light px-3 py-1.5 w-auto m-auto hover:border-wd-secondary" >
            Submit
          </button>
        </div>
      </template>
    </simple-modal>
  </div>
</template>

<script>
import RocketIcon from "@/components/images/RocketIcon";
import LogoGrayIcon from "@/components/images/LogoGrayIcon";
import TwitterIcon from "@/components/images/TwitterIcon";
import GithubIcon from "@/components/images/GithubIcon";
import DiscordIcon from "@/components/images/DiscordIcon";
import RedditIcon from "@/components/images/RedditIcon";
import TelegramIcon from "@/components/images/TelegramIcon";
import MenuIcon from "@/components/images/MenuIcon";
import NotificationIcon from "@/components/images/NotificationIcon";
import SimpleModal from "@/components/modals/simple-modal.vue";
export default {
  name: 'LandingNavigation',
  components: {
    SimpleModal,
    NotificationIcon,
    MenuIcon, TelegramIcon, RedditIcon, DiscordIcon, GithubIcon, TwitterIcon, LogoGrayIcon, RocketIcon},
  data() {
    return {
      showRightMenu: false,
      showWhitelistModal: false,
      submittingWhitelistModal: false
    }
  },
  methods: {
    submitWhitelist() {
      this.submittingWhitelistModal = true
      console.log('whitelist submitted')
      this.submittingWhitelistModal = false
    }
  }
}
</script>
