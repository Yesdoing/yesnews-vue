<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem';

export default {
  created() {
    this.$store.dispatch("FETCH_ASK");
  },
  components: {
    ListItem,
  }
}
</script>

