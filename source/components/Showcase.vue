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
}

@media (min-width: 900px) {
  .Showcase {
    flex-direction: row;

    .__main {
      width: 55%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .__side {
      width: 45%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>