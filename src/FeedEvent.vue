<template>
    <div class="github-event">
        <span class="event-octicon octicon" :class="octicon"></span>
        <div style="display: inline-block; font-size: 13px">
            <a>{{event.actor.login}}</a> {{actionType}}
            <a style="color: #0275d8" :href="actionUrl ? actionUrl : event.repo.url"> {{event.repo.name}} </a>
        </div>
        <div class="event-time">
            {{moment(event.created_at).fromNow()}}
        </div>
    </div>
</template>

<script>
  export default {
    name: "feed-event",
    props: {
      event: { required: true }
    },
    data: () => ({
      actionType: 'action',
      octicon: 'octicon-issue-closed dashboard-event-icon',
      actionUrl: ''
    })
  }
</script>

<style scoped>
    github-event {
        border-top: 1px solid #f1f1f1;
        padding: 1em 0 0;
        padding: 1.5em 0 1.5em 25px;
    }
    event-octicon {
        color: #bbb;
        margin-right: 10px;
    }
    event-time {
        display: inline-block;
        font-size: 12px;
        margin-left: 3px;
        color: #bbb;
    }
</style>