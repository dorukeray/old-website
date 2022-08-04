<script lang="ts" setup>
const { action, title, link } = defineProps<{
  action: string;
  title: string;
  link: string;
}>();
</script>

<template>
  <a class="link-button" :href="link">
    <span class="__action">{{ action }}</span>
    <p class="__title">{{ title }}</p>
  </a>
</template>

<style lang="scss" scoped>
@import "scss/styles.scss";

.link-button {
  display: inline-block;
  margin: .5rem 0;
  margin-right: .5rem;
  padding: .25rem 1.5rem .25rem 1rem;
  border-radius: .75rem;
  border: .25em solid $reference-color-gray-95;
  min-width: 12.5rem;
  text-align: left;
  color: $reference-color-gray-70  !important;

  &:hover,
  &:focus {
    border-color: $reference-color-gray-90  !important;
    text-decoration: underline;

    .__action {
      color: $reference-color-gray-60  !important;
    }
  }

  .__title {
    display: block;
    font-size: 1.35rem;
    line-height: 1.5rem;
    margin: .25rem 0;
    padding: 0;
    font-weight: 700;
    color: $reference-color-gray-10  !important;
  }

  .__action {
    display: block;
    color: $reference-color-gray-70  !important;
    font-size: 1.15rem;
    font-weight: 700;
    margin: .25rem 0;
  }
}
</style>