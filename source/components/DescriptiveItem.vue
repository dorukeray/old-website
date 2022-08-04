<template>
  <div class="descriptive-item">
    <span class="__badge">
      <slot></slot>
    </span>
    <div class=".__contents">
      <dt>{{ title }}</dt>
      <dd>{{ description }}</dd>
    </div>
  </div>
</template>

<script setup lang="ts">
const { title, description } = defineProps<{
  title: string;
  description: string;
}>();
</script>

<style lang="scss" scoped>
@import "scss/styles.scss";

.descriptive-item {
  display: flex;
  flex-direction: row;
  gap: 1rem;

  .__badge {
    display: inline-block !important;
  }

  dt {
    font-weight: 700;
    font-size: 1.25rem !important;
    line-height: 1.5rem;
    color: $reference-color-gray-10;

    .--bulletpoint {
      color: $reference-color-gray-70;
    }
  }

  dd {
    color: $reference-color-gray-50;
    font-weight: 450;
    padding-top: .25rem;
    line-height: 1.25;
    font-size: 1.15rem;
  }
}
</style>