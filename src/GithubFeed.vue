<template>
    <div>
        <h1>{{user.name}} <small>{{user.login}}</small></h1>
        <img :src="user.avatar_url"/>
        <h3>{{events.length}}</h3>
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
          this.user = response.data
          service.events(this.login).then(events => {
            this.loading = false
            this.error = false
            this.events = events.data
          }).catch(e => {
            this.loading = false
            this.error = true
          })

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