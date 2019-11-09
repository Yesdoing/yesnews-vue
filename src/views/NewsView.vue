<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem';
export default {
  created() {
    this.$store.dispatch("FETCH_NEWS");
  },
  components: {
    ListItem,
  }
};
</script>