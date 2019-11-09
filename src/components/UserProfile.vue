<template>
  <div class="user-container">
    <div>
      <i class="fas fa-user"></i>
    </div>
    <div class="user-description">
      <slot name="username"></slot>
      <!-- <div>
        username: {{ info.id }}
      </div> -->
      <!-- <router-link :to="`/user/${user.id}`">{{ user.user}}</router-link> -->
      <div class="time">
        <slot name="time"></slot>
        <!-- time: {{ info.created }} -->
      </div>
      <slot name="karma"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object
    }
  }
  // computed: {
  //   userInfo() {
  //     return this.$store.state.user;
  //   }
  // }
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>