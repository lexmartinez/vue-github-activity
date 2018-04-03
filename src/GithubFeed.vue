<template>
    <div class="feed">
        <div class="header-wrapper">
            <div class="header">
                <div class="github-icon">
                    <span class="github-octicon octicon octicon-mark-github"></span>
                </div>
                <a :href="user.html_url" target="_blank" class="github-profile">
                    <div style="font-size: 26px; line-height: 30px">
                        {{user.name}}
                    </div>
                    <div class="github-username">
                        {{user.login}}
                    </div>
                </a>
                <div class="avatar-wrapper">
                    <img class="avatar" :src="user.avatar_url" />
                </div>
            </div>
        </div>
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
    .feed {
        padding: 10px; *
        position: relative;
        display: table;
        height: 100%;
        min-height: 200px;
        width: 100%;
        min-width: 500px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif;
        font-size: 1rem;
        color: #373a3c
    }
    
    .header-wrapper {
        display: table-row;
        height: 1px
    }
    .header {
        display: table-cell;
        top: 1px;
        left: 1px;
        padding: 10px;
        border-bottom: 1px solid #ddd
    }

    .avatar-wrapper {
        display: inline;
        float: right;
        margin-right: 10px;
        padding-right: 20px;
        max-width: 60px;
        height: 67px;
    }
    .avatar {
        padding: 3px;
        height: 100%;
        border: 1px solid #ddd;
        box-shadow: 1px 1px 3px #ccc;
    }
    .github-octicon {
        font: normal normal 40px 'octicons'
    }
    .github-icon {
        display: inline;
        float: left;
        padding: 9px 0 0;
        width: 35px;
        height: 35px;
    }
    .github-username {
        font-size: 20px;
        font-style: normal;
        font-weight: 300;
        line-height: 24px;
        color: #666;
    }
    .github-profile {
        display: inline-block;
        float: left;
        margin: 0 auto;
        padding: 6px 10px 5px;
        color: #495961;
        font-size: 20px;
        text-decoration: none;
        margin-left: 10px;
    }
</style>