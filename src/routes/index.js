import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import createListView from '../views/CreateListView';
import bus from '../utils/bus.js';
import { store } from '../store';

Vue.use(VueRouter);

const listBeforeEnter = (to, from, next) => {
  bus.$emit('start:spinner');
  store.dispatch("FETCH_LIST", to.name)
  .then(() => next())
  .catch(err => {
    console.log(err);
  });
};

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
      beforeEnter: listBeforeEnter
      // component: createListView('NewsView')
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
      beforeEnter: listBeforeEnter
      // component: createListView('AskView')
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      beforeEnter: listBeforeEnter
      // component: createListView('JobsView')
    },
    {
      path: '/user/:id',
      component: UserView
    },
    {
      path: '/item/:id',
      component: ItemView
    }
  ],
});