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
  [`The biggest battle is the war against ignorance.`, "Mustafa Kemal Atatürk"],
  ["You have to let it all go, Neo. Fear, doubt, and disbelief. Free your mind.", "the matrix"],
  ["The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.", "Albert Camus"],
  ["tongue-tied and twisted, just an earth-bound misfit, i.", "pink floyd"],
  ["to be great is to be misunderstood.", "Ralph Waldo Emerson"],
];

const books: {
  title: string;
  author: string;
  comment: string;
  img: string;
}[] = [
    {
      title: "the alchemist",
      author: "paulo coelho",
      comment: "my favorite book ever. truely a masterpiece, telling the inspiring story of a shepherd boy and his mystical quest for a worldly treasure, meaning and peace. i read it every summer, it helps me remember who i am, and inspires my work.",
      img: "/images/book-thealchemist.jpg",
    },
    {
      title: "steve jobs",
      author: "walter isaacson",
      comment: "the biography of my idol; having read this book in 2 languages and 5+ times; i see it as a bible, a compass for my work, career and life.",
      img: "/images/book-stevejobs.jpg",
    }
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
      <h2>i love being myself
        <Icon name="fluent-emoji-flat:smiling-face" />
      </h2>
      <p>
        i love being alive. i somehow feel wonderful, being connected to other people,
        and it's really hard to choose just a few from a billion things which influenced me.
      </p>
      <p>so please try to check this page often for inspirations!
        <Icon name="twemoji:sparkles" size="24" />
      </p>
    </article>

    <article id="thanks">
      <h2>
        thanks
        <Icon name="fluent-emoji-flat:smiling-face-with-halo" />
      </h2>
      <p>
        these are my insprations which shaped my life, character,
        and if i will be able to use their gift;
        i may change destiny of the entire world, for the better.
      </p>
      <Bulletpoint icon="twemoji:heart-decoration">
        <h4 class="bulletpoint-title">idols</h4>
        <ul style="margin: .25rem .5rem !important;">
          <li><b>steve jobs</b> — personal hero, innovator, founder.</li>
          <li><b>pink floyd</b> — the greatest progressive rock band.</li>
          <li><b>atatürk</b> — father of modern turkey.</li>
          <li><b>syd barrett</b> — psychedelic/crazy diamond.</li>
          <li><b>bob dylan</b> — poet & voice of freedom.</li>
          <li><b>isaac newton</b> — the last alchemist.</li>
          <li><b>dieter rams</b> — grandmaster of industrial design.</li>
          <li><b>tim berners-lee</b> — inventor of www.</li>
          <li><b>aaron swartz</b> — activist, hacker, true son of the internet.</li>
        </ul>
      </Bulletpoint>
      <Break />
      <CardDeck :columns="3">
        <Picture source="/images/idols/steve.jpg" />
        <Picture source="/images/idols/floyd.jpg" />
        <Picture source="/images/idols/ataturk.jpg" />
        <Picture source="/images/idols/syd.jpg" />
        <Picture source="/images/idols/dylan.jpg" />
        <Picture source="/images/idols/newton.jpg" />
        <Picture source="/images/idols/rams.jpg" />
        <Picture source="/images/idols/tim.jpg" />
        <Picture source="/images/idols/aaron.jpg" />
      </CardDeck>
      <Break />
      <Bulletpoint icon="fluent-emoji-flat:musical-score">
        <h4 class="bulletpoint-title">music</h4>
        <ul style="margin: .25rem .5rem !important;">
          <li>
            <b>pink floyd</b> — an english progressive-psychedelic rock band.
            a true artistic approach to rock genre with
            intense sonic universe,
            experimentation,
            philosophical lyrics,
            extended compositions
            and elaborate live shows.
          </li>
        </ul>
        <Picture source="/images/tdsotm.jpg" title="dark side of the moon" />
      </Bulletpoint>
      <Bulletpoint icon="twemoji:video-game">
        <h4 class="bulletpoint-title">games</h4>
        <p></p>
        <ul style="margin: .25rem .5rem !important;">
          <li>
            <b>empire earth</b> — best real time strategy.
            lead your civilization in timeline; imperial, military, economic and cultural campaigns.
            start in stone age villages and finish with space colonies.
            more fun than chess!
          </li>
        </ul>
        <Picture source="/images/ee2.jpg" title="empire earth ii." />
      </Bulletpoint>
      <Bulletpoint icon="twemoji:books">
        <h4 class="bulletpoint-title">books</h4>
        <p>i love reading, mostly non-fiction, textbooks and papers :)</p>
        <CareerStep v-for="(book, index) in books" :time="'#'+ (index + 1).toString()" :title="book.title"
          :location="'— ' + book.author" :description="book.comment" />
      </Bulletpoint>
      <Break />
      <CardDeck :columns="2">
        <Picture v-for="(book, index) in books" :source="book.img" />
      </CardDeck>
      <Break />
    </article>

    <article>
      <h3>
        <Icon name="noto:speech-balloon" size="32" />
        quotes
      </h3>
    </article>

    <CardDeck :columns="3">
      <!-- print every quote -->
      <Quote v-for="quote in quotes" :message="quote[0]" :owner="quote[1]" />
    </CardDeck>

    <Break />

    <Page:Legend />

    <Break />
  </main>
</template>

<style lang="scss" scoped>
@import "scss/styles.scss";

.CardDeck {
  margin: 0 auto;
}

.Bulletpoint {
  margin-bottom: .5rem;
}

.bulletpoint-title {
  color: $system-color-neutral-70 !important;
  text-decoration: underline;
}
</style>
