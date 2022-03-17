<template>
  <div class="relative max-w-6xl m-auto">
    <div class="flex items-center h-screen m-auto mx-4">
      <div class="w-full">
        <div class="w-[90%] m-auto lg:m-0">
          <LogoIcon class="w-32 h-auto mb-10 mx-auto lg:mx-0"/>
          <WgBlock padding="p-1" slot_class="flex space-x-1">
            <button :class="(tab !== 'signin')?'bg-white text-wd-gray-5':'bg-wd-gray-5 text-white'" class="font-bold p-1 rounded-lg transition duration-500 w-full " @click="tab = 'signin'">
              <span class="duration-150 ease-in-out uppercase">Sign In</span>
            </button>
            <button :class="(tab !== 'signup')?'bg-white text-wd-gray-5':'bg-wd-gray-5 text-white'" class="font-bold p-1 rounded-lg transition duration-500 w-full" @click="tab = 'signup'">
              <span class="duration-150 ease-in-out uppercase">Sign Up</span>
            </button>
          </WgBlock>
          <div class="relative flex flex-col mt-6">
            <transition
              enter-active-class="transition ease-in-out duration-500 transform order-first"
              enter-from-class="opacity-0 scale-98"
              enter-to-class="opacity-100 scale-100"
              leave-active-class="transition ease-out duration-300 transform absolute"
              leave-from-class="opacity-100 scale-100"
              leave-to-class="opacity-0 scale-98"
            >
              <div class="w-full space-y-6" v-show="tab === 'signin'">
                <input-text class="w-full" placeholder="Your Email" icon="mail"/>
                <input-text class="w-full" placeholder="Your Password" icon="lock"/>
                <button @click.prevent="submit" class="w-full">
                  <wgButton bg_color="wd-primary" border_color="wd-primary-dark" hover_border_color="wd-primary">
                    <span class="uppercase text-white">Sign In</span>
                  </wgButton>
                </button>
                <!--   todo add proper links             -->
                <p class="font-inter text-xs text-wd-gray-5 ml-2">By Signing Up you’re agreeing to the Terms & Conditions and Privacy Policy.</p>
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
              <div class="w-full space-y-6" v-show="tab === 'signup'">
                <input-text class="w-full" placeholder="Your Email" icon="mail"/>
                <input-text class="w-full" placeholder="Your Password" icon="lock"/>
                <input-text class="w-full" placeholder="Repeat Password" icon="lock"/>
                <button @click.prevent="submit" class="uppercase bg-wd-primary text-white text-sm rounded-md border-wd-primary-dark border-b-8 border-4 px-2 py-1 w-full hover:border-wd-primary items-center space-x-1" >
                  Sign Up
                </button>
              </div>
            </transition>
          </div>
        </div>
      </div>
      <div class="w-full hidden lg:block">
        <img src="@/assets/images/partials/login_right.jpeg" alt="wodo login image">
      </div>
    </div>
  </div>
</template>

<script>
import LogoIcon from "@/components/images/LogoIcon.vue";
import InputText from "@/components/inputs/input-text.vue";
import WgBlock from "@/components/partials/WgBlock.vue";
import WgButton from "@/components/partials/WgButton.vue";
export default {
  name: 'LoginPage',
  components: {WgButton, WgBlock, InputText, LogoIcon},
  layout: 'login',
  data: function () {
    return {
      tab: 'signin'
    }
  },
  methods: {
    submit() {
      this.$router.push('/')
    }
  }
}
</script>
