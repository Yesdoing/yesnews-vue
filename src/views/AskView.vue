<template>
  <div>
    <ul class="ask-list">
      <li  v-for="item in fetchedAsk" class="post">
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p class="ask-title">
            <router-link :to="`/item/${item.id}`">
              {{ item.title }}
            </router-link>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by 
            <router-link :to="`/user/${item.user}`" class="link-text">
              {{ item.user }}
            </router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'fetchedAsk',
    ]),

    // ...mapState({
    //   ask: state => state.ask
    // })
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style scoped>
.ask-list {
  padding: 0;
  margin: 0;
}

.post {
  display: flex;
  align-items: center;
  list-style: none;
  border-bottom: 1px solid #eee;
}

.points {
  display: flex;
  width: 80px;
  height: 60px;
  align-items: center;
  justify-content: center;
  color: #42b883;
}

.ask-title {
  margin: 0;
}

.link-text {
  color: #828282;
}
</style>