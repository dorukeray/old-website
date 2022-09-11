<template>
  <div class="Bulletpoint">
    <span class="emoji">
      <Icon :name="icon" />
    </span>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
let { icon } = defineProps<{
  icon: string;
}>();
</script>

<style lang="scss">
@import "styles";

$iconSize: 2.75rem;

.Bulletpoint {
  display: flex;
  margin: 1.5rem .5rem;
  gap: 1rem;

  .content {
    width: calc(100% - 4rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: .25rem;


    * {
      padding: 0 !important;
      margin: 0 !important;
      text-align: left;
    }
  }

  .emoji {
    font-size: $iconSize !important;
    height: auto !important;
    width: auto !important;
    overflow: visible;

    .icon {
      width: $iconSize;
      height: $iconSize;
    }
  }
}
</style>
