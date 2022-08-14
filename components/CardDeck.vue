<template>
  <div :class="'CardDeck' + attrs">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
const { columns }
  = defineProps<{
    columns?: number;
  }>();

const attrs = (columns) ? " --" + columns : "";
</script>
<style lang="scss">
@import "scss/styles.scss";

.CardDeck {
  display: grid;
  padding: 1rem;
  row-gap: 1rem;
  column-gap: 1rem;
  grid-gap: 1rem 1rem;
  grid-auto-rows: minmax(6rem, auto);
  grid-template-columns: 1fr;
  max-width: 76rem;
  margin: 0 auto;

  &>.Card {
    max-width: 28rem;
    margin: 0 auto;
  }
}

@media (min-width: $system-viewpoint-tablet) {
  .CardDeck {
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }
}

@media (min-width: 1200px) {
  .CardDeck {
    grid-template-columns: 1fr 1fr 1fr;

    &.--2 {
      grid-template-columns: 1fr 1fr;
    }
  }
}

@media (min-width: 1600px) {
  .CardDeck {
    grid-template-columns: 1fr 1fr 1fr 1fr;

    &.--2 {
      grid-template-columns: 1fr 1fr;
    }

    &.--3 {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}
</style>
