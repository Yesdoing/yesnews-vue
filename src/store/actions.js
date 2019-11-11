import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItemInfo, fetchList } from '../api';

export default {
  FETCH_NEWS({commit}) {
    return fetchNewsList()
      .then(({data}) => {
        commit('SET_NEWS', data);
        return data;
      }).catch(e => {
        console.log(e);
      });
  },
  FETCH_ASK({commit}) {
    return fetchAskList()
      .then(({data}) => commit('SET_ASK', data))
      .catch(e => console.log(e));
  },
  FETCH_JOBS({commit}) {
    return fetchJobsList()
      .then(({data}) => commit('SET_JOBS', data))
      .catch(e => console.log(e));
  },
  FETCH_USER({ commit }, name) {
    return fetchUserInfo(name)
      .then(({data}) => commit('SET_USER', data))
      .catch(e => console.log(e));
  },
  FETCH_ITEM({ commit }, itemId) {
    return fetchItemInfo(itemId)
      .then(({data}) => commit('SET_ITEM', data))
      .catch(e => console.log(e));
  },
  FETCH_LIST({ commit }, pageName) {
    return fetchList(pageName)
      .then(({data}) => commit('SET_LIST', data))
      .catch(error => console.log(error))
  }
};