<script setup>
const route = useRoute();

const WEBSITE_ROOT = "https://doruk.dorkodu.com";

useHead({
  titleTemplate: `${route.meta.title} — doruk eray`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  charset: 'utf-8',
  meta: [
    { name: 'title', content: `${route.meta.title}` },
    { name: 'description', content: `${route.meta.description}` },
    { name: 'keywords', content: `${route.meta.keywords}` },
    // open graph meta tags
    { name: 'og:type', content: `website` },
    { name: 'og:url', content: `${WEBSITE_ROOT + route.fullPath}` },
    { name: 'og:title', content: `${route.meta.title}` },
    { name: 'og:description', content: `${route.meta.description}` },
    // twitter meta tags
    { name: 'twitter:card', content: `summary` },
    { name: 'twitter:url', content: `${WEBSITE_ROOT + route.fullPath}` },
    { name: 'twitter:title', content: `${route.meta.title}` },
    { name: 'twitter:description', content: `${route.meta.description}` },
  ],
  bodyAttrs: {
    class: 'body'
  },
  htmlAttrs: {
    lang: "en"
  },
  script: [],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: 'favicon.png' }
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@import "scss/styles.scss";
</style>
