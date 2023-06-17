<template>
  <div class="popup-layout">
    <div class="popup-body">
      <IconQuestion />
      <div class="popup-body--text">
        <h3 class="title-3">Удалить категорию?</h3>
        <p>Все дочерние категории удалятся.</p>
      </div>
      <div class="popup-action">
        <button class="primary-btn" @click="confirmRemove">Удалить</button>
        <button class="secondary-btn" @click="hidePopup">Отмена</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapMutations } from "vuex";
import IconQuestion from "../icons/IconQuestion.vue";

export default {
  name: "DeleteCategory",
  components: { IconQuestion },
  computed: {
    ...mapGetters([
      "categories",
      "categoriesLength",
      "modeId",
      "allArticles",
      "allCategories",
    ]),
  },
  methods: {
    ...mapMutations(["removeCategory", "hidePopup"]),
    confirmRemove() {
      this.removeCategory(this.modeId);
      this.hidePopup();
    },
  },
};
</script>

<style scoped lang="sass">
.popup-layout
  flex-basis: 29rem
  max-height: 17rem
.popup-body
  flex: 1
  justify-content: center
  align-items: center
  &--text
    text-align: center
    margin-top: 0.75rem
    margin-bottom: 1rem
.popup-action
  border: none

</style>
