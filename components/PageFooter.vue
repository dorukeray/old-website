<script lang="ts" setup>
import {
  BrandTwitterIcon,
  BrandTelegramIcon,
  BrandGithubIcon,
  BrandInstagramIcon,
  MailOpenedIcon,
} from "vue-tabler-icons";
</script>
<template>
  <footer class="footer">
    <div class="__wrapper">
      <div class="__content">
        <p class="__statement"><b>&copy; 2022</b> — a <b>doruk eray</b> masterpiece.</p>
        <nav>
          <a href="https://twitter.com/d0rukeray">
            <BrandTwitterIcon />
          </a>
          <a href="https://github.com/dorukeray">
            <BrandGithubIcon />
          </a>
          <a href="https://instagram.com/d0rukeray">
            <BrandInstagramIcon />
          </a>
          <a href="https://t.me/dorukeray">
            <BrandTelegramIcon />
          </a>
          <a href="mailto:doruk@dorkodu.com">
            <MailOpenedIcon />
          </a>
        </nav>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "scss/styles.scss";

.footer {
  width: 100%;
  background-color: $reference-color-gray-90;
  border-top: 1rem solid $reference-color-gray-95;

  .__wrapper {
    padding: 1.5rem 1rem;
    max-width: $system-layout-breakpoint;
  }

  .__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    padding: 0 .5rem;

    p {
      display: inline-block;
      line-height: 125%;
      margin: 0;
      font-size: 1.2rem;
      color: $reference-color-gray-60;
      font-weight: 500;

      &.--statement {
        float: left;
      }
    }
  }

  nav {
    display: flex;
    gap: .75rem;
    align-items: center;

    a {
      width: 2.25rem;
      height: 2.25rem;

      svg {
        stroke-width: 2.5;
        color: $reference-color-gray-60;
        width: 100%;
        height: 100%;
      }

      &:hover {
        svg {
          color: $reference-color-gray-70;
        }
      }
    }
  }
}

@media (min-width: $system-viewpoint-mobile-XL) {
  .footer {
    .__wrapper {
      width: 80%;
      margin: 0 auto;
      padding-left: 0;
      padding-right: 0;
    }
  }
}

@media (min-width: $system-viewpoint-tablet) {
  .footer {
    .__content {
      flex-direction: row;
      align-items: center;
    }

    nav {
      align-self: flex-end;
    }
  }
}
</style>