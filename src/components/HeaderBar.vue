<script setup lang="ts">
import ButtonAddCategory from "./buttons/ButtonAddCategory.vue";
import SearchBar from "./SearchBar.vue";
</script>

<template>
  <div class="header-bar">
    <ButtonAddCategory />
    <SearchBar placeholder="Найти статью" />
  </div>
</template>

<style scoped lang="sass">
.header-bar
  display: flex
  min-width: 100%
</style>
