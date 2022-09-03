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
  EmpathizeIcon
} from "vue-tabler-icons";

const page = {
  title: "my story",
  tagline: "once upon a time...",
  statement: `a summary & timeline of my life, story, personality.`,
  picture: {
    source: "/images/doruk--green.png",
    title: "pixelated, natively digital 🤩"
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
            <p style="font-size: 1.65rem;">
              📜🗞️📖⏳🕒
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
      <h2>hello, again. 👋🏻</h2>
      <h4 style="#aabbcc">let's continue from where we left 🍃</h4>
      <Bulletpoint icon="👁‍🗨">
        <p style="font-size: 1.25rem; margin: 0;">
          <span class="paragraph-tagline"> my life purpose...</span>
          <br>liberate the human,
          <br>build the utopian dream of heaven on earth,
          <br>create a free and happy life experience, for everyone.
        </p>
      </Bulletpoint>
      <SectionRuler />
    </article>
    <article>
      <h4>why?</h4>
      <p>
        simple. i want to live a free, happy and meaningful life. a humane life that everyone deserves.
        i believe this is a fundemental human right: a livable world & a life worth living.
        so we need to come together, and create this utopic dream life for everyone.
      </p>
      <h4>how?</h4>
      <p>i am doruk, a high-school kid passionate in products, design and software.
        i am an autodidact (self-taught) so i teach myself the arts of my work
        as well as my interest fields:
        <b>
          gamification,
          web 3.0,
          knowledge,
          economics,
          human nature,
          industrial design
        </b>
        and
        <b>artificial intelligence</b>
      </p>
      <p>
        i want to do meaningful and remarkable things, be remembered as an inventor, innovator, artist, a cult leader;
        or in a single word, as a <u><b>protagonist</b></u> in the story of human.
      </p>
    </article>

    <Break />
    <Showcase>
      <template #main>
        <DescriptiveList title="know thyself." message="you ask me these common questions. so here are my answers! ⬇️">
          <DescriptiveItem title="who?"
            description="thinker, leader, artist, inventor, designer, polymath, idol, revolutionist, entrepreneur.">
            <!-- <UserIcon class="symbol" /> -->
          </DescriptiveItem>
          <DescriptiveItem title="what i love to do?"
            description="think, design, code, learn, build, socialize, talk, think, feel... any type of creative activity.">
            <HeartIcon class="symbol" />
          </DescriptiveItem>
          <DescriptiveItem title="for whom?" description="myself, and then everyone.">
            <EmpathizeIcon class="symbol" />
          </DescriptiveItem>
          <DescriptiveItem title="why?"
            description="this is my mission, purpose of life. i always experience the human authenticity, being in the flow and losing sense of time and space.">
            <QuestionMarkIcon class="symbol" />
          </DescriptiveItem>
        </DescriptiveList>
      </template>
      <template #side>
        <Picture source="/images/dancing.png" title="i love being in the zone ♓️" />
      </template>
    </Showcase>

    <Break />

    <article>
      <h2>story</h2>
      <p>
        i was so curious that my mom had to teach me how to read and write when I was <strong>3</strong>.
        i loved tinkering with things, to understand how they work and how to build them.
        <strong>i've always been dreaming to be an inventor since then.</strong>
        <br>
        this was the start in my life.
      </p>
      <h4>a</h4>
      <p>When I started elementary school, I spent my whole time with <strong>reading about history and drawing the
          moments, battle scenes, maps which I just read.</strong> This was exciting until I realized that how tables
        can turn so quickly. Today I may be victorious, glorious; but tomorrow maybe defeated, perished.</p>
      <h3>New beginnings...</h3>
      <p>I started programming when I was <strong>10</strong>, and this was a milestone in my journey. You write the
        code, and let everyone use it. What you can do is only limited by your skills and your imagination. My secondary
        school years were spent on personal projects.</p>
      <p>After a boring exam year, I entered <strong>Vefa Lisesi</strong>, a historical high school in Istanbul. Then I
        discovered <strong>the Web</strong>, and started writing for it. Incredible. There also I met Berk, who is a
        fellow of <a href="https://dorkodu.com">Dorkodu</a>.</p>
      <h3>Dorkodu: Revolutions</h3>
      <p>Dorkodu was born when I first branded all my work under the name of "Dorkodu", I was in secondary school then.
        The name comes from <strong>"Doruk" + "code"</strong>.</p>
      <p>When I saw the truth behind the Web, I asked this question myself : <strong>Do we really get the pure and true
          information from Web? No. All we get is some pages that others created.</strong> There is no chance to get
        what/how exactly you want.</p>
      <p>What if we had a <strong>universal knowledge resource</strong> that we can find, discover and exchange only the
        true, meaningful and useful information? The search results would be pure information pieces connected to each
        other, gathered from the whole accumilation of open human knowledge.</p>
      <p>This is what I dedicated the first part of my career to.</p>
      <p>You can see <a href="https://dorkodu.com">Dorkodu</a> to learn more about our projects.</p>
    </article>

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

<style lang="scss" scoped>
</style>
