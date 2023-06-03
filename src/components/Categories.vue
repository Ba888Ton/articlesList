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
  <div>
    <template v-if="categories.length">
      <EmptyArticles />
    </template>
    <template v-else>
      <CategoryList />
    </template>
  </div>
</template>