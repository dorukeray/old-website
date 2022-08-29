import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config

// prettier-ignore
export default defineNuxtConfig({
  alias: {
    'images': 'public/images',
    'scss': 'assets/scss',
  },
  target: 'static', // default is 'server'
  css: [
    'scss/styles.scss',
  ],
  typescript: {
    shim: false
  }
})
