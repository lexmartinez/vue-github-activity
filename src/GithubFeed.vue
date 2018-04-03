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
        <div class="events-wrapper">
            <div class="feed-list">
                <div class="event-list">
                    <div class="github-event" v-for="event in events" :key="event.id">
                            <span class="event-octicon octicon" :class="parse(event).icon"></span>
                            <div style="display: inline-block; font-size: 13px" v-if="event">
                                <a>{{event.actor.login}}</a> {{parse(event).actionType}}
                                <a style="color: #0275d8" :href="parse(event).actionUrl"> {{event.repo.name}} </a>
                            </div>
                            <div class="event-time" v-if="event">
                                {{event.created_at}}
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-wrapper">
            <p style="display: inline">Public Activity</p>
            <a style="float: right; color: #232323" target="_blank" href="https://github.com/lexmartinez/vue-github-activity">GitHub Activity Feed</a>
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
      error: false,
      actionType: 'pushed',
      octicon: 'octicon-issue-closed dashboard-event-icon',
      actionUrl: ''
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
    },
    methods: {
      parse(event){
        let actionType = 'move';
        let icon = 'octicon-git-commit dashboard-event-icon';
        let actionUrl = event.repo.url;

        if (event.type === 'WatchEvent') {
          actionType = 'starred';
          icon = "octicon-star dashboard-event-icon";
        } else if (event.type === 'PushEvent') {
          actionType = 'pushed';
          icon = "octicon-git-commit dashboard-event-icon";
        } else if (event.type === 'IssuesEvent') {
          if (event.payload.action === 'closed') {
            actionType = event.payload.action;
            icon = 'octicon-issue-closed dashboard-event-icon';
          } else if (event.payload.action === 'opened') {
            actionType = event.payload.action;
            icon = 'octicon-issue-opened dashboard-event-icon';
          } else if (event.payload.action === 'commented') {
            actionType = 'commented on';
            icon = 'octicon octicon-comment-discussion dashboard-event-icon'
          }
        } else if (event.type === 'IssueCommentEvent') {
          icon = 'octicon-comment-discussion dashboard-event-icon';
          actionType = 'commented on';
          actionUrl = event.payload.comment.html_url;
        }

        return {
            icon, actionType, actionUrl
        }
      }
    }
  }
</script>

<style scoped>
    .feed {
        position: relative;
        display: table;
        height: 500px;
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
    .footer-wrapper {
        padding: 5px;
        font-weight: bold;
        font-size: 13px;
        border-top: 1px solid #ddd;
        font-family: Helvetica, arial, freesans, clean, sans-serif;
    }
    .events-wrapper {
        height: 100%;
        display: table-row;
    }
    .feed-list {
        overflow-y: auto;
        position: relative;
        display: table-cell;
    }
    .event-list {
        position: absolute;
        width: 100%;
        min-height: 100px;
    }
    .github-event {
        border-top: 1px solid #f1f1f1;
        padding: 1em 0 0;
        padding: 1.5em 0 1.5em 25px;
    }
    .event-octicon {
        color: #bbb;
        margin-right: 10px;
    }
    .event-time {
        display: inline-block;
        font-size: 12px;
        margin-left: 3px;
        color: #bbb;
    }
</style>