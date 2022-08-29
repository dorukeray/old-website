<script setup lang="ts">
const hero = {
  title: "oops!",
  tagline: "something's gone wrong :(",
  statement: `just use the links to surf the website.`,
  picture: {
    source: "/images/coffee.png",
  },
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
              <Button type="fill" link="/about">back to home</Button>
            </div>
          </template>
        </Hero>
      </template>
      <template #side>
        <Picture :source="hero.picture.source" />
      </template>
    </Showcase>
    <Break />
    <article class="dorkodian-hero">
      <Bulletpoint icon="🔗">
        <h3>some useful links</h3>
        <ul style="margin: .25rem .5rem !important;">
          <li>
            <p><b>🐦</b>&nbsp; i tweet often, <a href="https://twitter.com/d0rukeray">follow me on twitter</a>.</p>
          </li>
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
        </ul>
      </Bulletpoint>
    </article>
  </main>
</template>
  
  <style lang="scss" scoped>
  </style>
  