<script setup lang="ts">
const hero = {
  title: "404",
  tagline: "something's gone wrong :(",
  statement: `just use the links to surf the website.`,
  picture: {
    source: "/images/doruk--green.png",
    title: "pixelated, natively digital 🤩"
  },
};
</script>

<template>
  <main>
    <Showcase style="margin-top: 0;">
      <template #main>
        <Hero :title="hero.title" :tagline="hero.tagline" :statement="hero.statement" style="margin-top: 0 !important;">
          <template #head>
          </template>
          <template #content>
            <div class="button-container" style="padding: 0;">
              <Button type="fill" link="/about">sign up</Button>
              <Button type="tonal" link="/about">log in</Button>
            </div>
          </template>
        </Hero>

      </template>
      <template #side>
        <Picture :source="hero.picture.source" :title="hero.picture.title" />
      </template>
    </Showcase>

    <Break />
    <Break />
    <Break />
    <Break />
  </main>
</template>

<style lang="scss" scoped>
</style>