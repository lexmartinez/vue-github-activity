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
                    <div v-for="event in events">
                        <github-event :event="event"  :key="event.id" v-if="isGenericEvent(event)"></github-event>
                        <push-event :event="event"  :key="event.id" v-if="event.type==='PushEvent'"></push-event>
                        <pull-request-event :event="event"  :key="event.id" v-if="event.type==='PullRequestEvent'"></pull-request-event>
                        <create-event :event="event"  :key="event.id" v-if="event.type==='CreateEvent'"></create-event>
                        <watch-event :event="event"  :key="event.id" v-if="event.type==='WatchEvent'"></watch-event>
                        <delete-event :event="event"  :key="event.id" v-if="event.type==='DeleteEvent'"></delete-event>
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
  import service from '../services/GithubService'

  export default {
    name: 'github-feed',
    props: {
      login: { required: true },
    },
    data: () => ({
      user: {},
      events: [],
      loading: false,
      error: false,
    }),
    created () {
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
      isGenericEvent (event) {
        return event.type !== 'PushEvent' && event.type !== 'PullRequestEvent' && event.type !== 'CreateEvent' &&
            event.type !== 'WatchEvent' && event.type !== 'DeleteEvent'
      },
    },
  }
</script>

<style>
    .feed {
        position: relative;
        display: table;
        height: 500px;
        min-height: 200px;
        width: 100%;
        min-width: 100%;
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
    .github-profile:hover {
        color: #495961;
        text-decoration: none;
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
    .event-link {
        color: #1798d8;
    }
    .event-link:hover {
        color: #1798d8;
    }
    .event-text {
        font-size: 13px
    }
    .event-detail {
        color: #666666;
    }

    @media only screen
    and (min-device-width: 320px)
    and (max-device-width: 480px)
    and (-webkit-min-device-pixel-ratio: 2) {
        .event-octicon {
            display: none !important;
        }
    }
</style>