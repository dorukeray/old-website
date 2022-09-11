<script>
</script>
<template>
  <div>
    <PageHeader />
    <slot />
    <PageFooter />
  </div>
</template>
<style lang="scss">
@import "styles";

.--dorkodian {
  background-image: linear-gradient(48deg, hsl(100, 65%, 90%) 10%, hsl(125, 65%, 65%) 65%, hsl(160, 80%, 85%) 85%);
}

.icon {
  margin-left: .1rem;
  margin-right: .1rem;
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
    gap: .15rem;
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
    text-decoration: underline;

    &:hover {
      color: $reference-color-blue-30;
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
