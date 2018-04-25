<template>
    <div class="github-event">
        <span class="event-octicon octicon octicon-repo-forked dashboard-event-icon"></span>
        <div style="display: inline-block;" class="event-text" v-if="event">
            <a>{{event.actor.login}}</a> <b>
            forked <a class="event-link" :href="'https://github.com/' + event.repo.name" target="_blank">{{event.repo.name}}</a>
            to <a class="event-link" :href="event.payload.forkee.html_url" target="_blank">{{event.payload.forkee.full_name}}</a>
        </b>
        </div>
        <div class="event-time" v-if="event">
            {{fromNow(event.created_at)}}
        </div>
    </div>
</template>

<script>
  import {fromNow} from '../../utils/FormatTools'

  export default {
    name: 'fork-event',
    props: {
      event: { required: true },
    },
    methods: {
      fromNow,
    },
  }
</script>

<style></style>