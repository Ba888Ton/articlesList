<script lang="ts">

import EmptyArticles from "./EmptyArticles.vue";
import CategoryList from "./CategoryList.vue";
export default {
  components: { EmptyArticles, CategoryList },
  data() {
    return {
      categories: [],
    };
  },
};
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
