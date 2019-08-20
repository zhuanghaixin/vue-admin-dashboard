import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//initial state

//查看系统默认是什么主题
if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
  window.localStorage.setItem("isDarkMode", "true")
}
const userSelectedDakMode =
  window.localStorage.getItem("isDarkMode") === "true";
const state = {
  isDarkMode: userSelectedDakMode
}

// getters
const getters = {
  isDarkMode(state) {
    return state.isDarkMode;
  }
}

// mutations
const mutations = {
  toggleDarkMode(state) {
    if (state.isDarkMode === true) {
      state.isDarkMode = false;
      document.body.style.backgroundColor = "#F0F3F5";
      window.localStorage.setItem("isDarkMode", "false");
    } else {
      state.isDarkMode = true;
      document.body.style.backgroundColor = "#212C4F";
      window.localStorage.setItem("isDarkMode", "true");

    }
  }
}

// actions
const actions = {
  triggerDarkMode(context) {
    context.commit("toggleDarkMode")
  }
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});