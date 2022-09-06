<template>
  <article>
    <div class="HeroMap --dorkodian">
      <h3 style="margin-bottom: 1rem;">some useful links</h3>
      <div>
        <p>
          <Icon name="twemoji:house-with-garden" size="30" />&nbsp;&nbsp;
          see <a href="/story">home</a> page for tl;dr;
        </p>
        <p>
          <Icon name="twemoji:open-book" size="30" />&nbsp;&nbsp;
          read <a href="/story">my story</a>, if you are curious.
        </p>
        <p>
          <Icon name="twemoji:floppy-disk" size="30" />&nbsp;&nbsp;
          see <a href="/work">my work</a> page for my portfolio & resume.
        </p>
        <p>
          <Icon name="twemoji:brain" size="30" />&nbsp;&nbsp;
          see <a href="/ideas">ideas</a> page for my inspirations.
        </p>
        <p>
          <Icon name="twemoji:folded-hands-light-skin-tone" size="30" />&nbsp;&nbsp;
          see <a href="/ideas#thanks">thanks</a> section for my attribution.
        </p>
        <p>
          <Icon name="noto:bird" size="34" />&nbsp;
          i tweet often, <a href="https://twitter.com/d0rukeray">follow me on twitter</a>.
        </p>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
@import "scss/styles.scss";

.HeroMap {
  border-radius: 1rem;
  padding: 1rem 2.5rem;

  h3 {
    text-align: left;
    padding: 0;
    margin: .5rem 0;
    padding-bottom: .5rem;
    border-bottom: .25rem dashed $system-color-neutral-100;
  }

  div p {
    margin: .25rem 0;
    padding: 0;
  }

  * {
    text-shadow: hsl(125, 65%, 95%) 2px 1px 1px !important;
  }

  a {
    color: $system-color-secondary-50;

    &:hover {
      color: $system-color-secondary-30;
    }
  }
}
</style>
