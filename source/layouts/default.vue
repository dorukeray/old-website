<script>
import twemoji from 'twemoji';

const renderTwemoji = function () {
  if (process.BROWSER_BUILD) {
    twemoji.size = '72x72';
    window.onNuxtReady(() => {
      twemoji.parse(document.body);
    });
  }
}

renderTwemoji();

</script>
<template>
  <div>
    <PageHeader />
    <slot />
    <PageFooter />
  </div>
</template>