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
      <h2>hi :)</h2>
      <h3 class="section-title">who i am?</h3>
      <p>my life purpose to <i>liberate the human with meaningful technology</i>, build the dream commonwealth of a
        heaven, but on earth. yep. that's my purpose 🤩</p>
      <h4>why?</h4>
      <SectionRuler />
      <p class="dorkodian-gradient">
        i want to live a free, happy and meaningful life. a humane life that everyone deserves.
        i believe this is a fundemental human right: a livable world & a life worth living.
        so we need to come together, and create this utopic dream life for everyone.
      </p>
      <h4>how?</h4>
      <p>I am Doruk, an autodidact high-school kid who is working on software, especially product engineering & design.
        I teach myself the arts of software engineering, design, user experience, computer science and so on.

        I want to achieve meaningful and remarkable things, be remembered as an inventor, innovator, pioneer; or in a
        single word, as a protagonist in the story of human.</p>
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

    <article>
      <h2>Summary</h2>
      <h3>Software</h3>
      <ul>
        <li>
          <p>I started coding with <strong>Scratch</strong> when I was <strong>10</strong>.</p>
        </li>
        <li>
          <p>I learnt the basics of programming and computer science with <strong>C</strong>.</p>
        </li>
        <li>
          <p>I wrote desktop apps with <strong>C#</strong> for 3 years. I was a slave of <strong>.NET</strong>, which
            makes me think this was my worst mistake.</p>
        </li>
        <li>
          <p>I've switched to pure web development in 2018. My best decision ever. I loved being able to write once, run
            everywhere!</p>
        </li>
        <li>
          <p>I love writing <strong>PHP</strong> and <strong>JS</strong>, they make me more productive.</p>
        </li>
        <li>
          <p>Now, I am in the <strong>architect</strong> role at Dorkodu's engineering. I am also responsible for all
            branding and UI/UX designs for our startup and products.</p>
        </li>
      </ul>
      <h3>Education</h3>
      <ul>
        <li>
          <p>I study at <strong>Vefa Lisesi</strong>, a historical high school in İstanbul, Türkiye.</p>
        </li>
        <li>
          <p>I am interested in <strong>philosophy, math, physics; visual arts and history.</strong> These are my
            favorite subjects in school.</p>
        </li>
        <li>
          <p>I have an incoming <em>"national university entrance exam"</em>&nbsp; in 2023, so I have to study for it
            😒.</p>
        </li>
      </ul>
    </article>
    <article>
      <h2>Specialities</h2>
      <ul>
        <p style="padding: 0; font-size: 1.75rem; font-family: 'Roboto Black'; color: var(--dorkodu-smokegray-darker);">
          I am...</p>
        <li>
          <p>a self-taught <strong>software engineer</strong>.</p>
        </li>
        <li>
          <p>a <strong>product design and engineering</strong> enthusiast.</p>
        </li>
        <li>
          <p>fluent in acronyms: <strong>PHP, JS, HTML, CSS...</strong></p>
        </li>
        <li>
          <p>using <strong>Linux</strong>.</p>
        </li>
        <li>
          <p>concentrated on <strong>computer science, information science, web 3.0</strong> and <strong>AI</strong>
            nowadays.</p>
        </li>
        <li>
          <p>a progressive but minimalist <strong>UI/UX designer</strong>.</p>
        </li>
        <li>
          <p>interested in different topics like <strong>green energy, modern agriculture, water, space, AI, education,
              genetics, neuroscience</strong> etc.</p>
        </li>
      </ul>
    </article>

    <p>I am Doruk, an <strong>autodidact</strong> high-school kid who is working on <strong>software</strong>,
      especially <strong>product engineering & design</strong>. i teach myself the arts of software engineering, design,
      user experience, computer science and so on.</p>
    <p>I want to achieve meaningful and remarkable things, be remembered as an inventor, innovator, pioneer; or in a
      single word, as a <strong>protagonist</strong> in the story of human.</p>

    <article>
      <h2>Story</h2>
      <div class="image-set undraw">
        <img src="./images/openbook.svg" alt="An Open Book">
        <p>My Story - begins in 2004</p>
      </div>
      <h3>Just a kid? Wait!</h3>
      <p>I was so curious that my mom had to teach me how to read and write when I was <strong>3</strong>. This was the
        start in my life. I loved tinkering with things, to understand how they work and how to build them. <strong>I've
          always been dreaming to be an inventor since then.</strong></p>
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

    <Break />
  </main>
</template>

<style lang="scss" scoped>
</style>
