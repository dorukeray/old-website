<template>
  <div class="Showcase">
    <div class="__main">
      <slot name="main"></slot>
    </div>
    <div class="__side">
      <slot name="side"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import "scss/styles.scss";

.Showcase {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  max-width: $system-layout-breakpoint;
  margin: 0 auto;
  padding: 0 1rem;

  .__main,
  .__side {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

@media (min-width: 900px) {
  .Showcase {
    flex-direction: row;

    .__main {
      width: 55%;
    }

    .__side {
      width: 45%;
    }
  }
}
</style>
