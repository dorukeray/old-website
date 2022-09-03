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
  [`the simple things are also the most extraordinary things, and only the wise can see them.`, "paulo coelho"],
  ["tongue-tied and twisted, just an earth-bound misfit, i.", "pink floyd"],
  [`so throw off the bowlines. sail away from the safe harbor. catch the trade winds in your sails. explore. dream. discover.`, "?"],
  ["write the book you want to read.", "?"],
  ["you know, one of the tragedies of real life is that there is no background music.", "annie proulx"],
  ["you only live once, but if you do it right, once is enough.", "mae west"],
  ["the function of prayer is not to influence God, but rather to change the nature of the one who prays.", "søren kierkegaard"]
];
</script>

<template>
  <main>
    <Showcase style="margin-top: 0;">
      <template #main>
        <Hero :title="page.title" :tagline="page.tagline" :statement="page.statement">
          <template #content>
            <p style="font-size: 1.65rem;">
              🧠💬✍🏻📣💌
            </p>
          </template>
        </Hero>
      </template>
      <template #side>
        <Picture :source="page.picture.source" />
      </template>
    </Showcase>
    <article>
      <h2>i love being myself...</h2>
      <p>
        ...and i love being alive. i'm somehow wonderfully connected to other human beings,
        and it's really hard to choose just a few from a billion things which influenced me.
      </p>
      <p>so please try to check this page often for inspirations! ✨</p>
    </article>
    <article>
      <h3>💬 quotes</h3>
    </article>

    <CardDeck :columns="3">
      <!-- print every quote -->
      <Quote v-for="quote in quotes" :message="quote[0]" :owner="quote[1]" />
    </CardDeck>

    <article id="thanks">
      <h2>thanks</h2>
    </article>
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
