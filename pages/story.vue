<script lang="ts" setup>
const page = {
  title: "my story",
  tagline: "once upon a time...",
  statement: `a summary & timeline of my life, story, personality.`,
  picture: {
    source: "/images/coffee.png",
    title: "one more cup of coffee ☕️"
  },
};

definePageMeta({
  title: "my story",
  description: `a summary & timeline of my life, story, personality.`,
});
</script>

<template>
  <main>
    <Showcase style="margin-top: 0;">
      <template #main>

        <Hero :title="page.title" :tagline="page.tagline" :statement="page.statement">
          <template #content>
            <p style="font-size: 2rem;">
              <Icon name="twemoji:joker" />
              <Icon name="twemoji:rolled-up-newspaper" />
              <Icon name="twemoji:open-book" />
              <Icon name="twemoji:hourglass-done" />
              <Icon name="twemoji:three-oclock" />
              <Icon name="" />
            </p>
          </template>
        </Hero>

      </template>
      <template #side>
        <Picture :source="page.picture.source" :title="page.picture.title" />
      </template>
    </Showcase>

    <Break />

    <article>
      <h2>
        <span>hello, again.</span>&nbsp;
        <Icon name="fluent-emoji-flat:waving-hand-light" size="36" />
      </h2>
      <Bulletpoint icon="twemoji:leaf-fluttering-in-wind">
        <p style="font-size: 1.25rem; margin: 0; font-weight: 400;">
          <span class="paragraph-tagline">my purpose;</span>
          <br><b>liberate the human.</b>
        </p>
      </Bulletpoint>
      <Bulletpoint icon="twemoji:bullseye">
        <p style="font-size: 1.25rem; margin: 0; font-weight: 400;">
          <span class="paragraph-tagline">my mission;</span>
          <br>create a free and happy life experience for everyone,
          <br>build the utopian dream of heaven on earth,
          <br><b>...with meaningful technology.</b>
        </p>
      </Bulletpoint>
      <SectionRuler />
    </article>

    <article>
      <h4> why?</h4>
      <p>
        simple. <u>i want to live a free, happy and meaningful life.</u><br />
        i believe this is a fundemental human right; a livable world & a life worth living.
        so we need to come together, and create this utopic dream life for everyone.
      </p>
      <h4>how?</h4>
      <p>i am passionate in products, design and software.
        i am an autodidact (self-taught) so i teach myself the arts of my work:
        <b>
          gamification,
          web 3.0,
          knowledge,
          economics,
          human nature,
          industrial design
        </b>
        and
        <b>artificial intelligence</b>.
      </p>
      <p>
        i want to achieve a meaningful life, be remembered as an inventor, innovator, artist, a cult leader;
        or in a single word, a <u><b>protagonist</b></u> in the story of human.
      </p>
    </article>

    <Break />
    <Showcase>
      <template #main>
        <DescriptiveList title="know thyself."
          message="you will probably ask me these common questions. so here is, what i think about myself and life.">
          <DescriptiveItem title="who i am?"
            description="thinker, leader, artist, inventor, designer, polymath, idol, revolutionist, entrepreneur.">
            <Icon name="fluent-emoji-flat:boy-light" size="36" />
          </DescriptiveItem>
          <DescriptiveItem title="what i love to do?"
            description="think, design, code, learn, build, socialize, talk, think, feel... any type of creative activity.">
            <Icon name="twemoji:glowing-star" size="36" />
          </DescriptiveItem>
          <DescriptiveItem title="... for whom?" description="myself, and then everyone.">
            <Icon name="twemoji:people-hugging" size="36" />
          </DescriptiveItem>
          <DescriptiveItem title="why?"
            description="this is my mission, purpose of life. i always experience the human authenticity, being in the flow and losing sense of time and space.">
            <Icon name="twemoji:growing-heart" size="36" />
          </DescriptiveItem>
        </DescriptiveList>
      </template>
      <template #side>
        <Picture source="/images/dancing.png" title="i love being in the zone ♓️" />
      </template>
    </Showcase>

    <Break />

    <article>
      <h2>
        <Icon name="twemoji:open-book" size="36" />&nbsp;
        story
      </h2>
      <p style="text-align: center;">(shortened)</p>
      <p>
        <span class="paragraph-tagline">
          <Icon name="fluent-emoji-flat:baby-light" size="36" />
        </span>
        i was a <i>curious</i> and <i>artistic</i> child, and my mom did teach me how to read and write when I was
        <strong>3</strong>. i loved tinkering with gadgets, to understand how they work and how to build my own things.
      </p>
      <p>
        <strong>i've always been dreaming to be an inventor since then.</strong>
        <br>this was the start in my life.
      </p>
      <p>
        <span class="paragraph-tagline">
          <Icon name="fluent-emoji-flat:school" size="36" />
        </span>
        when i started elementary school, i spent my whole time <b>reading about history</b> and
        <b>picturing the moments</b>, drawing battle scenes, maps, events which I just read.
        this was exciting until i realized that how tables can turn so quickly.
      </p>

      <Quote message="
        For the loser now
      / Will be later to win
      / For the times they are a-changin'" owner="bob dylan" />

      <h3>New beginnings...</h3>
      <p>
        <span class="paragraph-tagline">
          <Icon name="twemoji:laptop" size="28" />
        </span>&nbsp;
        I learned to code when I was <strong>10</strong>, and this was a milestone in my journey.
        You can build anything you want, and let everyone use it.
        What you can do is limited only by your skills and imagination.
      </p>
      <p>
        My secondary school years were spent on a <b>search for meaning</b> for my life:
        <b>personal projects</b> and
        <b>technical/artistic experimentation</b>, just curiosity.
      </p>
      <p>
        After a boring but successful exam year, I entered <strong>Vefa Lisesi</strong>,
        a historical high school in Istanbul. There also I met my close friend <a href="berk.dorkodu.com">Berk</a>, who
        joined me with the foundations of Dorkodu.
      </p>
      <h3>Revolutions</h3>
      <p>
        <span class="paragraph-tagline">
          <Icon name="twemoji:leaf-fluttering-in-wind" size="36" />
        </span>&nbsp;
        <a href="https://dorkodu.com">Dorkodu</a>
        was born when I first branded all my work under an umbrella title,
        I was in secondary school back then.
        The name is a mixture of <strong>"Doruk" + "code"</strong>.
      </p>
      <p>
        i switched to developing software products and technologies for the internet platform.
        <i>eureka!</i> a moment of enlightment.
        <Icon name="twemoji:sparkles" size="20" />
        then i discovered the internet's unifying power for our civilization.
      </p>
      <p>i thought...<br>maybe there is still a room for improvement.</p>
      <p>
        i see <b>gamification</b> as a promising method we can use to fix broken parts of human systems & productivity;
        and combined with the <b>humane spirit</b> in technology and design, <u><b>we can free the internet.</b></u>
      </p>
      <p>This is what I dedicated the first chapter of my career to.</p>
      <p style="display: flex;">
        <Icon name="twemoji:victory-hand-light-skin-tone" size="28" />
        <b>to be continued...</b>
      </p>
      <SectionRuler />
      <p>
        You can visit <a href="https://dorkodu.com">Dorkodu's website</a>
        to learn more about who we are and what we do.
      </p>
    </article>

    <Page:Contact />

    <Break />

    <Page:Legend />

    <Break />
  </main>
</template>

<style lang="scss" scoped>

</style>
