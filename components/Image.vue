<template>
  <div>
    <img :src="source" :alt="title" :title="title" />
  </div>
</template>

<script setup lang="ts">
let { source, title } = defineProps<{
  source: string;
  title?: string;
}>();
</script>

<style lang="scss" scoped>
@import "scss/styles.scss";
</style>