<template>
  <div class="category">
    <AppAccordion
      v-for="child in getParent"
      :key="child.id"
      class="category--item"
      v-bind="{
        id: child.id,
        category: child.category,
        cards: child.cards,
        child: child,
      }"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import AppAccordion from "./AppAccordion.vue";

export default Vue.extend({
  name: "CategoryList",
  components: { AppAccordion },
  computed: {
    ...mapGetters(["getParent"]),
  },
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
