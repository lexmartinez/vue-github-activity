<template>
    <div>
        <h1>{{user.name}} <small>{{user.login}}</small></h1>
        <img :src="user.avatar_url"/>
    </div>
</template>

<script>
  import service from './GithubService'

  export default {
    name: 'github-feed',
    props: {
      login: { required: true }
    },
    data: () => ({
      user: {},
      events: [],
      loading: false,
      error: false
    }),
    created() {
      service.user(this.login)
        .then(response => {
          this.loading = false
          this.user = response.data
          this.error = false
        })
        .catch(e => {
          this.loading = false
          this.error = true
        })
    }
  }
</script>

<style scoped>

</style>