<template>
    <div class="github-event">
        <span class="event-octicon octicon dashboard-event-icon" :class="event.payload.ref_type === 'repository'?'octicon-repo':'octicon-git-branch'"></span>
        <div style="display: inline-block;" class="event-text" v-if="event">
            <a>{{event.actor.login}}</a> <b>
            created {{event.payload.ref_type}}
            <span v-if="event.payload.ref_type!== 'repository'">
                <a class="event-link" :href="link(event)" target="_blank">{{event.payload.ref}}</a>
            at</span> <a class="event-link" :href="'https://github.com/' + event.repo.name" target="_blank">{{event.repo.name}}</a></b>
        </div>
        <div class="event-time" v-if="event">
            {{fromNow(event.created_at)}}
        </div>
    </div>
</template>

<script>
  import {fromNow} from '../../utils/FormatTools'

  export default {
    name: 'create-event',
    props: {
      event: { required: true },
    },
    methods: {
      fromNow,
      link (event) {
        if (event.payload.ref_type === 'branch') {
          return 'https://github.com/' + event.repo.name + '/tree/' + event.payload.ref
        } else {
          return 'https://github.com/' + event.repo.name + '/releases/tag/' + event.payload.ref
        }
      },
    },
  }
</script>

<style></style>