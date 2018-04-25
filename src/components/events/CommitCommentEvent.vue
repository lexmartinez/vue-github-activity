<template>
    <div class="github-event"  style="padding-bottom: 0.5em !important;">
        <span class="event-octicon octicon dashboard-event-icon octicon-comment"></span>
        <div style="display: inline-block;" class="event-text" v-if="event">
            <a>{{event.actor.login}}</a> <b>
            commented on commit
                <a class="event-link" :href="'https://github.com/' + event.repo.name + '/commit/' + event.payload.comment.commit_id" target="_blank"> {{hash(event.payload.comment.commit_id)}}</a>
            at <a class="event-link" :href="'https://github.com/' + event.repo.name" target="_blank">{{event.repo.name}}</a></b>
        </div>
        <div class="event-time" v-if="event">
            {{fromNow(event.created_at)}}
        </div>
        <ul>
            <li class="event-text event-detail"  style="list-style: none">
                <span class="event-octicon octicon octicon-chevron-right dashboard-event-icon"></span> <a class="event-link" :href="event.payload.comment.html_url" target="_blank">See comment here ...</a>
            </li>
        </ul>
    </div>
</template>

<script>
  import { fromNow, hash } from '../../utils/FormatTools'

  export default {
    name: 'commit-comment-event',
    props: {
      event: { required: true },
    },
    methods: {
      fromNow,
      hash,
    },
  }
</script>

<style></style>