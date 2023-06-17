<script lang="ts">
import { mapGetters, mapMutations } from "vuex";
import IconShevron from "./icons/IconShevron.vue";
import AccordionItemMenu from "./AccordionItemMenu.vue";
import CardInstance from "./CardInstance.vue";

export default {
  name: "AppAccordion",
  components: {
    CardInstance,
    IconShevron,
    AccordionItemMenu,
  },
  props: {
    category: {
      type: String,
      required: true,
    },
    cards: {
      type: Array,
      default: () => [],
    },
    id: {
      type: [String, undefined],
      required: true,
    },
    child: {
      type: Object,
    },
  },
  data() {
    return {
      isOpen: false,
      isShowMenu: false,
    };
  },
  methods: {
    ...mapMutations(["showPopup"]),
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
    showMenu() {
      this.isShowMenu = true;
    },
    editList() {
      this.showPopup({
        mode: "EditCategory",
        id: this.id,
      });
    },
    deleteList() {
      this.showPopup({
        mode: "DeleteCategory",
        id: this.id,
      });
    },
  },
  computed: {
    ...mapGetters(["getChildrenByID"]),
  },
};
</script>
<template>
  <div class="accordion">
    <button
      class="accordion--header"
      :aria-expanded="isOpen"
      :aria-controls="`collapse${id}`"
    >
      <h2
        class="title-2 accordion--title accordion--action"
        @click="toggleAccordion"
      >
        {{ category }}
      </h2>
      <AccordionItemMenu
        :showMenu="isShowMenu"
        class="accordion--action accordion--option"
        @click="showMenu"
        @edit="editList"
        @delete="deleteList"
      />
      <IconShevron
        class="accordion--action shevron"
        :class="{
          'rotate-180': isOpen,
          'rotate-0': !isOpen,
        }"
        @click.native="toggleAccordion"
      />
    </button>

    <Transition>
      <li v-show="isOpen" :id="id">
        <div class="content">
          <CardInstance v-for="card in cards" :key="card.id" :content="card" />
        </div>
        <ul class="sub-article">
          <div v-for="item in getChildrenByID(id)" :key="item.id">
            <AppAccordion
              v-bind="{
                id: item.id,
                category: item.category,
                cards: item.cards,
                child: item.child,
              }"
            />
          </div>
        </ul>
      </li>
    </Transition>
  </div>
</template>
<style lang="sass" scoped>
.accordion
  margin: 3rem 0 0
  display: flex
  flex-direction: column
  &--header
    margin-bottom: 1rem
    display: flex
    flex: 1
  &--title
    margin-right: auto
  &--option
    margin: 0 1rem
  &--action
    cursor: pointer
.sub-article
  padding-left: 2rem
.content
  display: grid
  grid-template-columns: repeat(4, 1fr)
  gap: 1rem 1rem
.v-enter-active,
.v-leave-active
  transition: opacity 0.3s ease
.v-enter-from,
.v-leave-to
  opacity: 0
.shevron
  transition: rotate 200ms
.rotate-180
  rotate: 180deg
.rotate-0
  rotate: 0deg
</style>
