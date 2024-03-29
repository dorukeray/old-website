// prettier-ignore
export default defineNuxtConfig({
  alias: {
    'images': 'public/images',
    'scss': 'assets/scss',
    'styles': 'assets/scss/styles.scss',
  },
  ssr: false,
  target: 'static', // default is 'server'
  css: [
    "@/assets/scss/styles.scss"
  ],
  typescript: {
    shim: false
  },
  modules: [
    'nuxt-icon'
  ]
})
