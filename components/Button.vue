<template>
  <a :class="className" :href="link">
    <slot></slot>
  </a>
</template>

<script lang="ts" setup>
const { type, link }
  = defineProps<{
    type?: string;
    link?: string;
  }>()

let typeSuffix = type
  ? " --" + type
  : "";

let className = "button" + typeSuffix;
</script>

<style lang="scss">
@import "scss/styles.scss";

.button {
  display: inline-flex;
  padding: .5rem 1.35rem;
  border: 0 !important;
  border-radius: 1.25rem;
  line-height: 130%;
  font-size: 1.36rem;
  font-weight: 700;
  background-color: $reference-color-gray-80;
  color: $reference-color-gray-40;
  cursor: pointer;
  text-decoration: none !important;


  &:hover,
  &:focus {
    background-color: $reference-color-gray-90;
    color: $reference-color-gray-50;
  }

  //? Primary Button
  &.--fill {
    background-color: $system-color-primary-50;
    color: $system-color-primary-100;

    &:hover,
    &:focus {
      background-color: $system-color-primary-60;
    }
  }

  //? Secondary Button
  &.--tonal {
    background-color: $system-color-primary-80;
    color: $system-color-primary-30;

    &:hover,
    &:focus {
      color: $system-color-primary-40;
      background-color: $system-color-primary-90;
    }
  }

  //? Outlined Button
  &.--outline {
    background-color: unset;
    padding: .3rem 1.4rem;
    border: .2rem solid $system-color-primary-70  !important;
    color: $system-color-primary-40;

    &:hover,
    &:focus {
      color: $system-color-primary-30;
      border-color: $system-color-primary-60;
      background-color: $system-color-primary-90;
    }
  }

  //? Text-only Button
  &.--text {
    background-color: unset;
    color: $system-color-primary-40;

    &:hover,
    &:focus {
      color: $system-color-primary-60;
    }
  }
}
</style>
