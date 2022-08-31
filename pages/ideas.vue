<script setup lang="ts">
let page = {
  title: "ideas",
  tagline: "i feel, therefore i am human.",
  statement: `a collection of my thoughts, feelings, memories, inspirations, sayings and thanks. summarized.`,
  picture: {
    source: "/images/love.png",
  },
};

definePageMeta({
  title: "ideas",
  description: "a collection of my thoughts, feelings, memories, inspirations, sayings and thanks. summarized for you :)",
  keywords: "ideas, thoughts, doruk eray, memories",
});

const quotes: [string, string][] = [
  ["", ""],
  ["", ""],
  ["", ""],
  ["", ""],
];
</script>

<template>
  <main>
    <Showcase style="margin-top: 0;">
      <template #main>
        <Hero :title="page.title" :tagline="page.tagline" :statement="page.statement">
          <template #content>
            <p style="font-size: 1.65rem;">
              🧠💬✍🏻📣⏳💌
            </p>
          </template>
        </Hero>

      </template>
      <template #side>
        <Picture :source="page.picture.source" />
      </template>
    </Showcase>
    <Break />
    <article>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nulla, repellat nostrum optio maxime nobis
        vitae saepe, aliquam autem enim libero? Quo, suscipit dolores? Odio magnam labore quod voluptatum ad vero quo
        repellat ipsam accusamus omnis aspernatur aliquam praesentium, illum adipisci rem officia asperiores
        exercitationem doloremque reprehenderit blanditiis cupiditate? Quis beatae dolor ipsa sapiente. Explicabo, quis
        in voluptatum iste minus aut consectetur. Consectetur, odio et fuga aliquid quo voluptates pariatur aspernatur
        asperiores. Quidem eveniet iure voluptas sit ducimus! Animi totam magni nostrum aut eius iste, sed nam est cum,
        dicta reiciendis provident obcaecati sint incidunt laboriosam similique, laborum culpa maiores?</p>
    </article>
    <article>
      <CardDeck :columns="3">
        <!-- print every quote -->
        <Quote v-for="quote in quotes" :message="quote[0]" :owner="quote[1]" />
      </CardDeck>
    </article>
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
    <Break />
  </main>
</template>

<style lang="scss" scoped>
</style>
