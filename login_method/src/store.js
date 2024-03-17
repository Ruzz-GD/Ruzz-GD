//// store/index.js
import { createStore } from 'vuex';

const KEY_IS_AUTHENTICATED = 'isAuthenticated';
const KEY_ACTIVE_CONTENT = 'activeContent';
export default createStore({
  state: {
    isAuthenticated: localStorage.getItem(KEY_IS_AUTHENTICATED) === 'true' || false,
    activeContent: localStorage.getItem(KEY_ACTIVE_CONTENT) || 'home',
  },
  mutations: {
    setAuthentication(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
      localStorage.setItem(KEY_IS_AUTHENTICATED, isAuthenticated);
    },
    setActiveContent(state, newActiveContent) {
      state.activeContent = newActiveContent;
      localStorage.setItem(KEY_ACTIVE_CONTENT, newActiveContent);
    },
  },
  actions: {
    login({ commit }) {
      // Perform authentication logic
      // If successful, set isAuthenticated to true
      commit('setAuthentication', true);
    },
    logout({ commit }) {
      // Perform logout logic
      // Set isAuthenticated to false
      commit('setAuthentication', false);
    },
  },
});
