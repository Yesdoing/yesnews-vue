<template>
  <div>
    <ul class="jobs-list">
      <li v-for="(job, index) in this.$store.state.jobs" :key="index" class="post">
        <div class="points">
          {{ job.points || 0 }}
        </div>
        <div>
          <p class="jobs-title">
            <a :href="job.url">{{ job.title }}</a>
          </p>
          <small class="link-text">
            {{ job.time_ago }}, 
            <a :href="job.url" class="link-text">
              {{ job.domain }}
            </a>
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
}

.points {
  display: flex;
  width: 80px;
  height: 60px;
  align-items: center;
  justify-content: center;
  color: #42b883;
}

.jobs-title {
  margin: 0;
}

.link-text {
  color: #828282;
}
</style>