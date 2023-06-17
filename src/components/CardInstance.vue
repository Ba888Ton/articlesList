<template>
  <div class="card">
    <div class="card--action">
      <div class="card--like">
        <IconLikeInactive @click.native="addLike" />
        <p>{{ content.likes }}</p>
      </div>
      <IconEdit class="card--edit" @click.native="editCard" />
    </div>
    <div class="card--img">{{ content.link }}</div>
    <div class="card--description">{{ content.description }}</div>
  </div>
</template>

<script lang="ts">
import IconLikeInactive from "./icons/IconLikeInactive.vue";
import IconEdit from "./icons/IconEdit.vue";
import { mapMutations, mapGetters } from "vuex";

export default {
  components: {
    IconLikeInactive,
    IconEdit,
  },
  props: {
    content: {},
  },
  methods: {
    ...mapMutations(["showPopup", "editArticle", "likeArticle"]),
    editCard() {
      this.editArticle("like");
    },
    addLike() {
      this.likeArticle(this.content);
    },
  },
};
</script>

<style scoped lang="sass">
.card
  border-radius: 0.625rem
  border: 1px solid var(--color-border-hover)
  height: 18.45rem
  padding: 1rem
  &--action
    display: flex
    justify-content: space-between
  &--edit
    cursor: pointer
  &--like
    cursor: pointer
    display: flex
</style>
