<script lang="ts">
import SearchIcon from "./icons/IconSearch.vue";

export default {
  props: ["placeholder"],
  components: { SearchIcon },
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    searchArticle() {
      console.log('console >>> ', this.searchText);
    },
  },
};
</script>
<template>
  <div class="search-bar">
    <input
      :model="searchText"
      class="base-input search-bar--input"
      type="text"
      :placeholder="placeholder"
      @keyup.enter="searchArticle"
    />
    <div class="search-icon" @click="searchArticle">
      <SearchIcon />
    </div>
  </div>
</template>

<style scoped lang="sass">
.search-bar
  position: relative
  flex: 1
  &--input
    margin-left: 0.5rem
  .search-icon
    position: absolute
    top: 10px
    right: 10px
    cursor: pointer
</style>
