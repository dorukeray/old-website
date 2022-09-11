<template>
  <article>
    <h3 style="margin-bottom: .5rem;">
      <Icon name="fluent-emoji-flat:call-me-hand-light" size="36" />
      contact
    </h3>
    <p style="margin: 0; margin-bottom: .5rem; text-align: center;">want to have a talk? <b>let's get in touch!</b></p>
    <CardDeck :columns="2">
      <div class="IconItem">
        <Icon name="tabler:brand-twitter" />
        <div>
          <span><a href="https://twitter.com/d0rukeray">twitter</a></span>
          <span><b>@d0rukeray</b><br>(tweets & dm)</span>
        </div>
      </div>
      <div class="IconItem">
        <Icon name="tabler:brand-telegram" />
        <div>
          <span><a href="https://t.me/dorukeray">telegram</a></span>
          <span><b>@dorukeray</b><br>(1:1 messages)</span>
        </div>
      </div>
      <div class="IconItem">
        <Icon name="tabler:brand-github" />
        <div>
          <span><a href="https://github.com/dorukeray">github</a></span>
          <span><b>@dorukeray</b><br>(open source)</span>
        </div>
      </div>
      <div class="IconItem">
        <Icon name="tabler:brand-instagram" />
        <div>
          <span><a href="https://instagram.com/d0rukeray">instagram</a></span>
          <span><b>@d0rukeray</b><br>(social life)</span>
        </div>
      </div>
      <div class="IconItem">
        <Icon name="tabler:brand-discord" />
        <div>
          <span><a href="https://discord.com/users/990571541026734080">discord</a></span>
          <span><b>dorukeray#5097</b><br>(community chat)</span>
        </div>
      </div>
      <div class="IconItem">
        <Icon name="tabler:mail-opened" />
        <div>
          <span><a href="mailto:doruk@dorkodu.com">email</a></span>
          <span><b>doruk@dorkodu.com</b><br>(no, please)</span>
        </div>
      </div>
    </CardDeck>
  </article>
</template>
<script setup lang="ts">

</script>
<style lang="scss" scoped>

</style>
