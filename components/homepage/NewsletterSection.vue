<template>
  <div class="relative bg-wd-background-red py-16">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col lg:flex-row justify-between bg-wd-primary text-white rounded-lg px-12 py-14 border-wd-primary-dark border-b-8 border-4 mx-8 xl:mx-0">
        <div class="w-full lg:w-3/4 text-center lg:text-left">
          <h5 class="font-black text-4xl">Register to Our Newsletter</h5>
          <p class="mt-4 font-inter text-md xl:w-3/5">Register to receive email updates on announcements, gift ideas, promotions and more.</p>
          <div class="mt-4 xl:w-3/5 flex flex-col lg:flex-row lg:space-x-4 space-y-2 lg:space-y-0 lg:pr-4">
            <input-text class="w-full" placeholder="Enter Your Email" icon="mail" />
            <button class="uppercase bg-wd-secondary text-white rounded-md border-b-8 border-4 border-wd-secondary-light px-3 py-1.5 w-auto m-auto hover:border-wd-secondary" >submit</button>
          </div>
        </div>
        <div class="w-full lg:w-2/4 xl:w-1/4 flex flex-col text-md font-inter space-y-1 text-center lg:text-left mt-12 lg:mt-0">
          <a href="/" class="">Wodo</a>
          <a href="https://docs.wodo.io/" target="_blank" class="">About Wodo</a>
          <a href="https://docs.wodo.io/wodo-gaming/terms-of-usage/privacy-policy" target="_blank" class="">Privacy Policy</a>
          <a href="https://docs.wodo.io/wodo-gaming/terms-of-usage/terms-of-services" target="_blank" class="">Terms of Services</a>
          <a href="https://docs.wodo.io/wodo-gaming/terms-of-usage/privacy-note-applicants" target="_blank" class="">Privacy Note</a>
          <a href="https://docs.wodo.io/wodo-gaming/terms-of-usage/gdpr" target="_blank" class="">GDPR</a>
          <div class="flex space-x-1.5 pt-6 m-auto lg:m-0">
            <a href="https://twitter.com/wodoio" target="_blank" class="">
              <TwitterIcon class="w-6 h-6 hover:opacity-80"/>
            </a>
            <a href="https://t.me/wodoio" target="_blank">
              <TelegramIcon class="w-6 h-6 hover:opacity-80"/>
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
            <a href="https://wodoio.medium.com/" target="_blank">
              <MediumIcon class="w-6 h-6 hover:opacity-80"/>
            </a>
            <a href="https://www.tiktok.com/@wodoio" target="_blank">
              <TwitchIcon class="w-6 h-6 hover:opacity-80"/>
            </a>
            <a href="https://www.tiktok.com/@wodoio" target="_blank">
              <TiktokIcon class="w-6 h-6 hover:opacity-80"/>
            </a>
            <a href="https://www.instagram.com/wodoio" target="_blank">
              <InstagramIcon class="w-6 h-6 hover:opacity-80"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TwitterIcon from "@/components/images/TwitterIcon.vue";
import GithubIcon from "@/components/images/GithubIcon.vue";
import DiscordIcon from "@/components/images/DiscordIcon.vue";
import RedditIcon from "@/components/images/RedditIcon.vue";
import TelegramIcon from "@/components/images/TelegramIcon.vue";
import InputText from "@/components/inputs/input-text.vue";
import MediumIcon from "@/components/images/MediumIcon.vue";
import TwitchIcon from "@/components/images/TwitchIcon.vue";
import TiktokIcon from "@/components/images/TiktokIcon.vue";
import InstagramIcon from "@/components/images/InstagramIcon.vue";
export default {
  components: {
    InstagramIcon,
    TiktokIcon,
    TwitchIcon, MediumIcon, InputText, TelegramIcon, RedditIcon, DiscordIcon, GithubIcon, TwitterIcon}
}
</script>
