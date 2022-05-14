import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    userinfo: "",
    themeColor: "" || localStorage.getItem("theme"),

    selected_chat: "",
    messages: "",
    token: "" || localStorage.getItem("user"),
    mobile: "",
    stream_settings: {
      geoposition: "" || localStorage.getItem("geoposition"),
      registered: "" || localStorage.getItem("registered"),
      gender: {
        male: "" || localStorage.getItem("male"),
        female: "" || localStorage.getItem("female"),
      },
    },
    me: {
      avatar: "",
    },
    auth: {
      username: "",
      password: "",
    },
    register: {
      username: "",
      password: "",
    },
    users: []
  },
  getters: {
    themeColor: (state) => {
      return state.themeColor
    },
    selected_chat: (state) => {
      return state.selected_chat;
    },
    messages: (state) => {
      return state.messages;
    },
    token: (state) => {
      return state.token;
    },
    mobile: (state) => {
      return state.mobile;
    },
    base_search: (state) => {
      return state.stream_settings;
    },
    me: (state) => {
      return state.me;
    },
    userinfo: (state) => {
      return state.userinfo;
    },
    auth_data: (state) => {
      return state.auth;
    },
    register_data: (state) => {
      return state.register;
    }
  },
  mutations: {
    themeColor(state, theme) {
      state.themeColor = theme
    },
    userinfo(state, info) {
      state.userinfo = info;
    },
    select_chat(state, user) {
      state.selected_chat = user;
    },
    add_message(state, message) {
      state.selected_chat.user.messages.push(message);
    },
    messages_update(state) {
      if (state.selected_chat.user.messages) {
        state.messages = state.selected_chat.user.messages;
      } else {
        state.messages = [];
      }
    },
    login(state, token) {
      state.token = token;
    },
    logout(state) {
      state.token = "";
    },
    mobile: (state, bool) => {
      state.mobile = bool;
    },
    base_search: (state, presets) => {
      state.stream_settings = presets;
    },
    me: (state, data) => {
      state.me = data;
    },
    auth: (state, data) => {
      state.auth.username = data.username;
      state.auth.password = data.password;
    },
    register: (state, data) => {
      if (data.username) {
        state.register.username = data.username;
      }
      if (data.password) {
        state.register.password = data.password;
      }
    },
  },
  actions: {
    select_chat(state, user) {
      state.selected_chat = user;
    },
    users: (state) => {
      axios({
        method: "post",
        url: "//localhost:3000/user/get_friends",
        data: {
          token: state.token
        }
      }).then(response => {
        console.log(response)
        return state.users = response.data
      }).catch(err => {
        console.log(err)
      })
    }
  },
  modules: {},
});
