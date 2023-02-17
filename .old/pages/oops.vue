<script setup lang="ts">
const page = {
  title: "oops!",
  tagline: "something's gone wrong :(",
  statement: `you shouldn't be here. you can use the links to surf the website, or just go back to the home page.`,
  picture: {
    source: "/images/zombie.png",
  },
};

definePageMeta({
  title: "oops!",
  description: "something's gone wrong :(",
  keywords: "oops, 404, not found",
});
</script>

<template>
  <main>
    <Showcase style="margin-top: 0;">
      <template #main>
        <Hero :title="page.title" :tagline="page.tagline" :statement="page.statement" style="margin-top: 0 !important;">
          <template #head>
          </template>
          <template #content>
            <div class="button-container" style="padding: 0;">
              <Button type="fill" link="/">back to home ↗</Button>
            </div>
          </template>
        </Hero>
      </template>
      <template #side>
        <Picture :source="page.picture.source" />
      </template>
    </Showcase>
    <Break />

    <PageLegend />
  </main>
</template>
