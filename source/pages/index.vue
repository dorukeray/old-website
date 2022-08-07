<script lang="ts" setup>
import {
  BrandTelegramIcon,
  BrandTwitterIcon,
  BrandGithubIcon,
  BrandDiscordIcon,
  BrandInstagramIcon,
  MailOpenedIcon,
  ToolsIcon,
  CpuIcon,
  BlurIcon,
  Flag3Icon,
  PeaceIcon,
  BriefcaseIcon,
  BuildingBankIcon,
  CodeIcon,
  SchemaIcon
} from "vue-tabler-icons";

definePageMeta({
  title: "sage",
  tagline: "the marvelous data exchange protocol for APIs",
  description: `Sage aims to simplify the communication for data interactions between different layers of software, and designed especially for APIs.`,
})

const hero = {
  title: "hello!",
  tagline: "i'm doruk eray.",
  statement: `founder @ dorkodu, product polymath, craftsman, forerunner of idealism, seeker of meaning.`,
  picture: {
    source: "/images/doruk--green.png",
    title: "pixelated, natively digital 🤩"
  },
};
</script>

<template>
  <main>
    <Showcase style="margin-top: 0;">
      <template #main>
        <Hero :title="hero.title" :tagline="hero.tagline" :statement="hero.statement" style="margin-top: 0 !important;">
          <template #content>
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
        my life purpose is to achieve remarkable things that will change the destiny of human civilisation. In this
        long journey, my first step is purifying and liberating the human knowledge to make it open, useful and
        meaningful for everyone. So, let's begin...
      </p>
      <Quote
        message="I learned this, at least, by my experiment: that if one advances confidently in the direction of his dreams, and endeavors to live the life which he has imagined, he will meet with a success unexpected in common hours."
        owner="henry david thoreau" />

    </article>
    <article>
      <h2>about</h2>
      <SectionRuler />
    </article>
    <Showcase>
      <template #main>
        <article>
          <h3 class="section-title">📝 my story</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam impedit tempora minima ipsum corrupti
            odio totam, eos laudantium quod illo?</p>
          <div class="button-container" style="padding: 0; margin: 0;">
            <Button>hello</Button>
          </div>

        </article>
      </template>
      <template #side>
        <article>
          <h3>🛠️ my work</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam impedit tempora minima ipsum corrupti
            odio totam, eos laudantium quod illo?</p>
        </article>
      </template>
    </Showcase>
    <article>
      <h2>🤙 get in touch</h2>
      <ul class="icon-list">
        <li>
          <BrandTwitterIcon />
          <a href="https://twitter.com/d0rukeray">@d0rukeray</a>
        </li>
        <li>
          <BrandTelegramIcon />
          <a href="https://t.me/dorukeray">@dorukeray</a>
        </li>
        <li>
          <BrandInstagramIcon />
          <a href="https://instagram.com/d0rukeray">@d0rukeray</a>
        </li>
        <li>
          <BrandGithubIcon />
          <a href="https://github.com/dorukeray">@dorukeray</a>
        </li>
        <li>
          <MailOpenedIcon />
          <a href="mailto:doruk@dorkodu.com">doruk@dorkodu.com</a>
        </li>
      </ul>
    </article>

    <article>
      <h2>🛠️ mywork</h2>
    </article>

    <Showcase>
      <template #main>
        <Hero title="my skillset" tagline="product design, software engineering, graphics, marketing."
          statement="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum doloremque pariatur atque molestiae error autem?">
          <template #head>
            <ToolsIcon class="badge" />&nbsp;
            <ToolsIcon class="badge" />&nbsp;
            <ToolsIcon class="badge" />&nbsp;
          </template>
        </Hero>
      </template>
      <template #side>
        <article>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos expedita, sit debitis animi at
            sapiente consectetur aliquam cumque numquam deleniti eius tenetur, ipsum in aut quam accusamus. Dolore non
            et delectus id, harum itaque laboriosam saepe deleniti incidunt consectetur vel dicta repudiandae adipisci
            repellendus cupiditate dolores aspernatur quod! Ipsam?</p>
        </article>
      </template>
    </Showcase>
    <Break />
  </main>
</template>

<style lang="scss">
@import "scss/styles.scss";

.dorkodian-gradient {
  border-radius: .5rem;
  background-image: linear-gradient(45deg, #33cc40 20%, #7cde84 40%, #f8e4a0 70%, #ffffff 95%);
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
  display: flex;
  flex-direction: column;
  gap: .5rem;
  padding-left: 1rem;

  li {
    display: flex;
    align-items: center;
    gap: .5rem;
  }

  svg {
    color: $reference-color-gray-70;
    width: 2.25rem;
    height: 2.25rem;
    stroke-width: 2.5;
  }

  a {
    font-size: 1.25rem;
    color: $reference-color-blue-60;
    font-weight: 500;

    &:hover {
      color: $reference-color-blue-40;
      text-decoration: underline;
    }
  }
}
</style>
