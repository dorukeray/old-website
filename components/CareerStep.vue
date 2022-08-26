<template>
  <div class="CareerStep">
    <p v-if="time" class="time">{{ time }}</p>
    <p>
      <span v-if="title" class="title">{{ title }}</span>
      <span v-if="location" class="location">{{ location }}</span>
    </p>
    <p v-if="description">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
const { time, title, location, description }
  = defineProps<{
    time: string;
    title: string;
    location: string;
    description: string;
  }>();
</script>

<style lang="scss" scoped>
@import "scss/styles.scss";

.CareerStep {
  display: flex;
  flex-direction: column;
  gap: .25rem;
  margin: 1rem 0;

  p {
    font-size: 1.05rem;
    margin: 0;
  }

  .time {
    font-weight: 600;
    color: $reference-color-gray-70;
  }

  .title {
    font-weight: 700;
    font-size: 1.25rem;
    margin-right: 1rem;
  }

  .location {
    font-weight: 500;
    color: $reference-color-gray-60;
  }
}
</style>
