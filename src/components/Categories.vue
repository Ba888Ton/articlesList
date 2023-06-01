<script lang="ts">
import Vue from "vue";
import EmptyArticles from "./EmptyArticles.vue";
import CategoryList from "./CategoryList.vue";

export default Vue.extend({
  components: { EmptyArticles, CategoryList },
  data() {
    return {
      categories: [],
    };
  },
});
</script>

<template>
  <div class="articles-wrapper">
    <template v-if="categories.length">
      <EmptyArticles />
    </template>
    <template v-else>
      <CategoryList />
    </template>
  </div>
</template>

<style scoped lang="sass">
.articles-wrapper
  display: flex
  width: 100%
</style>
