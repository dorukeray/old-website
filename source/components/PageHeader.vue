<script lang="ts" setup>
import {
  HomeIcon,
  ToolsIcon,
} from "vue-tabler-icons";

</script>
<template>
  <div>
    <header class="header">
      <div class="__container">
        <a class="__logo" href="/">
          <img src="/images/dorukeray-M.png" title="doruk eray" />
        </a>
        <nav class="__nav">
          <NuxtLink to="/" rel="dofollow">
            <img src="https://twemoji.maxcdn.com/v/latest/svg/1f3e1.svg" width="32" height="32">
            <span>home</span>
          </NuxtLink>
          <NuxtLink to="/" rel="dofollow">
            <img src="https://twemoji.maxcdn.com/v/latest/svg/1f3e1.svg" width="32" height="32">
            <span>home</span>
          </NuxtLink>
          <NuxtLink to="/" rel="dofollow">
            <img src="https://twemoji.maxcdn.com/v/latest/svg/1f3e1.svg" width="32" height="32">
            <span>home</span>
          </NuxtLink>
          <NuxtLink to="/" rel="dofollow">
            <img src="https://twemoji.maxcdn.com/v/latest/svg/1f6ac.svg" width="32" height="32">
            <span>work</span>
          </NuxtLink>
        </nav>
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
@import "scss/styles.scss";

.header {
  padding: 0.64rem;

  .__container {
    display: flex;
    margin: 0 auto;
    padding: 1rem 1.5rem;
    max-width: $system-layout-breakpoint;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }

  .__logo {
    img {
      display: block;
      width: 20rem;
      height: auto;
      margin: 1rem auto;
    }
  }

  .__nav {
    display: flex;
    font-size: 1rem;
    line-height: 1.5rem;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: flex-end;
    align-items: center;

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: .5rem;

      border-radius: 6px;
      line-height: 1.25;
      font-size: 1.3rem;
      font-weight: 600;
      color: $reference-color-gray-60;
      text-decoration: none;

      &:hover {
        background-color: $reference-color-gray-95;
        color: $reference-color-gray-10;
        text-decoration: underline;

        svg {
          color: $reference-color-gray-50;
        }
      }

      svg {
        color: $reference-color-gray-70;
        width: 2.5rem;
        height: 2.5rem;
      }
    }
  }
}

@media (min-width: $system-viewpoint-tablet) {
  .header {
    margin: 1rem auto;

    .__logo img {
      width: 24rem;
    }
  }
}

@media (min-width: $system-viewpoint-desktop-S) {
  .header {
    .__container {
      flex-direction: row;
      align-items: center;
      gap: 3rem;
    }

    .__nav {
      width: calc(100% - 24rem);
    }
  }
}
</style>