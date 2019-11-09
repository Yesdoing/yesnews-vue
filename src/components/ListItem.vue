<template>
  <div>
    <ul class="news-list">
      <li v-for="(item, key) in listItem" class="post" :key="key">
        <div class="points">{{ item.points || 0 }}</div>
        <div>
          <p class="news-title">
            <template v-if="item.domain">
              <a :href="item.url">{{ item.title }}</a>
            </template>
            <template v-else>
              <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link v-if="item.user" :to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
            <a v-else :href="item.url" class="link-text">
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    listItem() {
      if (this.$route.name === "news") {
        return this.$store.state.news;
      } else if (this.$route.name === "ask") {
        return this.$store.state.ask;
      } else if (this.$route.name === "jobs") {
        return this.$store.state.jobs;
      }
    }
  }
};
</script>

<style scoped>
.news-list {
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

.news-title {
  margin: 0;
}

.link-text {
  color: #828282;
}
</style> 