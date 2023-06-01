<template>
  <div class="article-card">{{ content }}</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    content: [],
  },
});
</script>

<style scoped lang="sass">
.article-card
  border-radius: 0.625rem
  border: 1px solid var(--color-border-hover)
  height: 18.45rem
</style>
