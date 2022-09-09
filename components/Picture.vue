<script setup lang="ts">
let { source, title } = defineProps<{
  source: string;
  title?: string;
}>();
</script>

<template>
  <div class="Picture">
    <img :src="source" :alt="title" :title="title" />
    <p v-if="title && title !== ``">{{ title }}</p>
  </div>
</template>

<style lang="scss" scoped>
@import "scss/styles.scss";

.Picture {
  display: block;
  text-align: center !important;
  margin: 0 auto !important;

  img {
    border: 0;
    max-height: 24rem;
    height: auto;
    border-radius: $system-layout-curve;
  }

  p {
    font-size: 1.15rem !important;
    margin: 0.5rem;
    text-align: center !important;
    color: $reference-color-gray-70;
    padding: 0 !important;
    font-weight: 500;
  }

  &.--doodle {
    max-width: 90%;
  }

}

@media (min-width: $system-viewpoint-mobile-XL) {
  .Picture {
    max-width: 95%;
  }
}

@media (min-width: $system-viewpoint-tablet) {
  .Picture {
    max-width: 36rem;
  }
}
</style>
