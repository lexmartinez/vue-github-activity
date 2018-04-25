<template>
    <div class="github-event" style="padding-bottom: 0.5em !important;">
        <span class="event-octicon octicon octicon-repo-push dashboard-event-icon"></span>
        <div style="display: inline-block;" class="event-text" v-if="event">
            <a>{{event.actor.login}}</a> <b>
            pushed to <a class="event-link" :href="'https://github.com/' + event.repo.name + '/tree/' + branch(event.payload.ref)" target="_blank">{{branch(event.payload.ref)}}</a>
            at <a class="event-link" :href="'https://github.com/' + event.repo.name" target="_blank">{{event.repo.name}}</a></b>
        </div>
        <div class="event-time" v-if="event">
            {{fromNow(event.created_at)}}
        </div>
        <ul>
            <li v-for="commit in event.payload.commits" class="event-text event-detail" style="list-style: none">
                <span class="event-octicon octicon octicon-git-commit dashboard-event-icon"></span>  <a :href="'https://github.com/' + event.repo.name + '/commit/' + commit.sha" target="_blank" class="event-link">{{hash(commit.sha)}}</a> {{commit.message}}
            </li>
        </ul>
    </div>
</template>

<script>
  import {fromNow, hash, branch} from '../../utils/FormatTools'

  export default {
    name: 'push-event',
    props: {
      event: { required: true },
    },
    methods: {
      fromNow,
      hash,
      branch,
    },
  }
</script>

<style></style>