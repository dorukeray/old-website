<template>
  <div>
    <div class="PostCard">
      <div class="__container">
        <div class="__badge">
          <span class="__token">{{ data.token }}</span>
          <span class="__divider"></span>
          <span class="__value">{{ data.value }}</span>
        </div>
        <div class="__main">
          <div>
            <h2 v-if="data.tag" class="__tag">{{ data.tag }}</h2>
          </div>
          <h1 v-if="data.title" class="__title">{{ data.title }}</h1>
          <p v-if="data.content" class="__content">{{ data.content }}</p>
          <a v-if="data.person" class="__person">
            <img alt="blog" :src="data.person.avatar" class="__avatar">
            <span class="__about">
              <span class="__name">{{ data.person.name }}</span>
              <span class="__role">{{ data.person.role }}</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data }
  = defineProps<{
    data: {
      token: string;
      value: string;
      tag: string;
      title: string;
      content: string;
      person: {
        name: string;
        avatar: string;
        role?: string;
      };
    };
  }>();
</script>

<style lang="scss" scoped>
@import "scss/styles.scss";

.PostCard {
  padding: 2rem 1rem;
  max-width: 32rem;

  .__container {
    display: flex;
    align-items: flex-start;
    height: 100%;
  }

  .__badge {
    display: flex;
    line-height: 1;
    text-align: center;
    flex-direction: column;
    flex-shrink: 0;
    width: 3rem;
    gap: .75rem;

    .__token {
      color: $reference-color-gray-60;
      font-weight: 600;
      font-size: 1.15rem;
      line-height: 1.15rem;
    }

    .__divider {
      display: block;
      width: 3rem;
      height: .25rem;
      background-color: $reference-color-gray-90;
      border-radius: .25rem;
    }

    .__value {
      color: #1F2937;
      font-size: 1.25rem;
      line-height: 1.75rem;
      font-weight: 700;
      line-height: 1;
    }
  }

  .__main {
    display: flex;
    flex-direction: column;
    padding-left: 1.5rem;
    flex-grow: 1;
    gap: .5rem;
  }

  .__tag {
    display: inline-block;
    margin: 0;
    padding: .25rem .5rem;
    border-radius: .4rem;
    color: $reference-color-green-40;
    background-color: $reference-color-green-90;
    font-size: 1.15rem;
    font-weight: 750;
    letter-spacing: 0.025rem;
    text-align: left;
  }

  .__title {
    margin: 0 !important;
    color: $reference-color-gray-10;
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 700;
    text-align: left;
    padding: 0;
  }

  .__content {
    margin: 0 !important;
    padding: 0 !important;
    text-align: left;
    font-size: 1.15rem;
  }

  .__person {
    display: inline-flex;
    align-items: center;
    padding: 0;
    margin: 0;
    margin-top: .25rem;

    .__avatar {
      object-fit: cover;
      object-position: center;
      flex-shrink: 0;
      width: 3rem;
      height: 3rem;
      border-radius: 9999px;
    }

    .__about {
      display: flex;
      padding-left: 0.75rem;
      flex-direction: column;
      flex-grow: 1;

      .__name {
        color: $reference-color-gray-40;
        font-size: 1.15rem;
        font-weight: 700;
      }

      .__role {
        color: $reference-color-gray-70;
        font-size: 1rem;
        font-weight: 600;
      }
    }
  }
}
</style>