import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config

// prettier-ignore
export default defineNuxtConfig({
  alias: {
    'images': 'public/images',
    'scss': 'assets/scss',
  },
  ssr: false,
  target: 'static', // default is 'server'
  typescript: {
    shim: false
  },
  modules: [
    'nuxt-icon'
  ]
})
