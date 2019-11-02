import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItemInfo } from '../api';

export default {
  FETCH_NEWS({commit}) {
    fetchNewsList()
      .then(({data}) => {
        commit('SET_NEWS', data);
      }).catch(e => {
        console.log(e);
      });
  },
  FETCH_ASK({commit}) {
    fetchAskList()
      .then(({data}) => commit('SET_ASK', data))
      .catch(e => console.log(e));
  },
  FETCH_JOBS({commit}) {
    fetchJobsList()
      .then(({data}) => commit('SET_JOBS', data))
      .catch(e => console.log(e));
  },
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then(({data}) => commit('SET_USER', data))
      .catch(e => console.log(e));
  },
  FETCH_ITEM({ commit }, itemId) {
    fetchItemInfo(itemId)
      .then(({data}) => commit('SET_ITEM', data))
      .catch(e => console.log(e));
  }
};