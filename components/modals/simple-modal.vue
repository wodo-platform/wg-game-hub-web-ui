<template>
  <div class="fixed z-20 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <transition
          appear
          enter-active-class="ease-out duration-300"
          enter-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="ease-in duration-200"
          leave-class="opacity-100"
          leave-to-class="opacity-0"
      >
        <div class="transition fixed inset-0 bg-wd-black-dark bg-opacity-90 transition-opacity" aria-hidden="true"></div>
      </transition>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <transition
          appear
          enter-active-class="ease-out duration-300"
          enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to-class="opacity-100 translate-y-0 sm:scale-100"
          leave-active-class="ease-in duration-200"
          leave-class="opacity-100 translate-y-0 sm:scale-100"
          leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      >
        <div class="inline-block align-bottom rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full bg-wd-secondary border-wd-secondary border-b-4 rounded-lg" :class="width">
          <div class="bg-white border-wd-secondary border-4 rounded-lg">
            <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
              <button type="button" class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span class="sr-only">Close</span>
                <x-icon class="h-6 w-6"/>
              </button>
            </div>
            <div class="w-[103%] -ml-2 -mt-10 sm:-mt-10">
              <div class="fixed inset-x-0 -mt-10 z-10 items-center bg-wd-secondary text-white font-extrabold text-2xl py-1 text-center rounded-md border-b-8 border-4 border-wd-secondary-light w-3/5 m-auto" ><slot></slot></div>
              <TenteImage class="w-full -mt-5 object-fill"/>
            </div>
            <div class="inline-block align-bottom px-4 pt-5 pb-4 sm:p-6 w-full ">
              <div class="sm:flex sm:items-start">

                <slot name="icon"></slot>
                <div class="mt-3 text-center sm:mt-0 sm:mx-4 sm:text-left w-full">
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      <slot name="subtitle"></slot>
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-4">
                <slot name="buttons"></slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import TenteImage from "@/components/images/TenteImage.vue";
export default {
  name: 'simple-modal',
  components: {TenteImage},
  props: {
    width: ''
  }
}
</script>

<style scoped>

</style>
