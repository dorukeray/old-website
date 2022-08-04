<script setup>
useHead({
  titleTemplate: (title) => `${title} - prism`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: `prism: dorkodu's styleguide` }
  ],
  bodyAttrs: {
    class: 'body'
  }
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
