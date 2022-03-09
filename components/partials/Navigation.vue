<template>
  <div class="relative bg-white">
    <div class="px-4 py-6 sm:px-3 md:px-6 xl:px-0 md:justify-start md:space-x-10 lg:max-w-7xl m-auto">
      <div class="flex flex-row items-center justify-between">
        <div class="hidden md:block">
          <nav class="md:flex md:space-x-8">
            <nuxt-link to="/dashboard" type="button" class="" aria-expanded="false">
              <LogoRedIcon />
            </nuxt-link>
            <a href="#" type="button" class="text-wd-black-dark group bg-white flex space-x-2 items-center font-bold text-sm hover:text-wd-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false">
              <RocketIcon class="w-5 h-5"/>
              <span class="uppercase">Games</span>
            </a>
            <a href="#" type="button" class="text-wd-black-dark group bg-white flex space-x-2 items-center font-bold text-sm hover:text-wd-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false">
              <RocketIcon class="w-5 h-5"/>
              <span class="uppercase">Item 2</span>
            </a>
          </nav>
        </div>
        <div class="md:hidden">
          <LogoRedIcon />
        </div>
        <div class="flex items-center justify-between text-center space-x-1.5">
          <a href="#">
            <SearchIcon class="w-6 h-6 hover:opacity-80"/>
          </a>
          <a href="#">
            <NotificationIcon class="w-6 h-6 hover:opacity-80"/>
          </a>
          <nuxt-link to="/login" class="hidden md:flex uppercase bg-wd-primary text-white text-sm rounded-md border-wd-primary-dark border-b-8 border-4 px-2 py-1 w-auto hover:border-wd-primary items-center space-x-1" >
            <UserIcon class="w-5 h-5 text-white"/>
            <span>Sign in / Sign up</span>
          </nuxt-link>
          <a href="#" class="block md:hidden">
            <UserIcon class="w-6 h-6 hover:opacity-80 text-wd-primary"/>
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
    <div class="fixed z-10 top-0 right-0 opacity-90 w-3/4 h-screen sm:w-1/2 bg-black  md:hidden transform ease-in-out transition-all duration-300" :class="showRightMenu ? 'translate-x-0' : 'translate-x-full'">
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
              <a href="#" class="-m-3 p-3 rounded-lg hover:bg-gray-50 text-gray-300 hover:text-gray-800">
                <div class="text-md font-bold uppercase">Games</div>
              </a>
              <a href="#" class="-m-3 p-3 rounded-lg hover:bg-gray-50 text-gray-300 hover:text-gray-800">
                <div class="text-md font-bold uppercase">Items 1</div>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
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
import LogoRedIcon from "@/components/images/LogoRedIcon.vue";
import SearchIcon from "@/components/images/SearchIcon.vue";
import UserIcon from "@/components/images/UserIcon.vue";
export default {
  name: 'Navigation',
  components: {
    UserIcon,
    SearchIcon,
    LogoRedIcon,
    NotificationIcon,
    MenuIcon, TelegramIcon, RedditIcon, DiscordIcon, GithubIcon, TwitterIcon, LogoGrayIcon, RocketIcon},
  data() {
    return {
      showRightMenu: false
    }
  }
}
</script>
