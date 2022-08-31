<script setup lang="ts">
const page = {
  title: "oops!",
  tagline: "something's gone wrong :(",
  statement: `you shouldn't be here. you can use the links to surf the website, or just go back to the home page.`,
  picture: {
    source: "/images/coffee.png",
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
    <article class="dorkodian-hero">
      <Bulletpoint icon="🔗">
        <h3>some useful links</h3>
        <ul style="margin: .25rem .5rem !important;">
          <li>
            <p><b>🐦</b>&nbsp; i tweet often, <a href="https://twitter.com/d0rukeray">follow me on twitter</a>.</p>
          </li>
          <li>
            <p><b>📖</b>&nbsp; if you are curious, <a href="/story">read my story</a>.</p>
          </li>
          <li>
            <p><b>💾</b>&nbsp; see <a href="/work">my work</a> page for my portfolio & resume.</p>
          </li>
          <li>
            <p><b>💬</b>&nbsp; see <a href="/ideas">ideas</a> page for my opinions, words etc.</p>
          </li>
          <li>
            <p><b>🙏🏻</b>&nbsp; see <a href="/ideas#thanks">thanks</a> section for my attribution.</p>
          </li>
        </ul>
      </Bulletpoint>
    </article>
  </main>
</template>
