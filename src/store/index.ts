import Vue from "vue";
import Vuex, { Commit } from "vuex";

Vue.use(Vuex);

const state = {
  isPopupShow: false,
  popupMode: {
    mode: "",
    id: "",
  },
  fetchArticles: [],
  categories: [
    {
      id: "1",
      parentId: null,
      category: "First category",
      cards: [
        "2489697a-c57a-4f85-9ba7-ad353f3ba314",
        "2489697a-c57a-4f85-9ba7-ad353f3ba315",
      ],
    },
    {
      id: "2",
      parentId: "1",
      category: "2 category",
      cards: [
        "76270300-83c0-41b0-8b08-6140e9bcc86d",
        "08c51e65-35d3-422d-94bc-b13593585f72",
      ],
    },
    {
      id: "3",
      parentId: "2",
      category: "3 category",
      cards: [
        {
          id: "64f20fda-430b-4e89-a652-73b76cab8d23",
          title: "third card",
          link: "http://",
          description: "description 3",
          likes: 0,
        },
        {
          id: "66896f6e-54bc-4351-aab8-357343947e0b",
          title: "fourth card",
          link: "http://",
          description: "description 4",
          likes: 0,
        },
      ],
    },
    {
      id: "4",
      parentId: null,
      category: "4 category",
      cards: [
        {
          id: "76270300-83c0-41b0-8b08-6140e9bcc86d",
          title: "First card",
          link: "http://",
          description: "description 1",
          likes: 0,
        },
        {
          id: "08c51e65-35d3-422d-94bc-b13593585f72",
          title: "Second card",
          link: "http://",
          description: "description 2",
          likes: 0,
        },
      ],
    },
    {
      id: "5",
      parentId: "2",
      category: "5 category",
      cards: [
        {
          id: "64f20fda-430b-4e89-a652-73b76cab8d23",
          title: "third card",
          link: "http://",
          description: "description 3",
          likes: 0,
        },
        {
          id: "66896f6e-54bc-4351-aab8-357343947e0b",
          title: "fourth card",
          link: "http://",
          description: "description 4",
          likes: 0,
        },
      ],
    },
  ],
};

const mutations = {
  showPopup(state: State, payload: State["popupMode"]) {
    state.popupMode = { ...payload };
    state.isPopupShow = true;
  },
  hidePopup(state: State) {
    state.isPopupShow = false;
  },
  setFetchData(state: State, payload: Article[]) {
    state.fetchArticles = payload;
  },
  addCategory(state: State, payload: Category) {
    state.categories = [...state.categories, payload];
  },
  editCategory(state: State, payload: Category) {
    state.categories = [
      ...state.categories.filter((el) => el.id !== payload.id),
      payload,
    ];
  },
  removeCategory(state: State, categoryId: string) {
    state.categories = state.categories.filter(
      (category) => category.id !== categoryId
    );
  },
  editArticle(state: State, payload: Article) {
    state.fetchArticles = [
      ...state.fetchArticles.filter((el) => el.id !== payload.id),
      payload,
    ];
  },
  likeArticle(state: State, payload: Article) {
    state.fetchArticles = [
      ...state.fetchArticles.filter((el) => el.id !== payload.id),
      ...state.fetchArticles.filter((el) => {
        if (el.id === payload.id) {
          return { ...el, likes: el.likes + 1 };
        }
      }),
    ];
  },
};

const actions = {
  fetchData({ commit }: { commit: Commit }, payload: Category[]) {
    setTimeout(() => {
      commit("setFetchData", payload);
    }, 1000);
  },
};

const getters = {
  categories: (state: State) => state.categories,
  categoriesLength: (state: State) => state.categories.length,
  categoryArticlesLength: (state: State) => state.categories, // рекурсивно собрать кол-во статей
  categoriesGetParent: (state: State) => state.categories,
  popupMode: (state: State) => state.popupMode.mode,
  modeId: (state: State) => state.popupMode.id,
  isShowPopup: (state: State) => state.isPopupShow,
  allArticles: (state: State) => state.fetchArticles,
  allCategories: ({ categories }: State) => {
    return categories.map((category: Category) => ({
      id: category.id,
      parentId: category.parentId,
      category: category.category,
    }));
  },
  articleById: (state: State) => state.fetchArticles,
  getChildrenByID:
    ({ categories }: State) =>
    (id: string) => {
      return categories.filter((obj) => obj.parentId === id);
    },
  getParent({ categories }: State) {
    return categories.filter((obj) => obj.parentId === null);
  },
};

type Article = {
  title: string;
  link: string;
  description: string;
  likes: number;
  id: string;
};

type Category = {
  id: string;
  parentId: string | null;
  category: string;
  cards: string[];
};
interface State {
  isPopupShow: boolean;
  fetchArticles: Article[];
  categories: Category[];
  popupMode: {
    mode: string;
    id: string | undefined;
  };
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
