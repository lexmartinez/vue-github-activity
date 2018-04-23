<template>
    <div class='github-event'>
        <span class='event-octicon octicon' :class='parse(event).icon'></span>
        <div style='display: inline-block; font-size: 13px' v-if='event'>
            <a>{{event.actor.login}}</a> <b>{{parse(event).actionType}}</b>
            <a class="event-link" :href='parse(event).actionUrl'> {{event.repo.name}} </a>
        </div>
        <div class='event-time' v-if='event'>
            {{fromNow(event.created_at)}}
        </div>
    </div>
</template>

<script>
  import moment from 'moment'

  export default {
    name: 'github-event',
    props: {
      event: { required: true },
    },
    methods: {
      fromNow (time) {
        return moment(time).fromNow()
      },
      parse (event) {
        let actionType = 'move'
        let icon = 'octicon-git-commit dashboard-event-icon'
        let actionUrl = event.repo.url

        if (event.type === 'WatchEvent') {
          actionType = 'starred'
          icon = 'octicon-star dashboard-event-icon'
        } else if (event.type === 'PushEvent') {
          actionType = 'pushed'
          icon = 'octicon-git-commit dashboard-event-icon'
        } else if (event.type === 'ForkEvent') {
          actionType = 'forked'
          icon = 'octicon-repo-forked dashboard-event-icon'
        } else if (event.type === 'CreateEvent') {
          actionType = 'created'
          icon = 'octicon-repo dashboard-event-icon'
        } else if (event.type === 'IssuesEvent') {
          if (event.payload.action === 'closed') {
            actionType = event.payload.action
            icon = 'octicon-issue-closed dashboard-event-icon'
          } else if (event.payload.action === 'opened') {
            actionType = event.payload.action
            icon = 'octicon-issue-opened dashboard-event-icon'
          } else if (event.payload.action === 'commented') {
            actionType = 'commented on'
            icon = 'octicon octicon-comment-discussion dashboard-event-icon'
          }
        } else if (event.type === 'IssueCommentEvent') {
          icon = 'octicon-comment-discussion dashboard-event-icon'
          actionType = 'commented on'
          actionUrl = event.payload.comment.html_url
        }

        return {
          icon, actionType, actionUrl,
        }
      },
    },
  }
</script>

<style></style>