<template>
  <div class="relative max-w-7xl mx-auto mt-8">
    <div class="rounded-lg border-wd-gray-6 border-b-4 bg-wd-gray-6 mx-4 md:mx-8 xl:mx-0">
      <div class="flex flex-col lg:flex-row justify-between bg-white text-wd-black-dark rounded-lg px-6 py-8 border-wd-gray-6 border-4 items-center">
        <div class="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between w-full">
          <div class="flex justify-between w-full">
            <div class="flex justify-start w-full items-start md:items-center space-x-4">
              <div class="bg-wd-primary-dark border-wd-primary-dark border-b-4 rounded-lg">
                <div class="bg-wd-primary-dark border-wd-primary-dark border-4 rounded-lg">
                  <img class="mx-auto rounded w-[50px] md:w-[100px]" src="@/assets/images/tmp/profile.png" alt="user profile image" >
                </div>
              </div>
              <div class="flex flex-col space-y-2">
                <span class="font-extrabold text-xl">Tomas Smith</span>
                <div class="flex space-x-2 items-center">
                  <img src="@/assets/images/tmp/flag.png" alt="flag" class="w-5">
                  <span class="text-md font-inter text-wd-gray-5 ">Amsterdam, NL</span>
                </div>
                <span class="text-md font-inter">🎮 Keep calm and game on 🕹</span>
              </div>
            </div>
            <div class="block md:hidden">
              <nuxt-link to="#" class="text-right"><SettingIcon class="text-wd-gray-3 w-6 h-6"/></nuxt-link>
            </div>
          </div>
          <div class="flex flex-col justify-between w-full">
            <nuxt-link to="#" class="hidden md:flex items-center text-sm font-inter text-wd-gray-3 justify-end">settings <SettingIcon class="text-wd-gray-3 w-6 h-6"/></nuxt-link>
            <div class="flex space-x-4 justify-center md:justify-end">
              <div class="flex justify-center items-center space-x-2 w-full md:w-auto">
                <div class="rounded-full bg-wd-primary-light p-3">
                  <MedalIcon class="w-7 h-7 text-wd-primary"/>
                </div>
                <div>
                  <p class="text-wd-gray-3 text-xs uppercase font-inter">won</p>
                  <p class="text-wd-black-dark text-sm uppercase font-inter">37 USD</p>
                </div>
              </div>
              <div class="flex justify-center items-center space-x-2 w-full md:w-auto">
                <div class="rounded-full bg-wd-primary-light p-3">
                  <RocketIcon class="w-7 h-7 text-wd-primary"/>
                </div>
                <div>
                  <p class="text-wd-gray-3 text-xs uppercase font-inter">Played</p>
                  <p class="text-wd-black-dark text-sm uppercase font-inter">18 Times</p>
                </div>
              </div>
              <div class="flex justify-center items-center space-x-2 w-full md:w-auto">
                <div class="rounded-full bg-wd-primary-light p-3">
                  <WatchIcon class="w-7 h-7 text-wd-primary"/>
                </div>
                <div>
                  <p class="text-wd-gray-3 text-xs uppercase font-inter">Spent</p>
                  <p class="text-wd-black-dark text-sm uppercase font-inter">15 h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col space-y-6 md:space-y-0 md:flex-row space-x-0 md:space-x-4 mx-4 md:mx-8 xl:mx-0 mt-6">
      <div class="w-full">
        <h4 class="font-bold text-2xl mb-4">My ACTIVITIES</h4>
        <div class="rounded-lg border-wd-gray-6 border-b-4 bg-wd-gray-6">
          <div class="rounded-lg px-3 py-4 border-wd-gray-6 border-4 bg-white text-wd-black-dark">
            <div class="flex flex-col">
              <div class="overflow-x-auto">
                <div class="inline-block min-w-full align-middle">
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr class="text-left text-xs text-wd-gray-5 uppercase font-inter">
                        <th scope="col" class="py-2">Game</th>
                        <th scope="col" class="py-2">Option</th>
                        <th scope="col" class="py-2">Rank</th>
                        <th scope="col" class="py-2">Prize</th>
                        <th scope="col" class="py-2">Fees</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 whitespace-nowrap text-sm">
                      <tr>
                        <td class="font-medium py-4">SNAKE.IO</td>
                        <td class="py-4">Forever Game</td>
                        <td class="py-4">#26</td>
                        <td class="py-4">32</td>
                        <td class="py-4">10</td>
                      </tr>
                      <tr>
                        <td class="font-medium py-4">SNAKE.IO</td>
                        <td class="py-4">Forever Game</td>
                        <td class="py-4">#26</td>
                        <td class="py-4">32</td>
                        <td class="py-4">10</td>
                      </tr>
                      <tr>
                        <td class="font-medium py-4">SNAKE.IO</td>
                        <td class="py-4">Forever Game</td>
                        <td class="py-4">#26</td>
                        <td class="py-4">32</td>
                        <td class="py-4">10</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full">
        <div class="flex justify-between items-start mb-2">
          <h4 class="font-bold text-2xl flex-1">My Transactions</h4>
          <button class="uppercase bg-white text-wd-black-dark text-sm rounded-md border-b-8 border-4 border-wd-gray-3 px-5 py-1 m-auto hover:border-wd-gray-6">TOP UP</button>
        </div>
        <div class="rounded-lg border-wd-gray-6 border-b-4 bg-wd-gray-6">
          <div class="rounded-lg px-3 py-4 border-wd-gray-6 border-4 bg-white text-wd-black-dark">
            <div class="bg-wd-gray-6 border-wd-gray-6 border-b-4 rounded-lg">
              <div class="flex bg-white border-wd-gray-6 border-4 rounded-lg space-x-1 p-1">
                <div :class="(tab !== 'banano')?'bg-white text-wd-gray-5':'bg-wd-primary-light text-wd-gray-2'" class="flex items-center font-bold p-1 rounded-lg transition duration-500 w-full " @click="tab = 'banano'">
                  <div class="ml-2">
                    <BananoIcon class="text-wd-secondary w-8 h-8 bg-white rounded-full"/>
                  </div>
                  <div class="flex flex-col items-center w-full">
                    <span class="duration-150 ease-in-out font-light text-sm uppercase text-center">BANANO balance</span>
                    <span class="duration-150 ease-in-out uppercase">1823</span>
                  </div>
                </div>
                <div :class="(tab !== 'nano')?'bg-white text-wd-gray-5':'bg-wd-primary-light text-wd-gray-2'" class="flex items-center font-bold p-1 rounded-lg transition duration-500 w-full" @click="tab = 'nano'">
                  <div class="ml-2">
                    <BananoIcon class="text-wd-turquoise w-8 h-8 bg-white rounded-full"/>
                  </div>
                  <div class="flex flex-col items-center w-full">
                    <span class="duration-150 ease-in-out font-light text-sm uppercase text-center">NANO balance</span>
                    <span class="duration-150 ease-in-out uppercase">562</span>
                  </div>
                </div>
                <div :class="(tab !== 'bano')?'bg-white text-wd-gray-5':'bg-wd-primary-light text-wd-gray-2'" class="flex items-center font-bold p-1 rounded-lg transition duration-500 w-full" @click="tab = 'bano'">
                  <div class="ml-2">
                    <BananoIcon class="text-wd-yellow-light w-8 h-8 bg-white rounded-full"/>
                  </div>
                  <div class="flex flex-col items-center w-full">
                    <span class="duration-150 ease-in-out font-light text-sm uppercase text-center">BANO balance</span>
                    <span class="duration-150 ease-in-out uppercase">139</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-2">
              <div class="flex justify-between items-center bg-wd-main-background rounded-xl p-2">
                <p class="text-sm text-wd-gray-2">1PQi1jwKr4cnfFYKgeHAAAdfQi1jwKr4cnfFYKgeHA</p>
                <CopyIcon class="text-wd-gray-2 w-6 h-6"/>
              </div>
              <div class="flex flex-col">
                <div class="overflow-x-auto">
                  <div class="inline-block min-w-full align-middle">
                    <table class="min-w-full divide-y divide-gray-200">
                      <tbody class="divide-y divide-gray-200 whitespace-nowrap text-sm">
                      <tr>
                        <td class="py-4">No #2137642</td>
                        <td class="py-4">28/08/21, 18:30</td>
                        <td class="py-4 font-bold">+882</td>
                      </tr>
                      <tr>
                        <td class="py-4">No #2137642</td>
                        <td class="py-4">28/08/21, 18:30</td>
                        <td class="py-4 font-bold">+882</td>
                      </tr>
                      <tr>
                        <td class="py-4">No #2137642</td>
                        <td class="py-4">28/08/21, 18:30</td>
                        <td class="py-4 font-bold">+882</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SettingIcon from "@/components/images/SettingIcon.vue";
import MedalIcon from "@/components/images/MedalIcon.vue";
import RocketIcon from "@/components/images/RocketIcon.vue";
import WatchIcon from "@/components/images/WatchIcon.vue";
import CopyIcon from "@/components/images/CopyIcon.vue";
import BananoIcon from "@/components/images/BananoIcon.vue";
export default {
  components: {BananoIcon, CopyIcon, WatchIcon, RocketIcon, MedalIcon, SettingIcon},
  data: function () {
    return {
      tab: 'banano'
    }
  },
}
</script>