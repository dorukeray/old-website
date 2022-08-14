<template>
  <div>
    <div class="Testimonial">
      <div class="__container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
          stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 15h15" />
          <path d="M21 19h-15" />
          <path d="M15 11h6" />
          <path d="M21 7h-6" />
          <path d="M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" />
          <path d="M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" />
        </svg>
        <p>{{ quote }}</p>
        <span class="__divider"></span>
        <h4 class="__name">{{ name }}</h4>
        <p v-if="title" class="__title">{{ title }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { name, title, quote }
  = defineProps<{
    quote: string;
    name: string;
    title?: string;
  }>();
</script>

<style scoped lang="scss">
@import "scss/styles.scss";

.Testimonial {
  width: 100%;
  padding: 2rem 1rem;
  max-width: 48rem;

  .__container {
    text-align: center;
    width: 100%;
  }

  svg {
    display: inline-block;
    margin-bottom: 1rem;
    margin-right: 1rem;
    color: $reference-color-gray-80;
    width: 4rem;
    height: 4rem;
  }

  p {
    font-size: 1.15rem;
    line-height: 1.6rem;
    color: $reference-color-gray-20;
    padding: 0;
    margin: 0;
  }

  .__divider {
    display: inline-block;
    margin: 1.5rem 0 1rem;
    background-color: $system-color-primary-50;
    width: 4.8rem;
    height: 0.4rem;
    border-radius: 1rem;
  }

  .__name {
    padding: 0;
    margin: .25rem auto;
    color: $reference-color-gray-10;
    font-size: 1.35rem;
    font-weight: 700;
    text-align: center;
    max-width: 16rem;
  }

  .__title {
    padding: 0;
    margin: .25rem auto;
    color: $reference-color-gray-70;
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 600;
    text-align: center;
    max-width: 24rem;
  }
}
</style>