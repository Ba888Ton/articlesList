<template>
  <div v-if="isShowPopup" class="background-fill">
    <component :is="popupMode" />
  </div>
</template>

<script lang="ts">
import { mapMutations, mapGetters } from "vuex";
import CreateCategory from "./CreateCategory.vue";
import EditCategory from "./EditCategory.vue";
import DeleteCategory from "./DeleteCategory.vue";

export default {
  components: {
    CreateCategory,
    DeleteCategory,
    EditCategory,
  },
  computed: {
    ...mapGetters(["popupMode", "isShowPopup"]),
  },
};
</script>

<style scoped lang="sass">
.background-fill
  background: var(--color-background-fill)
  z-index: 100
  position: fixed
  left: 0
  right: 0
  top: 0
  bottom: 0
  display: flex
  justify-content: center
</style>
