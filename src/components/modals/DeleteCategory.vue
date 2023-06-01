<template>
  <div class="popup-body">
    <h3 class="title-3">Удалить категорию</h3>
    <input
      type="text"
      class="base-input popup-body--input"
      placeholder="Название"
    />
    <div class="select">
      <select name="parent" id="standard-select">
        <option value="default" disabled hidden>
          Родительская карточка (необязательно)
        </option>
        <option v-for="item in parentOption" :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <div class="select">
      <select name="articles" id="standard-select">
        <option value="default" disabled hidden>Вложенные статьи</option>
        <option v-for="item in articleOption" :key="item">
          {{ item }}
        </option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { nanoid } from "nanoid";

export default Vue.extend({
  name: "DeleteCategory",
  data() {
    return {
      parentOption: [1, 2],
      articleOption: [1, 2],
      model: {
        article: [1],
      },
    };
  },
  computed: {
    setId() {
      return nanoid();
    },
  },
});
</script>

<style scoped lang="sass"></style>
