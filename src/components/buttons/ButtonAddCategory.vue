<script lang="ts">
import IconAdd from "../icons/IconAdd.vue";


export default {
  data() {
    return {};
  },
  components: { IconAdd },
  methods: {
    createCategory() {
      this.$store.commit("showPopup", {
        mode: "CreateCategory",
      });
    },
  },
};
</script>
<template>
  <button @click="createCategory" class="primary-btn">
    <p class="primary-btn--text">Создать категорию</p>
    <IconAdd />
  </button>
</template>
<style scoped lang="sass"></style>
