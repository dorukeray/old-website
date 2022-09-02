<script lang="ts" setup>

import {
  BrandTwitterIcon,
  BrandTelegramIcon,
  BrandInstagramIcon,
  BrandGithubIcon,
  BrandDiscordIcon,
  BrandSnapchatIcon,
  MailOpenedIcon
} from "vue-tabler-icons";

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
            <p style="font-size: 1.35rem">🤩👑💸💻🔗💿📚🎨🎭🎶🎙️🎸🗺📝🏛🗽🍃🍦</p>
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
      <h2>who i am?</h2>
      <p style="font-size: 1.25rem; margin: 0;">
        <span class="paragraph-tagline">my life purpose...</span>
        <br>
        <b>liberate the human with meaningful technology</b>,
        build the utopian dream of heaven on earth, a free and happy life experience, for everyone.
      </p>
      <p>— yep. this is why i wake up every day. 🌅</p>
    </article>

    <article>
      <h2>🌰&nbsp; in a nutshell</h2>
      <SectionRuler />
      <Bulletpoint icon="🍃">
        <p>
          i'm the <b>founder & chief</b> of <a href="https://dorkodu.com">dorkodu</a>,
          a humane technology company where we create products for gamified experiences; pursuing our mission together.
        </p>
      </Bulletpoint>
      <Bulletpoint icon="👨🏻‍💻">
        <p>i have <b>8+</b> years of rich experience in <b>software</b>, since i was <b>10</b>!</p>
        <p>my focus is on <b>web</b> platform, for <b>product, front-end, ui/ux</b>.</p>
        <p>i am fluent in acronyms 🧠 <b>javascript, html + css, php</b>.</p>
      </Bulletpoint>
      <Bulletpoint icon="🏫">
        <p>i study at <b>vefa lisesi</b>, a historical high school in istanbul 🇹🇷</p>
      </Bulletpoint>
      <Bulletpoint icon="👨🏻‍🏫">
        <p><b>i'm proudly a self-taught. this is my superpower.</b>
          i love constructive + creative thinking about every aspect of life, and learning wonderful things.</p>
      </Bulletpoint>
      <Bulletpoint icon="📚">
        <p>my interests of work are <b>
            gamification,
            web 3.0,
            knowledge theory,
            economics,
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
          <li><b>🎶 music</b> — vocal, guitar.</li>
          <li><b>✍🏻 drawing</b> — design, graphics, print.</li>
          <li><b>🎮 games</b> — strategy/role-play.</li>
          <li><b>🛠️ tinkering</b> — some cute inventions.</li>
          <li><b>🏛️ philosophy</b> — thinking, reading, writing.</li>
          <li><b>🏕️ trekking</b> — sky, trees, fresh air.</li>
        </ul>
      </Bulletpoint>
      <Bulletpoint icon="🗽">
        <p>i love <b>open source</b>, the mission of contributing to a common good.</p>
        <p>
          i created some projects for <i>better developer experience</i> and <i>state-of-the-art products</i>.
          see <a href="https://libre.dorkodu.com" target="_blank" rel="noopener noreferrer">dorkodu libre</a>
          and <a href="https://github.com/dorukeray" target="_blank" rel="noopener noreferrer">my github page</a>.
        </p>
      </Bulletpoint>
      <Bulletpoint icon="🌍">
        <p>it's part of my mission to help save the destiny of human civilization by contributing to areas like
          <b>agriculture, water, green energy, space, education, genetics</b> and <b>ai</b>.
        </p>
      </Bulletpoint>
      <SectionRuler />
    </article>

    <article>
      <h3 class="section-title">📡 contact</h3>
      <p style="margin: 0; text-align: center;">want to have a talk? <b>let's get in touch! 🤙🏻</b></p>
      <CardDeck :columns="2">
        <li class="IconItem">
          <BrandTwitterIcon />
          <div>
            <span><a href="https://twitter.com/d0rukeray">d0rukeray</a></span>
            <span><b>twitter</b> (tweets & dm)</span>
          </div>
        </li>
        <li class="IconItem">
          <BrandTelegramIcon />
          <div>
            <span><a href="https://t.me/dorukeray">dorukeray</a></span>
            <span><b>telegram</b> (1:1 messages)</span>
          </div>
        </li>
        <li class="IconItem">
          <BrandGithubIcon />
          <div>
            <span><a href="https://github.com/dorukeray">dorukeray</a></span>
            <span><b>github</b> (open source)</span>
          </div>
        </li>
        <li class="IconItem">
          <BrandInstagramIcon />
          <div>
            <span><a href="https://instagram.com/d0rukeray">d0rukeray</a></span>
            <span><b>instagram</b> (social life)</span>
          </div>
        </li>
        <li class="IconItem">
          <BrandDiscordIcon />
          <div>
            <span><a href="https://discord.com/users/990571541026734080">dorukeray#5097</a></span>
            <span><b>discord</b> (community chat)</span>
          </div>
        </li>
        <li class="IconItem">
          <MailOpenedIcon />
          <div>
            <span><a href="mailto:doruk@dorkodu.com">doruk@dorkodu.com</a></span>
            <span><b>email</b> (no, please)</span>
          </div>
        </li>
      </CardDeck>
    </article>

    <Break />

    <article class="dorkodian-hero">
      <Bulletpoint icon="🔗">
        <h3>some useful links</h3>
        <ul style="margin: .25rem .5rem !important;">
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
          <li>
            <p><b>🐦</b>&nbsp; i tweet often, <a href="https://twitter.com/d0rukeray">follow me on twitter</a>.</p>
          </li>
        </ul>
      </Bulletpoint>
    </article>

    <Break />
  </main>
</template>

<style lang="scss">
@import "scss/styles.scss";
</style>
