<template>
  <div class="popup-layout">
    <div class="popup-body">
      <h3 class="title-3">Редактировать категорию</h3>
      <input
        type="text"
        v-model.trim="$v.category.$model"
        class="base-input popup-body--input"
        :class="{ 'form-group--error': $v.category.$error }"
        placeholder="Название"
      />
      <div class="select">
        <select v-model="parentId" name="parent" id="standard-select">
          <option value="default" disabled>
            Родительская карточка (необязательно)
          </option>
          <option
            v-for="parent in parentOptions"
            :value="parent.id"
            :key="parent.id"
          >
            {{ parent.category }}
          </option>
        </select>
      </div>
      <div class="select">
        <select
          name="articles"
          @input="(e) => addArticle(e.target.value)"
          id="standard-select"
        >
          <option value="default" disabled hidden>Вложенные статьи</option>
          <option
            v-for="article in cardsOptions"
            :value="article.id"
            :key="article.id"
          >
            {{ article.title }}
          </option>
        </select>
      </div>
      <div class="article-list">
        <ButtonRemovableTitle
          v-for="card in cards"
          :title="card.title"
          @remove="removeArticle(card.id)"
          :key="card.id"
        />
      </div>
      <div
        class="form-error"
        v-if="!$v.category.required && $v.category.$dirty"
      >
        Name is required
      </div>
      <div
        class="form-error"
        v-if="!$v.category.minLength && $v.category.$dirty"
      >
        Name must have at least {{ $v.category.$params.minLength }} letters.
        <div v-for="card in categoryById(1)" :key="card.id">
          {{ card }}
        </div>
      </div>
    </div>
    <div class="popup-action">
      <button
        class="primary-btn"
        :class="$v.category.$invalid && 'disable'"
        :disabled="!!$v.category.$invalid"
        @click="saveChanges"
      >
        Сохранить
      </button>
      <button class="secondary-btn" @click="hidePopup">Отмена</button>
    </div>
  </div>
</template>
<script lang="ts">

import ButtonRemovableTitle from "../buttons/ButtonRemovableTitle.vue";
import { mapGetters, mapMutations } from "vuex";
import { required, minLength } from "vuelidate/dist/validators.min";

export default {
  name: "EditCategory",
  components: {
    ButtonRemovableTitle,
  },
  data() {
    return {
      parentId: "",
      category: "",
      cards: [],
      qqq: [],
    };
  },
  computed: {
    ...mapGetters([
      "categories",
      "categoriesLength",
      "modeId",
      "allArticles",
      "allCategories",
    ]),
    cardsOptions() {
      return this.allArticles.filter(
        (article) => !this.cards.find((card) => card.id === article.id)
      );
    },
    parentOptions() {
      let node = [this.currentCategory];
      const dependentNode = [];
      while (node.length > 0) {
        const parent = node.pop();
        dependentNode.push(parent);
        const children = this.allCategories.filter(
          (cat) => cat.parentId === parent.id
        );
        if (children.length) {
          node = [...node, ...children];
        }
      }
      return this.allCategories.filter(
        (cat) => !dependentNode.find(node => node.id === cat.id)
      );
    },
    currentCategory() {
      return this.categories.filter(
        (category) => category.id === this.modeId
      )[0];
    },
  },
  created() {
    this.parentId = this.currentCategory.parentId;
    this.category = this.currentCategory.category;
    this.cards = [...this.currentCategory.cards];
  },
  methods: {
    ...mapMutations(["editCategory", "hidePopup"]),
    saveChanges() {
      const category = {
        id: this.currentCategory.id,
        parentId: this.parentId || null,
        category: this.category,
        cards: this.cards,
      };
      this.editCategory(category);
      this.hidePopup();
    },
    addArticle(articleId) {
      const article = this.allArticles.find((card) => card.id === articleId);
      this.cards.push({ ...article });
    },
    removeArticle(articleId) {
      this.cards = this.cards.filter((card) => card.id !== articleId);
    },
  },
  validations: {
    category: {
      required,
      minLength: minLength(4),
    },
    cards: {
      required,
    },
  },
};
</script>

<style scoped lang="sass"></style>
