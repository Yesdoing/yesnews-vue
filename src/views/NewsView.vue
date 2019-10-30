<template>
  <div>
    <div v-for="(user, index) in users" :key="index">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api';

export default {
  data() {
    return {
      users: []
    }
  },
  created() {
    fetchNewsList()
      .then(res => this.users=res.data)
      .catch(e => console.log(e));
  }
}
</script>

<style>

</style>