<script lang="ts" setup>

const hero = {
  title: "hello!",
  tagline: "i'm doruk eray.",
  statement: `founder, product polymath, forerunner of idealism, craftsman, lunatic, progressive, seeker of meaning.`,
  picture: {
    source: "/images/doruk--green.png",
    title: "pixelated, natively digital 💽"
  },
};

definePageMeta({
  title: "welcome!",
  description: `founder, product polymath, lunatic.`,
  keywords: `doruk eray, doruk, eray, mr. dorkodu, d0rukeray`,
});
</script>

<template>
  <main>
    <Showcase style="margin-top: 0;">
      <template #main>
        <Hero :title="hero.title" :tagline="hero.tagline" :statement="hero.statement" style="margin-top: 0 !important;">
          <template #content>
            <p class="hashtag">#software #design #economics #art</p>
            <p style="font-size: 1.85rem; margin-bottom: 0;">
              <Icon name="twemoji:leaf-fluttering-in-wind" />
              <Icon name="fluent-emoji-flat:alien" />
              <Icon name="twemoji:crown" />
              <Icon name="fluent-emoji-flat:laptop" />
              <Icon name="twemoji:computer-disk" />
              <Icon name="twemoji:books" />
              <Icon name="twemoji:memo" />
              <Icon name="twemoji:artist-palette" />
              <Icon name="twemoji:performing-arts" />
              <Icon name="twemoji:classical-building" />
              <Icon name="twemoji:money-with-wings" />
              <Icon name="twemoji:statue-of-liberty" />
              <Icon name="fluent-emoji-flat:musical-score" size="36" />
              <Icon name="twemoji:studio-microphone" />
              <Icon name="fluent-emoji-flat:guitar" />
            </p>
            <div class="button-container">
              <Button type="fill" link="/story">read my story</Button>
              <Button type="tonal" link="/work">see my work</Button>
            </div>
          </template>
        </Hero>
      </template>
      <template #side>
        <Picture :source="hero.picture.source" :title="hero.picture.title" />
      </template>
    </Showcase>

    <Break />

    <article>
      <h2>
        <span>who i am?</span>
        <Icon name="fluent-emoji-flat:thinking-face" size="36" />
      </h2>
      <h4>...or why you should care?</h4>
      <p style="font-size: 1.25rem; margin: 0;">
        <span class="paragraph-tagline">i want to...</span>
        <br>build the utopian dream of heaven on earth,
        <br>a free and happy life experience, for everyone,
        <br><b>liberate the human with meaningful technology.</b>
      </p>
      <p>
        — yep. this is why i wake up every day.
        <Icon name="twemoji:sunrise-over-mountains" size="24" />
      </p>
    </article>

    <article>
      <h2>
        <Icon name="twemoji:chestnut" />&nbsp; in a nutshell
      </h2>
      <SectionRuler />
      <Bulletpoint icon="twemoji:leaf-fluttering-in-wind">
        <p>
          i'm the <b>founder & chief</b> of <a href="https://dorkodu.com">dorkodu</a>,
          a humane technology company where we create products for gamified experiences; pursuing our mission together.
        </p>
      </Bulletpoint>
      <Bulletpoint icon="noto:technologist-light-skin-tone">
        <p>i have <b>8+</b> years of rich experience in <b>software</b>, since i was <b>10</b>!</p>
        <p>my focus is on <b>web</b> platform, for <b>product, front-end, ui/ux</b>.</p>
        <p>i am fluent in acronyms
          <Icon name="twemoji:brain" size="24" /> <b>javascript, html + css, php</b>.
        </p>
      </Bulletpoint>
      <Bulletpoint icon="fluent-emoji-flat:school">
        <p>i study at <b>vefa lisesi</b>, a historical high school in istanbul 🇹🇷</p>
      </Bulletpoint>
      <Bulletpoint icon="fluent-emoji-flat:man-teacher-light">
        <p><b>i'm proudly a self-taught. this is my superpower.</b>
          i love constructive + creative thinking about every aspect of life, and learning wonderful things.</p>
      </Bulletpoint>
      <Bulletpoint icon="twemoji:books">
        <p>my interests of work are <b>
            gamification,
            web 3.0,
            knowledge,
            economics,
            human nature,
            industrial design</b>
          and
          <b>artificial intelligence</b>
          nowadays.
        </p>
      </Bulletpoint>
      <Bulletpoint icon="fluent-emoji-flat:soft-ice-cream">
        <p>my hobbies reflect my whimsical artist nature
          <Icon name="fluent-emoji-flat:call-me-hand-light" size="24" />
        </p>
        <ul style="margin: .25rem .5rem !important;">
          <li><b>
              <Icon name="fluent-emoji-flat:framed-picture" size="32" />
              pixel art
            </b> — less is more.</li>
          <li><b>
              <Icon name="fluent-emoji-flat:musical-score" size="32" />
              music
            </b> — vocal, guitar.</li>
          <li><b>
              <Icon name="fluent-emoji-flat:writing-hand-light" size="32" />
              drawing
            </b> — design, graphics, print.</li>
          <li><b>
              <Icon name="twemoji:video-game" size="32" />
              games
            </b> — strategy/role-play.</li>
          <li><b>
              <Icon name="fluent-emoji-flat:hammer-and-wrench" size="32" />
              tinkering
            </b> — some cute inventions.</li>
          <li><b>
              <Icon name="twemoji:classical-building" size="32" />
              philosophy
            </b> — thinking, reading, writing.</li>
          <li>
            <b>
              <Icon name="fluent-emoji-flat:camping" size="32" />
              trekking
            </b> — sky, trees, fresh air.
          </li>
        </ul>
      </Bulletpoint>
      <Bulletpoint icon="fluent-emoji-flat:statue-of-liberty">
        <p>i love <b>open source</b>, contributing to a common good.</p>
        <p>
          i created some projects for <i>better developer experience</i> and <i>state-of-the-art products</i>.
          see <a href="https://libre.dorkodu.com" target="_blank" rel="noopener noreferrer">dorkodu libre</a>
          and <a href="https://github.com/dorukeray" target="_blank" rel="noopener noreferrer">my github page</a>.
        </p>
      </Bulletpoint>
      <Bulletpoint icon="twemoji:globe-showing-americas">
        <p>it's part of my mission to help save the destiny of human civilization by contributing to areas like
          <b>agriculture, water, green energy, space, education, genetics</b> and <b>ai</b>.
        </p>
      </Bulletpoint>
      <SectionRuler />
    </article>

    <Page:Contact />

    <Break />

    <Page:HeroMap />

    <Break />
  </main>
</template>

<style lang="scss">
@import "scss/styles.scss";

.icon {
  margin-left: .1rem;
  margin-right: .1rem;
}
</style>
