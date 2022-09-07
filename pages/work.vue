<script lang="ts" setup>

const page = {
  title: "my work",
  tagline: "the founder, product polymath, designer, software craftsman.",
  statement: `a portfolio of my work; from startup, products and open source; to software and design.`,
  picture: {
    source: "/images/unboxing.png",
    title: "unboxing time! 📦💥🥳"
  },
};

definePageMeta({
  title: "my work",
  description: `founder, product polymath, craftsman.`,
  keywords: `doruk eray, doruk, eray, mr. dorkodu, d0rukeray`,
});
</script>
<template>
  <main>
    <Showcase style="margin-top: 0;">
      <template #main>
        <Hero :title="page.title" :tagline="page.tagline" :statement="page.statement" style="margin-top: 0 !important;">
          <template #content>
            <p class="hashtag">#gamification #productivity #social #knowledge #web3 #cryptoeconomics #ui #ux #frontend
            </p>
            <p style="font-size: 1.75rem">
              <Icon name="twemoji:crown" />
              <Icon name="twemoji:statue-of-liberty" />
              <Icon name="twemoji:money-with-wings" />
              <Icon name="fluent-emoji-flat:laptop" />
              <Icon name="twemoji:computer-disk" />
              <Icon name="twemoji:books" />
              <Icon name="twemoji:artist-palette" />
              <Icon name="twemoji:video-game" />
              <Icon name="fluent-emoji-flat:hammer-and-wrench" />
              <Icon name="twemoji:memo" />
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
      <p style="font-size: 1.5rem; font-weight: 600; text-align:center; text-shadow: #fff 3px 1px 0; border-radius: 1rem;"
        class="--dorkodian">
        🚧&nbsp; under construction &nbsp;🚧
      </p>
    </article>

    <article>
      <h4>open source</h4>
      <CardDeck :columns="2">
        <img
          src="https://raw.githubusercontent.com/dorukeray/github-stats/master/generated/overview.svg#gh-light-mode-only"
          alt="doruk eray's github statistics.">
        <img
          src="https://raw.githubusercontent.com/dorukeray/github-stats/master/generated/languages.svg#gh-light-mode-only"
          alt="doruk eray's language statistics">
      </CardDeck>
    </article>

    <article>
      <h2>experience</h2>
      <h4>{ software }</h4>
      <h4>{ education }</h4>
      <h4>{ timeline }</h4>
    </article>

    <article>
      <h2>projects</h2>
      <h4>{ products }</h4>
      <h4>{ engineering }</h4>
      <h4>{ design }</h4>
    </article>

    <article>
      <h3>specialities</h3>
      <h4>{ software }</h4>
      <h4>{ design }</h4>
      <h4>{ leadership }</h4>
    </article>

    <Page:Contact />

    <Break />

    <Page:Legend />

    <!--

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
    -->

    <Break />
  </main>
</template>
<style lang="scss">
@import "scss/styles.scss";
</style>
