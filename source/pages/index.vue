<script lang="ts" setup>
import {
  BrandTelegramIcon,
  BrandTwitterIcon,
  BrandGithubIcon,
  BrandInstagramIcon,
  MailOpenedIcon,
  ManIcon,
  UserIcon,
  ToolsIcon,
} from "vue-tabler-icons";

definePageMeta({
  title: "sage",
  tagline: "the marvelous data exchange protocol for APIs",
  description: `Sage aims to simplify the communication for data interactions between different layers of software, and designed especially for APIs.`,
})

const hero = {
  title: "hello!",
  tagline: "i'm doruk eray.",
  statement: `founder, product polymath, craftsman, forerunner of idealism, progressive lunatic, seeker of meaning.`,
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
            <p style="font-size: 1.15rem">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
              exercitationem eius. Dolorum incidunt consequatur modi expedita ipsum sed adipisci recusandae?</p>
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
            <MailOpenedIcon />
            <a href="mailto:doruk@dorkodu.com">email</a>
          </li>
        </ul>
      </template>
    </Showcase>

    <article>
      <h2>🌰 in a nutshell</h2>
      <SectionRuler />
    </article>

    <Showcase>
      <template #main>
        <DescriptiveList title="questions?" message="i like asking questions, a result of my curious nature.">
          <DescriptiveItem title="who?"
            description="thinker, leader, artist, inventor, polymath, idol, revolutionist, entrepreneur.">
            <ManIcon class="badge" />
          </DescriptiveItem>
          <DescriptiveItem title="what i love to do?"
            description="think, design, feel, create, build, socialize, tell, learn.">
            <MailOpenedIcon class="badge" />
          </DescriptiveItem>
          <DescriptiveItem title="for whom?" description="me, and everyone. the humanity.">
            <MailOpenedIcon class="badge" />
          </DescriptiveItem>
          <DescriptiveItem title="why?"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, nobis.">
            <MailOpenedIcon class="badge" />
          </DescriptiveItem>
        </DescriptiveList>
      </template>
      <template #side>
        <Picture source="/images/doruk.png" title="merhaba" />
      </template>
    </Showcase>

    <article>
      <h2>🛠️ my work</h2>
      <SectionRuler />
    </article>

    <Showcase>
      <template #main>
        <DescriptiveList title="lorem ipsum" message="lorem ipsum dolor sit amet consri.">
          <DescriptiveItem title="lorem ipsum"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, nobis.">
            <MailOpenedIcon class="badge" />
          </DescriptiveItem>
          <DescriptiveItem title="lorem ipsum"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, nobis.">
            <MailOpenedIcon class="badge" />
          </DescriptiveItem>
          <DescriptiveItem title="lorem ipsum"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, nobis.">
            <MailOpenedIcon class="badge" />
          </DescriptiveItem>
          <DescriptiveItem title="lorem ipsum"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, nobis.">
            <MailOpenedIcon class="badge" />
          </DescriptiveItem>
        </DescriptiveList>
      </template>
      <template #side>
        <Picture source="/images/doruk.png" title="merhaba" />
      </template>
    </Showcase>

    <Break />
    <Break />

    <Showcase>
      <template #main></template>
      <template #side></template>
    </Showcase>

    <Showcase>
      <template #main>
        <Hero title="my skillset" tagline="product design, software engineering, graphics, marketing."
          statement="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum doloremque pariatur atque molestiae error autem?">
          <template #head>
            <ToolsIcon class="badge" />
          </template>
        </Hero>
      </template>
      <template #side>
        <article>
          <h4>👨‍💻&nbsp;&nbsp;career</h4>
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
