<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem';
import bus from '../utils/bus.js';

export default {
  created() {
    bus.$emit('start:spinner');
    setTimeout(() => {
      this.$store.dispatch("FETCH_NEWS")
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
};
</script>