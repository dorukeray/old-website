<script setup>
import {
  BrandFinderIcon,
  BrandOpenSourceIcon,
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
  title: "introducing sage",
  tagline: "the marvelous data exchange protocol for APIs",
  statement: `Sage aims to simplify the communication for data interactions between different layers of software, and designed especially for APIs.`,
  picture: {
    source: "/images/SitReadingDoodle.svg",
    title: "some psychedelics make it work 😉"
  },
};

const postCard = {
  token: "july",
  value: "09",
  tag: "post",
  title: "lorem ipsum",
  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae perspiciatis soluta a id quae ea ullam suscipit, sapiente temporibus molestias?",
  person: {
    name: "doruk eray",
    avatar: "/images/doruk.png",
    role: "ceo"
  }
};

</script>

<template>
  <main>
    <Showcase style="margin-top: 0;">
      <template #main>
        <Hero :title="hero.title" :tagline="hero.tagline" :statement="hero.statement" style="margin-top: 0 !important;">
          <template #head>
          </template>
          <template #content>
            <div class="button-container" style="padding: 0;">
              <Button type="fill" link="/about">sign up</Button>
              <Button type="tonal" link="/about">log in</Button>
            </div>
          </template>
        </Hero>

      </template>
      <template #side>
        <Picture :source="hero.picture.source" :title="hero.picture.title" />
      </template>
    </Showcase>

    <Break />

    <Hero title="lorem ipsum" tagline="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
      statement="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod explicabo error distinctio, dolorum eveniet adipisci."
      center>
      <template #head>
        <PeaceIcon class="badge" />
      </template>
      <template #content>
        <div class="button-container" style="padding: 0; text-align: center;">
          <Button type="fill" link="/about">sign up</Button>
          <Button type="tonal" link="/about">log in</Button>
        </div>
      </template>
    </Hero>

    <Break />

    <article>
      <h2>What is Sage?</h2>
      <p>
        Sage is an open protocol for designing and building better APIs, simply a specification about how
        to query/response for data and a runtime capable of executing those queries with your existing business logic
        and data.
      </p>
      <Picture :source="'/images/workdesk.jpg'" :title="'no time like the present.'" />
      <p>
        Sage provides a <b>simple</b> & <b>lightweight</b> but also <b>efficient, expressive, productive</b> and
        <b>intuitive</b>
        way for describing the data in your API, giving clients the
        power to interact with your API exactly how they need to—performing data retrieval or actions—makes
        evolving and documenting your APIs easier.
      </p>
      <Quote message="here's to the crazy ones..." owner="steve jobs" />
      <div class="button-container">
        <LinkButton action="read more" title="about us" link="/about" />
        <LinkButton action="read more" title="work @ dorkodu" link="/work" />
        <LinkButton action="read more" title="our manifesto" link="/manifesto" />
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates molestiae dicta explicabo eos distinctio
        animi veniam quidem saepe quo pariatur? Ipsa id modi at odit laborum vero, natus voluptatem facere?
      </p>
      <p>We created Sage for catalyzing the <strong>Web 3.0</strong> revolution.</p>
      <div class="button-container" style="text-align: center;">
        <Button type="fill">follow us</Button>
        <Button type="tonal">follow us</Button>
        <Button type="outline">follow us</Button>
        <Button type="text">follow us</Button>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, dignissimos!</p>
      <Testimonial name="steve jobs" title="founder of apple computer"
        quote="Here’s to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They’re not fond of rules, and they have no respect for the status quo. You can quote them; disagree with them; glorify or vilify them. About the only thing you can’t do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world are the ones who do." />
    </article>

    <Break />

    <Showcase>
      <template #main>
        <DescriptiveList title="lorem ipsum sit."
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi unde magni a ex deserunt!">
          <DescriptiveItem title="lorem ipsum"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi unde voluptates magni a ex deserunt!">
            <BrandFinderIcon class="badge" />
          </DescriptiveItem>
          <DescriptiveItem title="Lorem ipsum dolor sit."
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis magni labore molestias tempore cupiditate odio dolorem at error natus quibusdam.">
            <BlurIcon class="badge" />
          </DescriptiveItem>
          <DescriptiveItem title="lorem ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, voluptas?">
            <SchemaIcon class="badge" />
          </DescriptiveItem>
        </DescriptiveList>
      </template>
      <template #side>
        <Picture :source="hero.picture.source" :title="hero.picture.title" />
      </template>
    </Showcase>

    <Break />

    <article>
      <TeamMember name="doruk eray" title="founder & chief"
        about="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo quas illum id officia. Pariatur sit ipsum optio nesciunt? Alias, dignissimos."
        avatar="/images/doruk.png">
        <template #symbol>
          <Flag3Icon size="32" />
          <ToolsIcon size="32" />
          <BuildingBankIcon size="32" />
        </template>
        <template #more></template>
      </TeamMember>
      <hr>
      <TeamMember name="berk cambaz" title="technologist"
        about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, enim. Dolorem doloremque similique dolorum repellat minus sequi fugiat nihil?"
        avatar="/images/berk.png">
        <template #symbol>
          <BrandOpenSourceIcon size="32" />
          <CpuIcon size="32" />
          <CodeIcon size="32" />
        </template>
        <template #more></template>
      </TeamMember>
    </article>

    <Break />

    <CardDeck :columns="3">
      <Card title="title" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, dignissimos!">
        <template #badge>
          <CodeIcon class="badge" size="32" />
        </template>
      </Card>

      <Card title="title" tag="php"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, dignissimos!" />
      <Card title="title" tag="php"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, dignissimos!" />
      <Card title="title" tag="php"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, dignissimos!" />
      <Card title="title" tag="php"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, dignissimos!" />
    </CardDeck>

    <Break />

    <Showcase>
      <template #main>
        <PostCard :data="postCard" />
      </template>
      <template #side>
        <Picture source="/images/doruk.png" title="hello world!" />
      </template>
    </Showcase>

    <Break />
  </main>
</template>

<style lang="scss">
</style>