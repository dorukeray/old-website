<script setup>
useHead({
  titleTemplate: (title) => title,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: `doruk eray's personal website.` }
  ],
  bodyAttrs: {
    class: 'body'
  },
  script: [{
    src: "https://twemoji.maxcdn.com/v/latest/twemoji.min.js",
    crossorigin: "anonymous"
  }]
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
