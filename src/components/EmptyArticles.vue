<template>
  <div class="empty-articles">
    <h4>Пока нет статей</h4>
    <p class="secondary-text empty-articles--description">
      Создайте свою первую категорию и добавьте в неё статьи.
    </p>
    <ButtonAddCategory />
  </div>
</template>

<script lang="ts" setup>
import ButtonAddCategory from "./buttons/ButtonAddCategory.vue";
</script>

<style scoped lang="sass">
.empty-articles
  display: flex
  flex-direction: column
  align-items: center
  margin-top: 9rem
  width: 16.25rem
  &--description
    text-align: center
    margin: 0.25rem 0 1rem 0
</style>
