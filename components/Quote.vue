<script setup lang="ts">

let { message, owner } = defineProps<{
  message: string;
  owner?: string;
}>();

</script>

<template>
  <div>
    <blockquote class="quote">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none"
        stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
        <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
      </svg>
      <p>{{ message }}</p>
      <p v-if="owner" class="owner">{{ "— " + owner }}</p>
    </blockquote>
  </div>
</template>

<style lang="scss" scoped>
@import "scss/styles.scss";

.quote {
  width: calc(100% - 1rem);
  display: block;
  border-left: .5rem solid $reference-color-gray-90;
  border-radius: 3px;
  margin: 1rem auto;
  max-width: 32rem;
  background-color: unset;
  padding: 0;
  overflow: hidden !important;

  >h1,
  >h2,
  >h3,
  >h4,
  >h5 {
    text-align: left !important;
    margin: .5rem !important;
    color: $reference-color-gray-40  !important;
  }

  >p {
    display: block;
    padding: .5rem 1rem !important;
    margin-bottom: 0;
    font-size: 1.15rem !important;
    line-height: 1.5rem !important;
    font-weight: 600;
    background: none;
    color: $reference-color-gray-60;

    a {
      color: $reference-color-gray-30;
      text-decoration: underline;

      &:hover {
        color: $reference-color-gray-10;
        text-decoration: underline;
      }
    }
  }

  >svg {
    display: block;
    width: 3rem;
    height: 3rem;
    margin: 0 .5rem;
    stroke: $reference-color-gray-70;
  }

  .owner {
    font-weight: 700;
    font-size: 1.25rem !important;
    color: $reference-color-gray-40;
  }
}
</style>