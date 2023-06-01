<script lang="ts">
import Vue from "vue";
import IconKebab from "./icons/IconKebab.vue";

export default Vue.extend({
  components: { IconKebab },
  props: {
    showMenu: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isShowMenu: false,
    };
  },
  watch: {
    showMenu() {
      this.isShowMenu = true;
    }
  },
  methods: {
    toggleMenu() {
      this.isShowMenu = !this.isShowMenu;
    },
    editList() {
      this.$emit("edit");
    },
    deleteList() {
      this.$emit("delete");
    },
  },
});
</script>
<template>
  <div class="menu-block">
    <IconKebab @click.native="toggleMenu" />
    <div v-if="isShowMenu" class="drop-down">
      <button class="menu-block--btn" @click="editList">Редактировать</button>
      <button class="menu-block--btn" @click="deleteList">Удалить</button>
    </div>
  </div>
</template>

<style scoped lang="sass">
.menu-block
  position: relative
.drop-down
  position: absolute
  right: 0
  display: flex
  flex-direction: column
  background: var(--vt-c-white)
  padding: 0.5rem
  border-radius: 5px
  z-index: 5
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.07)
.menu-block--btn
  padding: 0.5rem
  border-radius: 5px
  &:hover
    background: var(--color-background-soft)
</style>
