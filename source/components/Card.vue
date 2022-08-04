<template>
  <div class="Card">
    <div>
      <slot name="badge"></slot>
      <p v-if="tag" class="tag">{{ tag }}</p>
    </div>
    <h4 v-if="title" class="title">{{ title }}</h4>
    <p v-if="message" class="message">{{ message }}</p>
    <slot name="content"></slot>
  </div>
</template>

<script setup lang="ts">
// NOTE: badge and tag should not be together
const { tag, title, message }
  = defineProps<{
    tag?: string;
    title?: string;
    message?: string;
  }>();
</script>

<style lang="scss" scoped>
@import "scss/styles.scss";

.Card {
  display: flex;
  flex-direction: column;
  gap: .5rem;

  background-color: $system-color-surface;
  border: .25rem solid $reference-color-gray-95;
  padding: .75rem 1rem 1rem;
  border-radius: $system-layout-curve;

  p {
    font-size: 1.15rem !important;
    line-height: 1.4rem !important;
    padding: 0 !important;
    margin: 0 !important;
  }

  .tag {
    display: inline-block !important;

    padding: .25rem .5rem .35rem !important;
    border-radius: .5rem;
    font-weight: 800;
    font-size: 1.25rem !important;
    background-color: $reference-color-gray-90;
    color: $reference-color-gray-60;
    clear: right;
    margin-bottom: .25rem;
  }

  .title {
    font-size: 1.5rem !important;
    line-height: 1.75rem !important;
    font-weight: 700;
    padding: 0 !important;
    margin: 0 !important;
    text-align: left !important;
  }
}
</style>