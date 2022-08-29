<script setup>
const route = useRoute();

useHead({
  titleTemplate: `${route.meta.title} — doruk eray`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'title', content: `${route.meta.title}` },
    { name: 'description', content: `${route.meta.description}` },
    { name: 'keywords', content: `${route.meta.keywords}` },
    // open graph meta tags
    { name: 'og:type', content: `website` },
    { name: 'og:url', content: `${route.fullPath}` },
    { name: 'og:title', content: `${route.meta.title}` },
    { name: 'og:description', content: `${route.meta.description}` },
    // twitter meta tags
    { name: 'twitter:card', content: `summary` },
    { name: 'twitter:url', content: `${route.fullPath}` },
    { name: 'twitter:title', content: `${route.meta.title}` },
    { name: 'twitter:description', content: `${route.meta.description}` },
  ],
  bodyAttrs: {
    class: 'body'
  },
  script: [{
    src: "https://twemoji.maxcdn.com/v/latest/twemoji.min.js",
    crossorigin: "anonymous"
  }],
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

@import "scss/base/base.scss";
@import "scss/base/fonts.scss";
@import "scss/base/typography.scss";

@import "scss/blame.scss";

@import "scss/vendor/normalize.scss";
</style>
