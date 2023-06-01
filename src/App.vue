<script lang="ts">
import HeaderBar from "./components/HeaderBar.vue";
import Categories from "./components/Categories.vue";
import IconLoader from "./components/icons/IconLoader.vue";
import PopupLayout from "./components/modals/PopupLayout.vue"
import mockArticles from "./mockArticles.json";
export default {
  name: "App",
  components: { HeaderBar, Categories, IconLoader, PopupLayout },
  data() {
    return {
      fetchArticles: null,
    };
  },
  mounted() {
    this.$store.dispatch("fetchData", mockArticles);
  },
  computed: {
    isFetchArticles() {
      return this.$store.state.fetchArticles?.length;
    },
  },
};
</script>

<template>
  <div id="app">
    <main class="main" :class="isFetchArticles && 'has-articles'">
      <template v-if="!isFetchArticles">
        <IconLoader />
      </template>
      <template v-else>
        <HeaderBar />
        <Categories />
      </template>
    </main>
    <PopupLayout />
  </div>
</template>

<style scoped lang="sass">
.main
  display: flex
  flex-direction: column
  justify-content: center
  padding: 2rem 4rem
  min-width: 100%
  min-height: 100%
  max-width: 86rem
  flex:1 1 auto
  &.has-articles
    justify-content: flex-start
</style>
