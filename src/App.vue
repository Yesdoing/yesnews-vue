<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="loading"></spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar';
import Spinner from './components/Spinner';
import bus from './utils/bus.js';

export default {
  components: {
    ToolBar,
    Spinner
  },
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    startSpinner() {
      this.loading = true;
    },
    endSpinner() {
      this.loading = false;
    }
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  }
}
</script>

<style>
 body {
   padding: 0;
   margin: 0;
 }

 a {
   text-decoration: none;
   color: #34495e;
 }
a:hover {
  color: #42b883;
  text-decoration: underline;
}
 a.router-link-exact-active {
   text-decoration: underline;
 }

 /* Router Transition  */
 .page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .page-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
