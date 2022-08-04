import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config

// prettier-ignore
export default defineNuxtConfig({
  alias: {
    'images': 'public/images',
    'scss': 'assets/scss',
  },
  css: [
    'scss/styles.scss',
  ],
  // modules
  modules: ['@nuxtjs/color-mode'],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode',
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
