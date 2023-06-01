<script setup lang="ts"></script>
<template>
  <button class="cancel-btn">
    <p class="cancel-btn--text">Отмена</p>
  </button>
</template>


<style scoped lang="sass">
.cancel-btn
  display: flex
  background: var(--color-primary)
  color: var(--color-white)
  border-radius: 0.1875rem
  padding: 0.75rem 1rem 0.625rem 1rem
  &:hover
    background: var(--color-primary-hover)
  &:active
    background: var(--color-primary-active)
  &.disable
    background: var(--color-primary-disable)
  &--text
    font-size: 1rem
</style>