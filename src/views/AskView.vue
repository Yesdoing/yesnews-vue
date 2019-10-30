<template>
  <div>
    <div v-for="ask in asks">{{ ask.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from '../api';

export default {
  data() {
    return {
      asks: [],
    }
  },
  created() {
    fetchAskList()
      .then(res => this.asks = res.data)
      .catch(e => console.error(e));
  }
}
</script>

<style>

</style>