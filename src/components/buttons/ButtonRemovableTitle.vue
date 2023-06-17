<script lang="ts">
import IconTrashbin from "../icons/IconTrashbin.vue";

export default {
  components: {
    IconTrashbin,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    removeTitle() {
      this.$emit("remove");
    },
  },
};
</script>
<template>
  <div class="title">
    <IconTrashbin class="title--remove" @click.native="removeTitle" />
    <p class="title--text">{{ title }}</p>
  </div>
</template>
<style scoped lang="sass">
.title
  display: flex
  &--remove
    cursor: pointer
    margin-right: 0.75rem
  &--text
    font-size: 1rem
</style>