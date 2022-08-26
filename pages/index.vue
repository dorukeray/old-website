<script lang="ts" setup>
import {
  BrandTelegramIcon,
  BrandTwitterIcon,
  BrandGithubIcon,
  BrandInstagramIcon,
  MailOpenedIcon,
  BrandDiscordIcon,
  ManIcon,
  CodeIcon,
  UserIcon,
  FriendsIcon,
  HeartIcon,
  CertificateIcon,
  QuestionMarkIcon,
  HeartHandshakeIcon,
  PolaroidIcon,
  ToolsIcon,
} from "vue-tabler-icons";


const hero = {
  title: "hello!",
  tagline: "i'm doruk eray.",
  statement: `founder, product polymath, craftsman, forerunner of idealism, progressive, lunatic, seeker of meaning.`,
  picture: {
    source: "/images/doruk--green.png",
    title: "pixelated, natively digital 🤩"
  },
};

let dorukEray = {
  token: "jun",
  value: "12",
  title: "hello world",
  content: "lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar.",
  person: {
    name: "doruk eray",
    avatar: "/images/doruk--green.png",
    role: "founder"
  }
};

definePageMeta({
  title: "welcome - doruk eray",
  description: `founder, product polymath, lunatic.`,
});

</script>

<template>
  <main>
    <Showcase style="margin-top: 0;">
      <template #main>
        <Hero :title="hero.title" :tagline="hero.tagline" :statement="hero.statement" style="margin-top: 0 !important;">
          <template #content>
            <p class="hashtag">#software #design #economics #art</p>
            <p style="font-size: 1.35rem">🤩👑💸💻🔗💿📚🎨🎭🎶🎙️🎸🥁🧮🗺🗳🏛🗽🍦</p>
          </template>
        </Hero>
      </template>
      <template #side>
        <Picture :source="hero.picture.source" :title="hero.picture.title" />
      </template>
    </Showcase>
    <Break />
    <article>
      <h2>hi :)</h2>
      <h3 class="section-title">who i am?</h3>
      <p>
        my life purpose to <b>liberate the human with meaningful technology</b>, build the dream commonwealth of a
        heaven, but on earth. yep. that's my purpose 🤩
      </p>
    </article>
    <article>
      <h2>🌰&nbsp; in a nutshell</h2>
      <SectionRuler />
      <Bulletpoint icon="👨🏻‍💻">
        <p>i have <b>8+</b> years of rich experience in <b>software</b>, since i was <b>10</b>!</p>
        <p>my focus is on <b>web</b> platform, for <b>product, front-end, ui/ux</b>.</p>
        <p>i am fluent in acronyms 😜 <b>javascript, html + css, php</b>.</p>
      </Bulletpoint>
      <Bulletpoint icon="🏫">
        <p>i study at <b>vefa lisesi</b>, a historical high school in istanbul 🇹🇷</p>
      </Bulletpoint>
      <Bulletpoint icon="👨🏻‍🏫">
        <p><b>i'm proudly a self-taught. this is my superpower.</b> i love constructive critical thinking about every
          aspect of life, and learning wonderful things. reading books, blogs, papers; listening to wise people on
          podcasts; watching influential movies.</p>
      </Bulletpoint>
      <Bulletpoint icon="📚">
        <p>my interests of work are <b>
            gamification,
            economics,
            web 3.0,
            knowledge theory,
            human nature,
            industrial design</b>
          and
          <b>artificial intelligence</b>
          nowadays.
        </p>
      </Bulletpoint>
      <Bulletpoint icon="🧩">
        <p>my hobbies reflect my whimsical artist nature 😜</p>
        <ul style="margin: .25rem .5rem !important;">
          <li><b>🖼 pixel art</b> — less is more.</li>
          <li><b>🎶 music</b> — singer, guitar 🎙️🎸</li>
          <li><b>✍🏻 drawing</b> — design, graphics, print.</li>
          <li><b>🎮 games</b> — strategy/role-play.</li>
          <li><b>🛠️ tinkering</b> — my little inventions.</li>
          <li><b>🏛️ philosophy</b> — thinking, reading, writing.</li>
          <li><b>🏕️ trekking</b> — trees, sky, nature.</li>
        </ul>
      </Bulletpoint>
      <Bulletpoint icon="🗽">
        <p>i love <b>open source</b>, the mission of contributing to a common good.</p>
        <p>
          i created some projects for <i>better developer experience</i> and <i>state-of-the-art products</i>.
          see <a href="http://libre.dorkodu.com" target="_blank" rel="noopener noreferrer">dorkodu libre</a>
          and <a href="http://github.com/dorukeray" target="_blank" rel="noopener noreferrer">my github page</a>.
        </p>
      </Bulletpoint>
      <Bulletpoint icon="🌍">
        <p>it's part of my mission to help save the destiny of human civilization by contributing to areas like
          <b>agriculture, water, green energy, space, education, genetics</b> and <b>ai</b>.
        </p>
      </Bulletpoint>
      <SectionRuler />
      <Bulletpoint icon="🔗">
        <p style="border-bottom:">here are some useful links for you!</p>
        <ul style="margin: .25rem .5rem !important;">
          <li>
            <p><b>🐦</b>&nbsp; i tweet often, <a href="https://twitter.com/d0rukeray">follow me on twitter</a>.</p>
          </li>
          <li>
            <p><b>📖</b>&nbsp; if you are curious, <a href="/story">read my story</a>.</p>
          </li>
          <li>
            <p><b>🙏🏻</b>&nbsp; see my <a href="/thanks">thanks</a> page for inspirations & attribution.</p>
          </li>
          <li>
            <p><b>💾</b>&nbsp; see <a href="/work">my work</a> page for my portfolio & resume.</p>
          </li>
        </ul>
      </Bulletpoint>
    </article>
  </main>
</template>

<style lang="scss">
@import "scss/styles.scss";

.dorkodian-gradient {
  border-radius: .5rem;
  background-image: linear-gradient(45deg, #33cc40 20%, #7cde84 40%, #f8e4a0 70%, #ffffff 95%);
}

.hashtag {
  color: $reference-color-blue-60;
  font-weight: 500;
  font-size: 1.15rem;
  line-height: 1.65rem;
  margin-bottom: .5rem !important;
}

.Showcase {
  article {
    padding: 0;

    h1,
    h2,
    h3,
    h4,
    h5 {
      color: $reference-color-gray-60;
      text-align: left;
      padding: 0 1rem;
    }

    p {
      padding: 0 1rem;
    }
  }
}


.icon-list {
  display: inline-flex;
  flex-direction: column;
  gap: .5rem;
  padding-left: 1rem;
  margin: 0 auto;

  li {
    display: flex;
    align-items: center;
    gap: .5rem;
  }

  svg {
    color: $reference-color-gray-70;
    width: 2.25rem;
    height: 2.25rem;
    stroke-width: 2.25;
  }

  a {
    font-size: 1.25rem;
    color: $reference-color-blue-50;
    font-weight: 500;

    &:hover {
      color: $reference-color-blue-40;
      text-decoration: underline;
    }
  }
}

@media (min-width: 900px) {
  .icon-list {
    margin: 0;
  }
}

ul {
  display: flex;
  flex-direction: column;
  gap: .35rem;

  li {
    font-size: 1.15rem !important;

  }
}
</style>
