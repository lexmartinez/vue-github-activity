<template>
    <div class="github-event">
        <span class="event-octicon octicon octicon-trashcan dashboard-event-icon"></span>
        <div style="display: inline-block;" class="event-text" v-if="event">
            <a>{{event.actor.login}}</a> <b>
            deleted {{event.payload.ref_type}} <a class="event-link" href="#">{{event.payload.ref}}</a>
            at <a class="event-link" :href="'https://github.com/' + event.repo.name" target="_blank">{{event.repo.name}}</a></b>
        </div>
        <div class="event-time" v-if="event">
            {{fromNow(event.created_at)}}
        </div>
    </div>
</template>

<script>
  import moment from 'moment'

  export default {
    name: 'delete-event',
    props: {
      event: { required: true },
    },
    methods: {
      fromNow (time) {
        return moment(time).fromNow()
      },
    },
  }
</script>

<style></style>