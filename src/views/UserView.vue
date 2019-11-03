<template>
  <div>
    <user-profile></user-profile>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile';

export default {
  components: {
    UserProfile
  },
  // computed: {
  //   userInfo() {
  //     return this.$store.state.user;
  //   }
  // },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName);
  },
  
}
</script>

<style>

</style>