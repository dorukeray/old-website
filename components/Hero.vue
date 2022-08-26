<template>
  <div>
    <div :class="'Hero' + attrs">
      <div class="__container">
        <div>
          <slot name="head"></slot>
        </div>
        <h1 class="title">{{ title }}</h1>
        <h2 class="tagline">{{ tagline }}</h2>
        <p class="statement">
          {{ statement }}
        </p>
        <div class="__more">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const { title, tagline, statement, center }
  = defineProps<{
    title: string,
    tagline: string,
    statement: string,
    center?: boolean,
  }>();

const attrs = (center)
  ? " --center"
  : "";
</script>

<style lang="scss" scoped>
@import "scss/styles.scss";

.Hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  max-width: 36rem;
  margin: 0 auto;
  padding: 0;

  .title,
  .statement,
  .tagline {
    text-align: left !important;
  }

  &.--center {
    .__container>* {
      text-align: center !important;
    }
  }

  .__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;
    gap: .25rem;

    max-width: 36rem;
    margin: 0 auto;
    padding: 0;
    padding-left: .75rem !important;
    padding-right: .25rem !important;

    >* {
      text-align: left !important;
      width: 100% !important;
    }
  }

  .title {
    display: block !important;
    margin: 0;
    padding: 0;
    font-size: 1.85rem;
    font-weight: 800;
    color: $reference-color-gray-80;
  }

  .tagline {
    margin: 0;
    padding: 0;
    font-size: 1.95rem;
    line-height: 2rem;
    font-weight: 800;
    color: $reference-color-gray-10;
  }

  .statement {
    margin: 0;
    padding: 0;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 125%;
    color: $reference-color-gray-60;
  }

  p {
    margin-bottom: .5rem;
  }
}

@media (mid-width: 900px) {
  .Hero {
    .__container {
      padding-left: 1rem !important;
    }
  }
}

@media (min-width: $system-viewpoint-desktop-S) {
  .Hero {
    .__container {
      text-align: left;
      align-items: flex-start;
    }
  }
}
</style>
