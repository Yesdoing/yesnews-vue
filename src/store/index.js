import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

// vuex 동작 구조
/**
 * api -> actions -> mutations -> state 순으로 동작
 */

export const store = new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs: [],
    user: {},
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    }
  },
  mutations,
  actions,
});

