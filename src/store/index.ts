import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  isPopupShow: false,
  popupMode: {
    mode: "",
    id: "",
  },
  fetchArticles: [],
  cards: [
    {
      title: "First card",
      link: "http://",
      description: "description 1",
      likes: 2,
    },
    {
      title: "Second card",
      link: "http://",
      description: "description 2",
      likes: 3,
    },
    {
      title: "third card",
      link: "http://",
      description: "description 3",
      likes: 1,
    },
    {
      title: "fourth card",
      link: "http://",
      description: "description 4",
      likes: 0,
    },
  ],
  categories: [
    {
      id: "ad32f0cb-3377-411b-bc6c-ce9755b6bdb7",
      category: "First category",
      cards: [
        {
          id: "76270300-83c0-41b0-8b08-6140e9bcc86d",
          title: "First card",
          link: "http://",
          description: "description 1",
          likes: 2,
        },
        {
          id: "08c51e65-35d3-422d-94bc-b13593585f72",
          title: "Second card",
          link: "http://",
          description: "description 2",
          likes: 3,
        },
        {
          id: "64f20fda-430b-4e89-a652-73b76cab8d23",
          title: "third card",
          link: "http://",
          description: "description 3",
          likes: 1,
        },
        {
          id: "66896f6e-54bc-4351-aab8-357343947e0b",
          title: "fourth card",
          link: "http://",
          description: "description 4",
          likes: 0,
        },
      ],
      children: [
        {
          category: "sub-category 1 for category 1",
          id: "ad32f0cb-3377-411b-bc6c-ce9755b6bdb71",
          cards: [
            {
              id: "a4f469a0-9b7b-4b13-b8e9-f5adbdc7574d",
              title: "First card",
              link: "http://",
              description: "description 1",
              likes: 2,
            },
            {
              id: "5573cbef-567f-4ea3-a5f4-c13777b3a50a",
              title: "Second card",
              link: "http://",
              description: "description 2",
              likes: 3,
            },
            {
              id: "b75144a1-7b2c-4c9b-8432-1458f54441cb",
              title: "third card",
              link: "http://",
              description: "description 3",
              likes: 1,
            },
            {
              id: "b75144a1-7b2c-4c9b-8432-1458f54441c1",
              title: "fourth card",
              link: "http://",
              description: "description 4",
              likes: 0,
            },
          ],
          children: [
            {
              category: "sub-sub-category 1",
              id: "ad32f0cb-3377-411b-bc6c-ce9755b6bdb72",
              cards: [
                {
                  id: "b75144a1-7b2c-4c9b-8432-1458f54441c2",
                  title: "First card",
                  link: "http://",
                  description: "description 1",
                  likes: 2,
                },
                {
                  id: "b75144a1-7b2c-4c9b-8432-1458f54441c3",
                  title: "Second card",
                  link: "http://",
                  description: "description 2",
                  likes: 3,
                },
                {
                  id: "b75144a1-7b2c-4c9b-8432-1458f54441c4",
                  title: "third card",
                  link: "http://",
                  description: "description 3",
                  likes: 1,
                },
                {
                  id: "b75144a1-7b2c-4c9b-8432-1458f54441c5",
                  title: "fourth card",
                  link: "http://",
                  description: "description 4",
                  likes: 0,
                },
              ],
              children: [
                {
                  category: "sub-sub-sub-category 1",
                  id: "ad32f0cb-3377-411b-bc6c-ce9755b6bdb73",
                  cards: [
                    {
                      id: "b75144a1-7b2c-4c9b-8432-1458f54441c6",
                      title: "First card",
                      link: "http://",
                      description: "description 1",
                      likes: 2,
                    },
                    {
                      id: "b75144a1-7b2c-4c9b-8432-1458f54441c7",
                      title: "Second card",
                      link: "http://",
                      description: "description 2",
                      likes: 3,
                    },
                    {
                      id: "b75144a1-7b2c-4c9b-8432-1458f54441c8",
                      title: "third card",
                      link: "http://",
                      description: "description 3",
                      likes: 1,
                    },
                    {
                      id: "b75144a1-7b2c-4c9b-8432-1458f54441c9",
                      title: "fourth card",
                      link: "http://",
                      description: "description 4",
                      likes: 0,
                    },
                  ],
                },
                {
                  category: "sub-sub-sub-category 2",
                  id: "ad32f0cb-3377-411b-bc6c-ce9755b6bdb74",
                  cards: [
                    {
                      id: "b75144a1-7b2c-4c9b-8432-1458f54441c0",
                      title: "First card",
                      link: "http://",
                      description: "description 1",
                      likes: 2,
                    },
                    {
                      id: "b75144a1-7b2c-4c9b-8432-1458f54441cb1",
                      title: "Second card",
                      link: "http://",
                      description: "description 2",
                      likes: 3,
                    },
                    {
                      id: "b75144a1-7b2c-4c9b-8432-1458f54441cb2",
                      title: "third card",
                      link: "http://",
                      description: "description 3",
                      likes: 1,
                    },
                    {
                      id: "b75144a1-7b2c-4c9b-8432-1458f54441cb3",
                      title: "fourth card",
                      link: "http://",
                      description: "description 4",
                      likes: 0,
                    },
                  ],
                },
              ],
            },
            {
              category: "sub-sub-category 2", 
              id: "ad32f0cb-3377-411b-bc6c-ce975536bdb75",
              cards: [
                {
                  id: "b75144a1-7b2c-4c9b-8432-1458f54441cb4",
                  title: "First card",
                  link: "http://",
                  description: "description 1",
                  likes: 2,
                },
                {
                  id: "b75144a1-7b2c-4c9b-8432-1458f54441cb5",
                  title: "Second card",
                  link: "http://",
                  description: "description 2",
                  likes: 3,
                },
                {
                  id: "b75144a1-7b2c-4c9b-8432-1458f54441cb6",
                  title: "third card",
                  link: "http://",
                  description: "description 3",
                  likes: 1,
                },
                {
                  id: "b75144a1-7b2c-4c9b-8432-1458f54441cb7",
                  title: "fourth card",
                  link: "http://",
                  description: "description 4",
                  likes: 0,
                },
              ],
            },
          ],
        },
        {
          category: "sub-category 2 for category 1",
          id: "ad32f0cb-3377-411b-bc6c-ce9755b6bdb75",
          cards: [
            {
              id: "419dab3f-4fb3-4f67-8256-4561962b394a",
              title: "First card",
              link: "http://",
              description: "description 1",
              likes: 2,
            },
            {
              id: "419dab3f-4fb3-4f67-8256-4561962b394a1",
              title: "Second card",
              link: "http://",
              description: "description 2",
              likes: 3,
            },
            {
              id: "419dab3f-4fb3-4f67-8256-4561962b394a2",
              title: "third card",
              link: "http://",
              description: "description 3",
              likes: 1,
            },
            {
              id: "419dab3f-4fb3-4f67-8256-4561962b394a3",
              title: "fourth card",
              link: "http://",
              description: "description 4",
              likes: 0,
            },
          ],
        },
      ],
    },

    // {
    //   category: "Second category",
    //   cards: ["First card", "Second card", "third card", "fourth card"],
    //   children: [
    //     {
    //       category: "sub-category 1 for category 2",
    //       cards: ["First card", "Second card", "third card", "fourth card"],
    //       children: [
    //         {
    //           category: "sub-sub-category 1",
    //           cards: [
    //             "First card",
    //             "Second card",
    //             "third card",
    //             "fourth card",
    //           ],
    //         },
    //         { category: "sub-sub-category 2" },
    //       ],
    //     },
    //     {
    //       category: "sub-category 2 for category 2",
    //       cards: ["First card", "Second card", "third card", "fourth card"],
    //     },
    //   ],
    // },
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
  setFetchData(state: State, payload: Record<string, unknown>[]) {
    state.fetchArticles = payload;
  },
  addCategory(
    state: State,
    payload: { category: Record<string, unknown>; parentId: string }
  ) {
    if (payload.parentId) {
      const array = [...state.categories];
      const parent = array.pop();
      while (array.length > 0) {
        if (parent?.id === payload.parentId) {
          parent?.children.push(payload.category)
          return parent;
        }
        if(parent?.children) {
          array.push(...parent.children);
        }
      }
      state.categories = [...state.categories, ]
    } else {
      state.categories = [...state.categories, payload.category];
    }
  },
  removeCategory(state: State, payload) {
    state.categories = state.categories.filter(
      (category) => category.id !== payload.id
    );
  },
};

const actions = {
  fetchData(context, payload) {
    setTimeout(() => {
      context.commit("setFetchData", payload);
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
  allCategories: (state: State) => {
    const array = [...state.categories];
    const tree = [];
    while (array.length > 0) {
      const node = array.pop();
      tree.push({category: node.category, id: node.id});
      if(node.children) {
        array.push(...node.children);
      }
    }
    tree.shift();
    return tree;
  },
  articlesById: (state: State) => state.fetchArticles,
};

interface State {
  isPopupShow: boolean;
  fetchArticles: Record<string, any>[];
  categories: Record<string, any>[];
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
