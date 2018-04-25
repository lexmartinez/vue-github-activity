<template>
    <div class="github-event">
        <span class="event-octicon octicon octicon-radio-tower dashboard-event-icon"></span>
        <div style="display: inline-block;" class="event-text" v-if="event">
            <a>{{event.actor.login}}</a> <b>
            open sourced <a class="event-link" :href="'https://github.com/' + event.repo.name" target="_blank">{{event.repo.name}}</a></b>
        </div>
        <div class="event-time" v-if="event">
            {{fromNow(event.created_at)}}
        </div>
    </div>
</template>

<script>
  import {fromNow} from '../../utils/FormatTools'

  export default {
    name: 'public-event',
    props: {
      event: { required: true },
    },
    methods: {
      fromNow,
    },
  }
</script>

<style></style>