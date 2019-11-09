<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
// import { mapState, mapGetters } from 'vuex';
import ListItem from '../components/ListItem';
import bus from '../utils/bus';

export default {
  created() {
    bus.$emit('start:spinner');
    setTimeout(() => {
      this.$store.dispatch("FETCH_JOBS")
      .then(() => {
        console.log('fetched');
        bus.$emit('end:spinner');
      })
      .catch(err => {
        console.log(err);
      });
    }, 3000);    
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

