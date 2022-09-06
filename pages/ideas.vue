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
  [`And, when you want something, all the universe conspires in helping you to achieve it.`, "paulo coelho"],
  ["Have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary.", "steve jobs"],
  ["A man is a success if he gets up in the morning and gets to bed at night, and in between he does what he wants to do.", "Bob Dylan"],
  ["If something is important enough, you should still do it even if the odds are not in your favor.", "Elon Musk"],
  [`Victory is for those who can say "Victory is mine". Success is for those who can begin saying "I will succeed" and say "I have succeeded" in the end.`, "Mustafa Kemal Atatürk"],
  ["You have to let it all go, Neo. Fear, doubt, and disbelief. Free your mind.", "the matrix"],
  ["The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.", "Albert Camus"],
  ["tongue-tied and twisted, just an earth-bound misfit, i.", "pink floyd"],
  ["to be great is to be misunderstood.", "Ralph Waldo Emerson"],
];
</script>

<template>
  <main>
    <Showcase style="margin-top: 0;">
      <template #main>
        <Hero :title="page.title" :tagline="page.tagline" :statement="page.statement">
          <template #content>
            <p style="font-size: 2rem;">
              <Icon name="twemoji:brain" />
              <Icon name="noto:speech-balloon" />
              <Icon name="fluent-emoji-flat:writing-hand-light" />
              <Icon name="twemoji:megaphone" />
              <Icon name="twemoji:love-letter" />
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
        ...and i love being alive. i somehow feel wonderful, being connected to other people,
        and it's really hard to choose just a few from a billion things which influenced me.
      </p>
      <p>so please try to check this page often for inspirations!
        <Icon name="twemoji:sparkles" size="24" />
      </p>
    </article>
    <article>
      <h3>
        <Icon name="noto:speech-balloon" size="32" /> quotes
      </h3>
    </article>

    <CardDeck :columns="3">
      <!-- print every quote -->
      <Quote v-for="quote in quotes" :message="quote[0]" :owner="quote[1]" />
    </CardDeck>

    <article id="thanks">
      <h2>thanks</h2>
    </article>

    <Page:Legend />

    <Break />
  </main>
</template>

<style lang="scss" scoped>
</style>
