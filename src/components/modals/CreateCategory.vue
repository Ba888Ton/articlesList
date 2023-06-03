<template>
  <div class="popup-layout">
    <div class="popup-body">
      <h3 class="title-3">Новая категория</h3>
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
            v-for="parent in allCategories"
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
      <div class="form-error" v-if="!$v.category.required && $v.category.$dirty">Name is required</div>
      <div class="form-error" v-if="!$v.category.minLength && $v.category.$dirty">
        Name must have at least {{ $v.category.$params.minLength }} letters.
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
import Vue from "vue";
import ButtonRemovableTitle from "../buttons/ButtonRemovableTitle.vue";
import { nanoid } from "nanoid";
import { mapGetters, mapMutations } from "vuex";
import { required, minLength } from "vuelidate/dist/validators.min";

export default Vue.extend({
  name: "CreateCategory",
  components: {
    ButtonRemovableTitle,
  },
  data() {
    return {
      parentId: "",
      category: "",
      cards: [],
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
  },
  methods: {
    ...mapMutations(["addCategory", "hidePopup"]),
    saveChanges() {
      const category = {
        id: nanoid(),
        parentId: this.parentId || null,
        category: this.category,
        cards: this.cards,
      };
      this.addCategory(category);
      this.hidePopup();
    },
    addArticle(articleId) {
      console.log(articleId);
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
});
</script>

<style scoped lang="sass">
.popup-layout
  display: flex
  flex-direction: column
  justify-content: space-between
  flex-basis: 52rem
  max-height: 43rem
  background: var(--vt-c-white)
  border-radius: 0.625rem
  padding: 2rem 2rem 1.5rem
  margin-top: 10rem
.popup-body
  display: flex
  flex-direction: column
  .article-list
    display: flex
    flex-wrap: wrap
    row-gap: 1rem
    column-gap: 1rem
  &--input, &--select
    margin-bottom: 1rem
    & option
      border: none
      border-radius: 5px
      padding: 0.5rem
.popup-action
  display: flex
  justify-content: space-between
  padding-top: 1rem
  border-top: 1px solid var(--color-border-hover)
  & button
    flex: 1
    &:first-child
      margin-right: 1.5rem
.form-error
  color: var(--color-primary)
  font-size: 0.75rem
  margin-top: auto
  margin-bottom: 1rem
</style>
