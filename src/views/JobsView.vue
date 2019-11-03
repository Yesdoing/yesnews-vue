<template>
  <div>
    <ul class="jobs-list">
      <li v-for="(job, index) in this.$store.state.jobs" :key="index" class="post">
        <div>
          <p class="jobs-title">
            <a :href="job.url">{{ job.title }}</a>
          </p>
          <small class="link-text">
            {{ job.time_ago }}, 
            <router-link :to="`/user/${job.user}`" class="link-text">
              {{ job.domain }}
            </router-link>
          </small>    
        </div>
      </li>
    </ul>
    <!-- <p v-for="job in this.$store.state.jobs">
      <a :href="job.url">{{ job.title }}</a>
      <small>{{ job.time_ago }}, {{ job.domain }}</small>
    </p> -->
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style scoped>
.jobs-list {
  padding: 0;
  margin: 0;
}

.post {
  display: flex;
  align-items: center;
  list-style: none;
  border-bottom: 1px solid #eee;
  height: 60px;
  padding-left: 80px;
}

.jobs-title {
  margin: 0;
}

.link-text {
  color: #828282;
}
</style>