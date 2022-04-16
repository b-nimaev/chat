import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    users: [{
        id: 1,
        first_name: "Alexandr",
        last_name: "Balzhinimaev",
        username: "@alexandrbnimaev",
        avatar: "cats",
        messages: [{
            message_id: 1,
            sender_id: 2,
            message: {
              type: "text",
              text: "Привет!",
              date: "06.04.2022",
            },
          },
          {
            message_id: 2,
            sender_id: 1,
            message: {
              type: "text",
              text: "Ну привет",
              date: "06.04.2022",
            },
          },
          {
            message_id: 3,
            sender_id: 1,
            message: {
              type: "text",
              text: "Как зовут?",
              date: "06.04.2022",
            },
          },
          {
            message_id: 4,
            sender_id: 1,
            message: {
              type: "text",
              text: "меня Саша",
              date: "06.04.2022",
            },
          },
        ],
      },
      {
        id: 2,
        first_name: "Ekaterina",
        last_name: "Abramova",
        username: "@katyabramova",
        avatar: "katya",
        messages: [{
            message_id: 1,
            sender_id: 2,
            message: {
              type: "text",
              text: "Привет!",
              date: "06.04.2022",
            },
          },
          {
            message_id: 2,
            sender_id: 1,
            message: {
              type: "text",
              text: "Ну привет",
              date: "06.04.2022",
            },
          },
        ],
      },
      {
        id: 3,
        first_name: "Sasha",
        last_name: "b-nimaev",
        username: "@sblzh",
        avatar: "",
        messages: []
      },
      {
        id: 4,
        first_name: "Sakura",
        last_name: "Haruno",
        username: "@sakuraharuno",
        avatar: "sakura",
        messages: []
      },
      {
        id: 5,
        first_name: "Summer",
        last_name: "Smith",
        username: "@summersmith",
        avatar: "summer",
        messages: []
      },
      {
        id: 6,
        first_name: "Awesome",
        last_name: "Killer",
        username: "@username",
        avatar: "killer",
        messages: []
      }
    ],
    selected_chat: "",
    messages: "",
    token: "" || localStorage.getItem("user"),
    mobile: "",
    stream_settings: {
      geoposition: "" || localStorage.getItem("geoposition"),
      registered: "" || localStorage.getItem("registered"),
      gender: {
        male: '' || localStorage.getItem("male"),
        female: "" || localStorage.getItem("female")
      }
    },
    me: {
      avatar: ''
    }
  },
  getters: {
    selected_chat: (state) => {
      return state.selected_chat
    },
    users: (state) => {
      return state.users
    },
    messages: (state) => {
      return state.messages
    },
    token: (state) => {
      return state.token
    },
    mobile: (state) => {
      return state.mobile
    },
    base_search: (state) => {
      return state.stream_settings
    },
    me: (state) => {
      return state.me
    }
  },
  mutations: {
    select_chat (state, user) {
      state.selected_chat = user
    },
    add_message(state, message) {
      state.selected_chat.user.messages.push(message)
    },
    messages_update(state) {
      if (state.selected_chat.user.messages) {
        state.messages = state.selected_chat.user.messages
      } else {
        state.messages = []
      }
    },
    login (state, token) {
      state.token = token
    },
    logout(state) {
      state.token = ''
    },
    mobile: (state, bool) => {
      state.mobile = bool
    },
    base_search: (state, presets) => {
      state.stream_settings = presets
    },
    me: (state, data) => {
      state.me = data
    }
  },
  actions: {
    select_chat(state, user) {
      state.selected_chat = user
    }
  },
  modules: {},
});