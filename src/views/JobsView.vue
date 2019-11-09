<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
// import { mapState, mapGetters } from 'vuex';
import ListItem from '../components/ListItem';

export default {
  created() {
    this.$store.dispatch("FETCH_JOBS");
  },
  components: {
    ListItem,
  }
  // computed: {
  //   ...mapGetters([
  //     'fetchedAsk',
  //   ]),

  //   // ...mapState({
  //   //   ask: state => state.ask
  //   // })
  // },
  // created() {
  //   this.$store.dispatch('FETCH_ASK');
  // }
}
</script>

