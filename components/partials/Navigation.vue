<template>
  <div class="relative bg-white">
    <div class="px-4 py-6 sm:px-3 md:px-6 xl:px-0 md:justify-start md:space-x-10 lg:max-w-7xl m-auto">
      <div class="flex flex-row items-center justify-between">
        <div class="hidden md:block">
          <nav class="md:flex md:space-x-8">
            <nuxt-link to="/" type="button" class="" aria-expanded="false">
              <LogoRedIcon />
            </nuxt-link>
            <nuxt-link to="/" type="button" class="text-wd-black-dark group bg-white flex space-x-2 items-center font-bold text-sm hover:text-wd-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false">
              <RocketIcon class="w-5 h-5"/>
              <span class="uppercase">Games</span>
            </nuxt-link>
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
          <div class="sm:relative mt-1">
            <button v-click-outside="hideSearchPanel" @click.prevent="showSearchPanel = !showSearchPanel; showNotificationPanel = false" class="cursor-pointer">
              <SearchIcon class="w-6 h-6 hover:opacity-80"/>
            </button>
            <div v-show="showSearchPanel" class="absolute z-10 text-center right-0 p-2 mt-4 w-full sm:w-96 rounded-lg bg-white border-wd-green border-b-8 border-4" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <input-text class="w-full border rounded" placeholder="What in your mind!" icon="search"/>
              <button class="mt-1 bg-white rounded-lg border-wd-green hover:border-wd-green-light border-b-8 border-4 px-2 py-1 text-right">Search</button>
            </div>
          </div>
          <div class="sm:relative items-center mt-1">
            <button v-click-outside="hideNotificationPanel" @click.prevent="showNotificationPanel = !showNotificationPanel; showSearchPanel = false" class="cursor-pointer">
              <NotificationIcon class="w-6 h-6 hover:opacity-80"/>
            </button>
            <div v-show="showNotificationPanel" class="absolute z-10 text-center right-0 mt-4 w-full sm:w-96 rounded-lg bg-wd-green-light" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <!--  notification card  -->
              <div class="m-4 p-2 bg-white rounded-lg border-wd-green hover:border-wd-secondary-light border-b-8 border-4">
                <div class="flex items-center">
                  <div class="w-1/4">
                    <svg class="relative w-20 h-20" width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M64 128.1c35.346 0 64-28.654 64-64 0-35.346-28.654-64-64-64-35.346 0-64 28.654-64 64 0 35.346 28.654 64 64 64Z" fill="#FF4848"/><path opacity=".5" d="M113.5 49c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5c-.1 2.5-2.1 4.5-4.5 4.5Zm0-6.8c-1.3 0-2.4 1.1-2.4 2.4 0 1.3 1.1 2.4 2.4 2.4 1.3 0 2.4-1.1 2.4-2.4-.1-1.4-1.1-2.4-2.4-2.4ZM49 18c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4Zm0-6.1c-1.2 0-2.1 1-2.1 2.1 0 1.2.9 2.1 2.1 2.1 1.2 0 2.1-1 2.1-2.1 0-1.2-.9-2.1-2.1-2.1ZM17 53c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4Zm0-6.1c-1.2 0-2.1 1-2.1 2.1 0 1.2 1 2.1 2.1 2.1 1.2 0 2.1-1 2.1-2.1 0-1.2-.9-2.1-2.1-2.1ZM92 110c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4Zm0-6.1c-1.2 0-2.1 1-2.1 2.1 0 1.2 1 2.1 2.1 2.1 1.2 0 2.1-1 2.1-2.1 0-1.2-.9-2.1-2.1-2.1ZM19.7 72.3c0-.4-.4-.8-1-.9l-1.9-.3c-.5-.1-1.1-.6-1.1-1.1l-.3-1.9c-.1-.5-.5-1-.9-1s-.8.4-.9 1l-.1 1.9c-.1.5-.6 1.1-1.1 1.1l-1.9.3c-.5.1-1 .5-1 .9s.4.8 1 .9l1.9.3c.5.1 1.1.6 1.1 1.1l.3 1.9c.1.5.5 1 .9 1s.8-.4.8-1l.3-2.1c.1-.5.6-1 1.1-1.1l1.8-.1c.6-.2 1-.6 1-.9ZM120.6 68.9c0-.4-.4-.8-1-.9l-1.9-.3c-.5-.1-1.1-.6-1.1-1.1l-.3-1.9c-.1-.5-.5-1-.9-1s-.8.4-.9 1l-.3 1.9c-.1.5-.6 1.1-1.1 1.1l-1.9.3c-.5.1-1 .5-1 .9s.4.8 1 .9l1.9.3c.5.1 1.1.6 1.1 1.1l.3 1.9c.1.5.5 1 .9 1s.8-.4.8-1l.3-2.1c.1-.5.6-1 1.1-1.1l1.8-.1c.7-.1 1.2-.5 1.2-.9ZM47.8 39.8c-.5 0-.9-.3-1-.8-.1-.5.2-1.1.7-1.2l6.4-1.5c.5-.1 1.1.2 1.2.7.1.5-.2 1.1-.7 1.2L48 39.7s-.1.1-.2.1Z" fill="#fff"/><g clip-path="url(#b)"><path d="M72.546 77.242A29.854 29.854 0 0 1 50.493 72.1a6.51 6.51 0 0 1-2.102.737 6.81 6.81 0 0 1-7.802-5.646l-1.078-6.724 1.13-.181a29.964 29.964 0 0 1-2.424-7.888l-2.156-13.448-14.792 2.372 8.623 53.792L107.89 82.61l-1.724-10.759-33.62 5.39Z" fill="#FF4848"/><path d="m27.941 48.53 6.468 40.343 32.275-5.174-6.467-40.344-32.276 5.174Zm26.096 16.506a6.81 6.81 0 1 1-13.448 2.156l-1.078-6.724 13.448-2.156 1.078 6.724Z" fill="#79BD9A"/><path d="m95.294 55.663-25.55 4.097.862 5.379 25.55-4.096-.862-5.38Z" fill="#ADC1F6"/><path d="m93.406 35.276-6.724 1.078 1.078 6.724L94.484 42l-1.078-6.724Z" fill="#79BD9A"/><path d="m43.011 73.7 10.758-1.724a5.448 5.448 0 0 1 6.242 4.517l1.293 8.068-21.516 3.45-1.294-8.07a5.448 5.448 0 0 1 4.517-6.24Z" fill="#ADC1F6"/><path d="m38.217 52.4 10.758-1.725a6.81 6.81 0 0 1 7.802 5.646L46.02 58.045a6.81 6.81 0 0 1-7.802-5.646Z" fill="#C4F236"/><path d="M48.39 72.838a6.81 6.81 0 0 1-4.25-.698l.216 1.345 5.112 6.077 2.957-7.37-.216-1.345a6.81 6.81 0 0 1-3.818 1.991Z" fill="#FF4848"/><path d="M43.278 66.76a4.086 4.086 0 0 1 3.388-4.68l6.724-1.078-.431-2.69-13.448 2.156 1.078 6.724a6.809 6.809 0 0 0 9.125 5.296 6.81 6.81 0 0 1-6.436-5.727Z" fill="#FF4848"/><path d="M49.787 64.338a1.362 1.362 0 1 0-.432-2.69 1.362 1.362 0 0 0 .432 2.69ZM44.408 65.2a1.362 1.362 0 1 0-.431-2.69 1.362 1.362 0 0 0 .43 2.69Z" fill="#3B5986"/><path d="m48.975 50.675-14.792 2.37.862 5.38a8.17 8.17 0 0 0 5.153 6.333l-.688-4.29 13.449-2.156.771 4.815a6.81 6.81 0 0 0-4.755-12.453Z" fill="#ADC1F6"/><path d="M99.051 27.474 21.053 39.978a1.362 1.362 0 0 0-1.13 1.56l8.624 53.792a1.362 1.362 0 0 0 1.56 1.13l77.999-12.505a1.36 1.36 0 0 0 1.129-1.56l-8.624-53.792a1.36 1.36 0 0 0-1.56-1.13Zm7.279 54.007L31.021 93.554l-8.192-51.102 75.309-12.073 8.192 51.102Z" fill="#3B5986"/><path d="M34.624 90.218 66.9 85.044a1.362 1.362 0 0 0 1.129-1.56L61.56 43.14a1.362 1.362 0 0 0-1.56-1.13l-32.275 5.174a1.362 1.362 0 0 0-1.13 1.56l6.468 40.345a1.362 1.362 0 0 0 1.56 1.129Zm15.636-16.3-1.21 3.035-2.098-2.505 3.308-.53Zm2.128-10.563.304 1.897a5.448 5.448 0 1 1-10.759 1.724l-.862-5.379 10.758-1.724.559 3.483Zm.355-6.388-13.448 2.156a1.362 1.362 0 0 0-1.13 1.56l.217 1.345a6.81 6.81 0 0 1-1.992-3.819l-.647-4.034 13.448-2.156a5.448 5.448 0 0 1 5.466 8.283l-.353-2.206a1.362 1.362 0 0 0-1.56-1.129Zm-9.516 18.078.578-.093 4.379 5.202.802 5.003-8.069 1.293-1.078-6.724a4.086 4.086 0 0 1 3.388-4.68Zm8.449 9.68-.802-5.002 2.533-6.31.578-.093a4.086 4.086 0 0 1 4.681 3.388l1.078 6.724-8.068 1.294ZM29.502 49.659l29.585-4.743 6.037 37.655-2.69.43-1.078-6.723a6.81 6.81 0 0 0-7.237-5.737 8.172 8.172 0 0 0 1.262-5.72l-.176-1.102A8.172 8.172 0 0 0 48.76 49.33L33.967 51.7a1.362 1.362 0 0 0-1.129 1.56l.862 5.38a9.533 9.533 0 0 0 5.268 7.045l.276 1.721a8.172 8.172 0 0 0 2.987 5.04 6.81 6.81 0 0 0-5.081 7.71l1.078 6.725-2.69.43-6.036-37.654ZM75.666 79.5l-2.69.431a1.362 1.362 0 0 0 .432 2.69l2.69-.431a4.086 4.086 0 0 0 3.387-4.681 4.085 4.085 0 0 0-1.467-2.524 4.086 4.086 0 0 0 .605-2.855 4.086 4.086 0 0 0-4.681-3.388l-2.69.431a1.362 1.362 0 0 0 .431 2.69l2.69-.431a1.362 1.362 0 1 1 .431 2.69l-2.69.43a1.362 1.362 0 0 0 .431 2.69l2.69-.431a1.362 1.362 0 0 1 .431 2.69ZM87.82 69.276a1.362 1.362 0 0 0-.431-2.69l-5.38.862a1.362 1.362 0 0 0-1.128 1.56l.862 5.38a1.362 1.362 0 0 0 1.56 1.13l2.69-.432a1.362 1.362 0 0 1 .431 2.69l-2.69.43a1.362 1.362 0 0 0 .432 2.69l2.69-.43a4.086 4.086 0 1 0-1.294-8.07l-1.345.216-.431-2.69 4.034-.646ZM95.458 65.293a4.086 4.086 0 0 0-3.387 4.68 4.086 4.086 0 0 0 1.48 2.522 4.086 4.086 0 0 0-.618 2.858 4.086 4.086 0 0 0 8.069-1.294 4.09 4.09 0 0 0-1.48-2.521 4.083 4.083 0 0 0 .617-2.858 4.084 4.084 0 0 0-4.68-3.388Zm.431 2.69a1.362 1.362 0 1 1 .431 2.69 1.362 1.362 0 0 1-.43-2.69Zm1.294 8.068a1.362 1.362 0 1 1-.432-2.69 1.362 1.362 0 0 1 .432 2.69ZM70.82 66.484l25.552-4.097a1.362 1.362 0 0 0 1.13-1.56l-.863-5.38a1.362 1.362 0 0 0-1.56-1.128l-25.552 4.096a1.362 1.362 0 0 0-1.129 1.56l.862 5.38a1.362 1.362 0 0 0 1.56 1.129Zm.483-5.595 22.862-3.665.431 2.69-22.861 3.664-.432-2.69ZM68.88 54.38l20.172-3.233a1.362 1.362 0 0 0-.43-2.69L68.448 51.69a1.362 1.362 0 0 0 .431 2.69ZM67.802 47.656l13.448-2.155a1.362 1.362 0 0 0-.43-2.69L67.37 44.967a1.362 1.362 0 0 0 .431 2.69ZM87.975 44.423l6.724-1.078a1.362 1.362 0 0 0 1.13-1.56L94.75 35.06a1.362 1.362 0 0 0-1.56-1.129l-6.724 1.078a1.362 1.362 0 0 0-1.13 1.56l1.079 6.724a1.362 1.362 0 0 0 1.56 1.13Zm.267-6.94 4.034-.647.647 4.035-4.034.646-.647-4.034Z" fill="#3B5986"/></g><path d="M48 119c-11.7 0-21.7-7.9-24.3-19.3-3.1-13.4 5.2-26.9 18.6-30 1.9-.4 3.8-.7 5.7-.7 11.7 0 21.7 7.9 24.3 19.3 3.1 13.4-5.2 26.9-18.6 30-1.9.5-3.8.7-5.7.7Zm0-48c-1.8 0-3.5.2-5.3.6-12.4 2.9-20 15.3-17.2 27.6C28 109.7 37.3 117 48 117c1.8 0 3.5-.2 5.3-.6 12.4-2.9 20-15.3 17.2-27.6C68 78.3 58.7 71 48 71Z" fill="#0C508E"/><path d="M48 113c-8.9 0-16.5-6-18.5-14.7-2.4-10.2 4-20.4 14.2-22.8 1.4-.3 2.9-.5 4.3-.5 8.9 0 16.5 6 18.5 14.7 1.2 4.9.3 10-2.4 14.3-2.7 4.3-6.9 7.3-11.8 8.5-1.4.3-2.9.5-4.3.5Zm0-36c-1.3 0-2.6.2-3.9.5-9.1 2.1-14.8 11.3-12.6 20.4 1.8 7.7 8.6 13.1 16.5 13.1 1.3 0 2.6-.2 3.9-.5 4.4-1 8.2-3.7 10.6-7.6 2.4-3.9 3.1-8.4 2.1-12.8C62.7 82.4 55.9 77 48 77Z" fill="#0C508E"/><path d="M8 102.6c-1.5 0-3-.4-4.3-1.2-.5-.3-.6-.9-.4-1.4.3-.5.9-.6 1.4-.4 3 1.8 7 .8 8.8-2.1 2.5-3.8 7.6-5 11.5-2.7 3 1.8 7 .8 8.8-2.1 2.5-3.8 7.6-5 11.5-2.7.5.3.6.9.4 1.4-.3.5-.9.6-1.4.4-3-1.8-7-.8-8.8 2.1-2.5 3.8-7.6 5-11.5 2.7-3-1.8-7-.8-8.8 2.1-1.6 2.5-4.4 3.9-7.2 3.9ZM9.9 111c-1.5 0-3-.4-4.3-1.2-.5-.3-.6-.9-.4-1.4.3-.5.9-.6 1.4-.4 3 1.8 7 .8 8.8-2.1 2.5-3.8 7.6-5 11.5-2.7 3 1.8 7 .8 8.8-2.1 2.5-3.8 7.6-5 11.5-2.7.5.3.6.9.4 1.4-.3.5-.9.6-1.4.4-3-1.8-7-.8-8.8 2.1-2.5 3.8-7.6 5-11.5 2.7-3-1.8-7-.8-8.8 2.1-1.5 2.6-4.3 3.9-7.2 3.9ZM12 119.6c-1.5 0-3-.4-4.3-1.2-.5-.3-.6-.9-.4-1.4.3-.5.9-.6 1.4-.4 3 1.8 7 .8 8.8-2.1 2.5-3.8 7.6-5 11.5-2.7 3 1.8 7 .8 8.8-2.1 2.5-3.8 7.6-5 11.5-2.7.5.3.6.9.4 1.4-.3.5-.9.6-1.4.4-3-1.8-7-.8-8.8 2.1-2.5 3.8-7.6 5-11.5 2.7-3-1.8-7-.8-8.8 2.1-1.6 2.5-4.4 3.9-7.2 3.9Z" fill="#0C508E"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h128v128H0z"/></clipPath><clipPath id="b"><path fill="#fff" transform="rotate(-9.108 143.838 -76.99)" d="M0 0h87.166v87.166H0z"/></clipPath></defs></svg>
                  </div>
                  <div class="w-3/4">
                    <span class="font-bold text-sm">Get whitelisted!</span>
                    <p class="text-xs">You can get whitelisted now for the private token sale</p>
                  </div>
                </div>
              </div>

              <div class="m-4 p-2 bg-white rounded-lg border-wd-green hover:border-wd-secondary-light border-b-8 border-4">
                <div class="flex items-center">
                  <div class="w-1/4">
                    <svg class="relative w-20 h-20" width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M64 128.1c35.346 0 64-28.654 64-64 0-35.346-28.654-64-64-64-35.346 0-64 28.654-64 64 0 35.346 28.654 64 64 64Z" fill="#FF4848"/><path opacity=".5" d="M113.5 49c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5c-.1 2.5-2.1 4.5-4.5 4.5Zm0-6.8c-1.3 0-2.4 1.1-2.4 2.4 0 1.3 1.1 2.4 2.4 2.4 1.3 0 2.4-1.1 2.4-2.4-.1-1.4-1.1-2.4-2.4-2.4ZM49 18c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4Zm0-6.1c-1.2 0-2.1 1-2.1 2.1 0 1.2.9 2.1 2.1 2.1 1.2 0 2.1-1 2.1-2.1 0-1.2-.9-2.1-2.1-2.1ZM17 53c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4Zm0-6.1c-1.2 0-2.1 1-2.1 2.1 0 1.2 1 2.1 2.1 2.1 1.2 0 2.1-1 2.1-2.1 0-1.2-.9-2.1-2.1-2.1ZM92 110c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4Zm0-6.1c-1.2 0-2.1 1-2.1 2.1 0 1.2 1 2.1 2.1 2.1 1.2 0 2.1-1 2.1-2.1 0-1.2-.9-2.1-2.1-2.1ZM19.7 72.3c0-.4-.4-.8-1-.9l-1.9-.3c-.5-.1-1.1-.6-1.1-1.1l-.3-1.9c-.1-.5-.5-1-.9-1s-.8.4-.9 1l-.1 1.9c-.1.5-.6 1.1-1.1 1.1l-1.9.3c-.5.1-1 .5-1 .9s.4.8 1 .9l1.9.3c.5.1 1.1.6 1.1 1.1l.3 1.9c.1.5.5 1 .9 1s.8-.4.8-1l.3-2.1c.1-.5.6-1 1.1-1.1l1.8-.1c.6-.2 1-.6 1-.9ZM120.6 68.9c0-.4-.4-.8-1-.9l-1.9-.3c-.5-.1-1.1-.6-1.1-1.1l-.3-1.9c-.1-.5-.5-1-.9-1s-.8.4-.9 1l-.3 1.9c-.1.5-.6 1.1-1.1 1.1l-1.9.3c-.5.1-1 .5-1 .9s.4.8 1 .9l1.9.3c.5.1 1.1.6 1.1 1.1l.3 1.9c.1.5.5 1 .9 1s.8-.4.8-1l.3-2.1c.1-.5.6-1 1.1-1.1l1.8-.1c.7-.1 1.2-.5 1.2-.9ZM47.8 39.8c-.5 0-.9-.3-1-.8-.1-.5.2-1.1.7-1.2l6.4-1.5c.5-.1 1.1.2 1.2.7.1.5-.2 1.1-.7 1.2L48 39.7s-.1.1-.2.1Z" fill="#fff"/><g clip-path="url(#b)"><path d="M72.546 77.242A29.854 29.854 0 0 1 50.493 72.1a6.51 6.51 0 0 1-2.102.737 6.81 6.81 0 0 1-7.802-5.646l-1.078-6.724 1.13-.181a29.964 29.964 0 0 1-2.424-7.888l-2.156-13.448-14.792 2.372 8.623 53.792L107.89 82.61l-1.724-10.759-33.62 5.39Z" fill="#FF4848"/><path d="m27.941 48.53 6.468 40.343 32.275-5.174-6.467-40.344-32.276 5.174Zm26.096 16.506a6.81 6.81 0 1 1-13.448 2.156l-1.078-6.724 13.448-2.156 1.078 6.724Z" fill="#79BD9A"/><path d="m95.294 55.663-25.55 4.097.862 5.379 25.55-4.096-.862-5.38Z" fill="#ADC1F6"/><path d="m93.406 35.276-6.724 1.078 1.078 6.724L94.484 42l-1.078-6.724Z" fill="#79BD9A"/><path d="m43.011 73.7 10.758-1.724a5.448 5.448 0 0 1 6.242 4.517l1.293 8.068-21.516 3.45-1.294-8.07a5.448 5.448 0 0 1 4.517-6.24Z" fill="#ADC1F6"/><path d="m38.217 52.4 10.758-1.725a6.81 6.81 0 0 1 7.802 5.646L46.02 58.045a6.81 6.81 0 0 1-7.802-5.646Z" fill="#C4F236"/><path d="M48.39 72.838a6.81 6.81 0 0 1-4.25-.698l.216 1.345 5.112 6.077 2.957-7.37-.216-1.345a6.81 6.81 0 0 1-3.818 1.991Z" fill="#FF4848"/><path d="M43.278 66.76a4.086 4.086 0 0 1 3.388-4.68l6.724-1.078-.431-2.69-13.448 2.156 1.078 6.724a6.809 6.809 0 0 0 9.125 5.296 6.81 6.81 0 0 1-6.436-5.727Z" fill="#FF4848"/><path d="M49.787 64.338a1.362 1.362 0 1 0-.432-2.69 1.362 1.362 0 0 0 .432 2.69ZM44.408 65.2a1.362 1.362 0 1 0-.431-2.69 1.362 1.362 0 0 0 .43 2.69Z" fill="#3B5986"/><path d="m48.975 50.675-14.792 2.37.862 5.38a8.17 8.17 0 0 0 5.153 6.333l-.688-4.29 13.449-2.156.771 4.815a6.81 6.81 0 0 0-4.755-12.453Z" fill="#ADC1F6"/><path d="M99.051 27.474 21.053 39.978a1.362 1.362 0 0 0-1.13 1.56l8.624 53.792a1.362 1.362 0 0 0 1.56 1.13l77.999-12.505a1.36 1.36 0 0 0 1.129-1.56l-8.624-53.792a1.36 1.36 0 0 0-1.56-1.13Zm7.279 54.007L31.021 93.554l-8.192-51.102 75.309-12.073 8.192 51.102Z" fill="#3B5986"/><path d="M34.624 90.218 66.9 85.044a1.362 1.362 0 0 0 1.129-1.56L61.56 43.14a1.362 1.362 0 0 0-1.56-1.13l-32.275 5.174a1.362 1.362 0 0 0-1.13 1.56l6.468 40.345a1.362 1.362 0 0 0 1.56 1.129Zm15.636-16.3-1.21 3.035-2.098-2.505 3.308-.53Zm2.128-10.563.304 1.897a5.448 5.448 0 1 1-10.759 1.724l-.862-5.379 10.758-1.724.559 3.483Zm.355-6.388-13.448 2.156a1.362 1.362 0 0 0-1.13 1.56l.217 1.345a6.81 6.81 0 0 1-1.992-3.819l-.647-4.034 13.448-2.156a5.448 5.448 0 0 1 5.466 8.283l-.353-2.206a1.362 1.362 0 0 0-1.56-1.129Zm-9.516 18.078.578-.093 4.379 5.202.802 5.003-8.069 1.293-1.078-6.724a4.086 4.086 0 0 1 3.388-4.68Zm8.449 9.68-.802-5.002 2.533-6.31.578-.093a4.086 4.086 0 0 1 4.681 3.388l1.078 6.724-8.068 1.294ZM29.502 49.659l29.585-4.743 6.037 37.655-2.69.43-1.078-6.723a6.81 6.81 0 0 0-7.237-5.737 8.172 8.172 0 0 0 1.262-5.72l-.176-1.102A8.172 8.172 0 0 0 48.76 49.33L33.967 51.7a1.362 1.362 0 0 0-1.129 1.56l.862 5.38a9.533 9.533 0 0 0 5.268 7.045l.276 1.721a8.172 8.172 0 0 0 2.987 5.04 6.81 6.81 0 0 0-5.081 7.71l1.078 6.725-2.69.43-6.036-37.654ZM75.666 79.5l-2.69.431a1.362 1.362 0 0 0 .432 2.69l2.69-.431a4.086 4.086 0 0 0 3.387-4.681 4.085 4.085 0 0 0-1.467-2.524 4.086 4.086 0 0 0 .605-2.855 4.086 4.086 0 0 0-4.681-3.388l-2.69.431a1.362 1.362 0 0 0 .431 2.69l2.69-.431a1.362 1.362 0 1 1 .431 2.69l-2.69.43a1.362 1.362 0 0 0 .431 2.69l2.69-.431a1.362 1.362 0 0 1 .431 2.69ZM87.82 69.276a1.362 1.362 0 0 0-.431-2.69l-5.38.862a1.362 1.362 0 0 0-1.128 1.56l.862 5.38a1.362 1.362 0 0 0 1.56 1.13l2.69-.432a1.362 1.362 0 0 1 .431 2.69l-2.69.43a1.362 1.362 0 0 0 .432 2.69l2.69-.43a4.086 4.086 0 1 0-1.294-8.07l-1.345.216-.431-2.69 4.034-.646ZM95.458 65.293a4.086 4.086 0 0 0-3.387 4.68 4.086 4.086 0 0 0 1.48 2.522 4.086 4.086 0 0 0-.618 2.858 4.086 4.086 0 0 0 8.069-1.294 4.09 4.09 0 0 0-1.48-2.521 4.083 4.083 0 0 0 .617-2.858 4.084 4.084 0 0 0-4.68-3.388Zm.431 2.69a1.362 1.362 0 1 1 .431 2.69 1.362 1.362 0 0 1-.43-2.69Zm1.294 8.068a1.362 1.362 0 1 1-.432-2.69 1.362 1.362 0 0 1 .432 2.69ZM70.82 66.484l25.552-4.097a1.362 1.362 0 0 0 1.13-1.56l-.863-5.38a1.362 1.362 0 0 0-1.56-1.128l-25.552 4.096a1.362 1.362 0 0 0-1.129 1.56l.862 5.38a1.362 1.362 0 0 0 1.56 1.129Zm.483-5.595 22.862-3.665.431 2.69-22.861 3.664-.432-2.69ZM68.88 54.38l20.172-3.233a1.362 1.362 0 0 0-.43-2.69L68.448 51.69a1.362 1.362 0 0 0 .431 2.69ZM67.802 47.656l13.448-2.155a1.362 1.362 0 0 0-.43-2.69L67.37 44.967a1.362 1.362 0 0 0 .431 2.69ZM87.975 44.423l6.724-1.078a1.362 1.362 0 0 0 1.13-1.56L94.75 35.06a1.362 1.362 0 0 0-1.56-1.129l-6.724 1.078a1.362 1.362 0 0 0-1.13 1.56l1.079 6.724a1.362 1.362 0 0 0 1.56 1.13Zm.267-6.94 4.034-.647.647 4.035-4.034.646-.647-4.034Z" fill="#3B5986"/></g><path d="M48 119c-11.7 0-21.7-7.9-24.3-19.3-3.1-13.4 5.2-26.9 18.6-30 1.9-.4 3.8-.7 5.7-.7 11.7 0 21.7 7.9 24.3 19.3 3.1 13.4-5.2 26.9-18.6 30-1.9.5-3.8.7-5.7.7Zm0-48c-1.8 0-3.5.2-5.3.6-12.4 2.9-20 15.3-17.2 27.6C28 109.7 37.3 117 48 117c1.8 0 3.5-.2 5.3-.6 12.4-2.9 20-15.3 17.2-27.6C68 78.3 58.7 71 48 71Z" fill="#0C508E"/><path d="M48 113c-8.9 0-16.5-6-18.5-14.7-2.4-10.2 4-20.4 14.2-22.8 1.4-.3 2.9-.5 4.3-.5 8.9 0 16.5 6 18.5 14.7 1.2 4.9.3 10-2.4 14.3-2.7 4.3-6.9 7.3-11.8 8.5-1.4.3-2.9.5-4.3.5Zm0-36c-1.3 0-2.6.2-3.9.5-9.1 2.1-14.8 11.3-12.6 20.4 1.8 7.7 8.6 13.1 16.5 13.1 1.3 0 2.6-.2 3.9-.5 4.4-1 8.2-3.7 10.6-7.6 2.4-3.9 3.1-8.4 2.1-12.8C62.7 82.4 55.9 77 48 77Z" fill="#0C508E"/><path d="M8 102.6c-1.5 0-3-.4-4.3-1.2-.5-.3-.6-.9-.4-1.4.3-.5.9-.6 1.4-.4 3 1.8 7 .8 8.8-2.1 2.5-3.8 7.6-5 11.5-2.7 3 1.8 7 .8 8.8-2.1 2.5-3.8 7.6-5 11.5-2.7.5.3.6.9.4 1.4-.3.5-.9.6-1.4.4-3-1.8-7-.8-8.8 2.1-2.5 3.8-7.6 5-11.5 2.7-3-1.8-7-.8-8.8 2.1-1.6 2.5-4.4 3.9-7.2 3.9ZM9.9 111c-1.5 0-3-.4-4.3-1.2-.5-.3-.6-.9-.4-1.4.3-.5.9-.6 1.4-.4 3 1.8 7 .8 8.8-2.1 2.5-3.8 7.6-5 11.5-2.7 3 1.8 7 .8 8.8-2.1 2.5-3.8 7.6-5 11.5-2.7.5.3.6.9.4 1.4-.3.5-.9.6-1.4.4-3-1.8-7-.8-8.8 2.1-2.5 3.8-7.6 5-11.5 2.7-3-1.8-7-.8-8.8 2.1-1.5 2.6-4.3 3.9-7.2 3.9ZM12 119.6c-1.5 0-3-.4-4.3-1.2-.5-.3-.6-.9-.4-1.4.3-.5.9-.6 1.4-.4 3 1.8 7 .8 8.8-2.1 2.5-3.8 7.6-5 11.5-2.7 3 1.8 7 .8 8.8-2.1 2.5-3.8 7.6-5 11.5-2.7.5.3.6.9.4 1.4-.3.5-.9.6-1.4.4-3-1.8-7-.8-8.8 2.1-2.5 3.8-7.6 5-11.5 2.7-3-1.8-7-.8-8.8 2.1-1.6 2.5-4.4 3.9-7.2 3.9Z" fill="#0C508E"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h128v128H0z"/></clipPath><clipPath id="b"><path fill="#fff" transform="rotate(-9.108 143.838 -76.99)" d="M0 0h87.166v87.166H0z"/></clipPath></defs></svg>
                  </div>
                  <div class="w-3/4">
                    <span class="font-bold text-sm">Get whitelisted!</span>
                    <p class="text-xs">You can get whitelisted now for the private token sale</p>
                  </div>
                </div>
              </div>

              <nuxt-link to="/notifications" class="text-gray-600 block w-full text-left px-6 py-2 text-sm text-right">Show All</nuxt-link>
            </div>
          </div>

          <nuxt-link to="/login" class="hidden md:flex uppercase bg-wd-primary text-white text-sm rounded-md border-wd-primary-dark border-b-8 border-4 px-2 py-1 w-auto hover:border-wd-primary items-center space-x-1" >
            <UserIcon class="w-5 h-5 text-white"/>
            <span>Sign in / Sign up</span>
          </nuxt-link>
          <nuxt-link to="/profile" class="block md:hidden">
            <UserIcon class="w-6 h-6 hover:opacity-80 text-wd-primary"/>
          </nuxt-link>
          <button v-click-outside="hideRightMenu" @click.prevent="showRightMenu=true" type="button" class="md:hidden ">
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
              <nuxt-link to="/" class="-m-3 p-3 rounded-lg hover:bg-gray-50 text-gray-300 hover:text-gray-800">
                <div class="text-md font-bold uppercase">Games</div>
              </nuxt-link>
              <nuxt-link to="/" class="-m-3 p-3 rounded-lg hover:bg-gray-50 text-gray-300 hover:text-gray-800">
                <div class="text-md font-bold uppercase">Items 1</div>
              </nuxt-link>
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
import InputText from "@/components/inputs/input-text.vue";
export default {
  name: 'Navigation',
  components: {
    InputText,
    UserIcon,
    SearchIcon,
    LogoRedIcon,
    NotificationIcon,
    MenuIcon, TelegramIcon, RedditIcon, DiscordIcon, GithubIcon, TwitterIcon, LogoGrayIcon, RocketIcon},
  data() {
    return {
      showRightMenu: false,
      showNotificationPanel: false,
      showSearchPanel: false
    }
  },
  methods: {
    hideNotificationPanel() {
      this.showNotificationPanel = false
    },
    hideSearchPanel() {
      this.showSearchPanel = false
    },
    hideRightMenu() {
      this.showRightMenu = false
    }
  }
}
</script>
