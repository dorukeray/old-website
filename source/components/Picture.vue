<template>
  <div>
    <div class="picture">
      <img :src="source" :alt="title" :title="title" />
      <p v-if="title !== ``">{{ title }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">

let { source, title } = defineProps<{
  source: string;
  title?: string;
}>();

if (!title) title = "";
</script>

<style lang="scss" scoped>
@import "scss/styles.scss";

.picture {
  display: block;
  text-align: center !important;
  margin: 0 auto !important;

  img {
    border: 0;
    max-height: 24rem;
    height: auto;
    border-radius: .5rem;
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
  .picture {
    max-width: 95%;
  }
}

@media (min-width: $system-viewpoint-tablet) {
  .picture {
    max-width: 36rem;
  }
}
</style>