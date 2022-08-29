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
      <p>my life purpose to <i>liberate the human with meaningful technology</i>, build the dream commonwealth of a
        heaven, but
        on earth. yep. that's my purpose 🤩</p>
      <h4>why?</h4>
      <SectionRuler />
      <p class="dorkodian-gradient">
        i want to live a free, happy and meaningful life. a humane life that everyone deserves.
        i believe this is a fundemental human right: a livable world & a life worth living.
        so we need to come together, and create that utopic life for everyone.
      </p>
      <h4>how?</h4>
      <p>
        my life purpose is to do remarkable things that will change the destiny of human civilisation. In this
        long journey, my first step is purifying and liberating the human knowledge to make it open, useful and
        meaningful for everyone. So, let's begin...
      </p>
    </article>
    <Break />
    <Showcase>
      <template #main>
        <article>
          <h3 class="section-title">📝 my story</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam impedit tempora minima ipsum corrupti
            odio totam, eos laudantium quod illo?</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum placeat iste explicabo. Voluptatibus quaerat
            iure, optio minima omnis mollitia doloremque natus vitae ipsa perferendis dolore reprehenderit doloribus
            necessitatibus quasi itaque.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque possimus, recusandae inventore eligendi amet
            expedita illum totam repudiandae aspernatur. Quam harum repellendus nihil repudiandae hic?</p>
          <div class="button-container" style="padding: 0; margin: 0;">
            <Button type="tonal">hello</Button>
          </div>
        </article>
      </template>
      <template #side>
        <ul class="icon-list">
          <li>
            <BrandTwitterIcon />
            <a href="https://twitter.com/d0rukeray">twitter</a>
          </li>
          <li>
            <BrandTelegramIcon />
            <a href="https://t.me/dorukeray">telegram</a>
          </li>
          <li>
            <BrandInstagramIcon />
            <a href="https://instagram.com/d0rukeray">instagram</a>
          </li>
          <li>
            <BrandGithubIcon />
            <a href="https://github.com/dorukeray">github</a>
          </li>
          <li>
            <BrandDiscordIcon />
            <a href="https://discord.com/users/990571541026734080">discord</a>
          </li>
          <li>
            <MailOpenedIcon />
            <a href="mailto:doruk@dorkodu.com">email</a>
          </li>
        </ul>
      </template>
    </Showcase>
    <Break />
    <Showcase>
      <template #main>
        <DescriptiveList title="me:" message="my answers">
          <DescriptiveItem title="who?"
            description="thinker, leader, artist, inventor, designer, polymath, idol, revolutionist, entrepreneur.">
            <UserIcon class="symbol" />
          </DescriptiveItem>
          <DescriptiveItem title="what i love to do?"
            description="think, design, feel, create, build, socialize, tell, learn.">
            <HeartIcon class="symbol" />
          </DescriptiveItem>
          <DescriptiveItem title="for whom?" description="me, and everyone. the humanity.">
            <FriendsIcon class="symbol" />
          </DescriptiveItem>
          <DescriptiveItem title="why?"
            description="my life purpose is to liberate the human with meaningful technology. i somehow always feel the spark of authentic human experience, like being in a different dimension of reality.">
            <QuestionMarkIcon class="symbol" />
          </DescriptiveItem>
        </DescriptiveList>
      </template>
      <template #side>
        <Picture source="/images/doruk.png" title="merhaba" />
      </template>
    </Showcase>
    <Break />

    <article>
      <h2>🛠️ my work</h2>
      <p>we have to remind ourselves that we're all human, and push forward the limits of our civilization.</p>
      <SectionRuler />
    </article>

    <Break />

    <Showcase>
      <template #main></template>
      <template #side></template>
    </Showcase>
    <Break />

    <Showcase>
      <template #main>
        <Hero title="my skillset" tagline="product design, software engineering, graphics, marketing."
          statement="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum doloremque pariatur atque molestiae error autem?">
          <template #head>
            <CertificateIcon class="badge" />
          </template>
        </Hero>
      </template>
      <template #side>
        <article>
          <h4>👨‍💻&nbsp;&nbsp;career</h4>
          <CareerStep title=".net framework" time="2016-2019" location="istanbul, tr"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, obcaecati!" />
          <CareerStep title=".net framework" time="2016-2019" location="istanbul, tr"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, obcaecati!" />
          <CareerStep title="freedom" time="2017" location="istanbul, tr" description="" />
          <CareerStep title="windows" time="2017-2019" location="c#" description="" />
          <CareerStep title="humble beginnings" time="2015-2016" location="c, c++, python"
            description="started learning basics and real coding using c, c++ and python. mostly console mini-apps." />
          <CareerStep title="hello world!" time="2014" location="scratch"
            description="started programming when i was 10. build a few games, one of which won a national game contest, as 1st. 🥇" />

        </article>
      </template>
    </Showcase>

    <Break />

    <article>
      <CardDeck :columns="2">
        <img
          src="https://raw.githubusercontent.com/dorukeray/github-stats/master/generated/overview.svg#gh-light-mode-only"
          alt="doruk eray's github statistics.">
        <img
          src="https://raw.githubusercontent.com/dorukeray/github-stats/master/generated/languages.svg#gh-light-mode-only"
          alt="doruk eray's language statistics">
      </CardDeck>
    </article>

    <Break />

    <CardDeck :columns="3">
      <Card title="product design" message="user interface and experience, mostly software.">
        <template #badge>
          <ToolsIcon class="badge" />
        </template>
        <template #content></template>
      </Card>
      <Card title="software engineering" message="user interface and experience, mostly software.">
        <template #badge>
          <CodeIcon class="badge" />
        </template>
        <template #content></template>
      </Card>
      <Card title="founding & leading" message="user interface and experience, mostly software.">
        <template #badge>
          <HeartHandshakeIcon class="badge" />
        </template>
        <template #content></template>
      </Card>
      <Card title="graphics" message="user interface and experience, mostly software.">
        <template #badge>
          <PolaroidIcon class="badge" />
        </template>
        <template #content></template>
      </Card>
      <Card title="founding & leading" message="user interface and experience, mostly software.">
        <template #badge>
          <HeartHandshakeIcon class="badge" />
        </template>
        <template #content></template>
      </Card>
      <Card title="founding & leading" message="user interface and experience, mostly software.">
        <template #badge>
          <HeartHandshakeIcon class="badge" />
        </template>
        <template #content></template>
      </Card>
    </CardDeck>

    <Break />
  </main>
</template>

<style lang="scss" scoped>
</style>
