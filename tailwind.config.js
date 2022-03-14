const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './layouts/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'wd-main-background': '#F6F6F7',
        'wd-background-red': '#f93716',
        'wd-primary': '#6100D4',
        'wd-primary-dark': '#4B00A3',
        'wd-primary-light': '#F0E4FD',
        'wd-black-dark': '#313336',
        'wd-gray-2': '#696c73',
        'wd-gray-3': '#767980',
        'wd-gray-5': '#9C9FA7',
        'wd-gray-6': '#B7BAC6',
        'wd-secondary': '#FF3815',
        'wd-secondary-dark': '#B71C00',
        'wd-secondary-light': '#D62000',
        'wd-pink-light': '#feebe7',
        'wd-yellow': '#F9CA56',
        'wd-yellow-light': '#FBDD11',
        'wd-green': '#679666',
        'wd-green-light': '#8ab689',
        'wd-turquoise': '#28E1EC',
      }
    },
    fontFamily: {
      inter: "'Inter'",
      sans: ["'Grota'", ...defaultTheme.fontFamily.sans],
    },
    keyframes: {
      bounce: {
        '0%': { transform: 'scale(0.2)' },
        '10%': { transform: 'scale(1.1)' },
        '13%': { transform: 'scale(0.95)' },
        '16%': { transform: 'scale(1.05)' },
        '19%': { transform: 'scale(0.98)' },
        '20%': { transform: 'scale(1.0)' }
      },
    },
    animation: {
      bounce2: 'bounce 3s infinite ease-in-out'
    },
    backgroundImage: theme => ({
      'hero-carpet': "url('assets/images/homepage/carpet.svg')",
      'game-pattern': "url('assets/images/homepage/game_pattern.png')",
      'game-pattern-red': "linear-gradient(rgba(183, 28, 0, 0.9),rgba(183, 28, 0, 0.9)),url('assets/images/homepage/game_pattern.png')",
    })
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
