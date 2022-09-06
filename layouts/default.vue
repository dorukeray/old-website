<script>
</script>
<template>
  <div>
    <Page:Header />
    <slot />
    <Page:Footer />
  </div>
</template>
<style lang="scss">
@import "scss/styles.scss";

.--dorkodian {
  background-image: linear-gradient(48deg, hsl(100, 65%, 90%) 10%, hsl(125, 65%, 60%) 55%, hsl(160, 80%, 85%) 85%);
}

.hashtag {
  color: $reference-color-blue-60;
  font-weight: 500;
  font-size: 1.15rem;
  line-height: 1.65rem;
  margin-bottom: .5rem !important;
}

.IconItem {
  display: flex;
  align-items: center;
  gap: .75rem;

  div {
    display: flex;
    flex-direction: column;
    gap: .25rem;
  }

  svg {
    color: $reference-color-gray-70;
    width: 2.25rem;
    height: 2.25rem;
    stroke-width: 2.25;
  }

  a {
    display: inline !important;
    font-size: 1.35rem;
    color: $reference-color-blue-50;
    font-weight: 500;

    &:hover {
      color: $reference-color-blue-30;
      text-decoration: underline;
    }
  }

  span {
    font-size: 1.15rem;
    color: $system-color-text;
  }
}

.Showcase {
  article {
    padding: 0;

    .section-heading {
      color: $reference-color-gray-60;
      text-align: left;
      padding: 0 1rem;
    }

    p {
      padding: 0 1rem;
    }
  }
}

ul {
  display: flex;
  flex-direction: column;
  gap: .25rem;

  li {
    font-size: 1.15rem !important;

  }
}
</style>
