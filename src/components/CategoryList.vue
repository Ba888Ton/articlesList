<template>
  <div class="category">
    <ul v-for="item in categories" :key="item.id" class="category--item">
      <AppAccordion
        v-bind="{
          id: item.id,
          category: item.category,
          cards: item.cards,
          children: item.children,
        }"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppAccordion from "./AppAccordion.vue";

export default Vue.extend({
  name: "CategoryList",
  components: { AppAccordion },
  data() {
    return {};
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    },
  },
  watch: {},
});
</script>

<style scoped lang="sass">
.category
  display: flex
  flex-direction: column
  flex: 1
  &--item
    flex: 1
.categories-list
  display: grid
  grid-template-columns: repeat(4, 1fr)
  gap: 1rem 1rem
</style>
