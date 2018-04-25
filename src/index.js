import GithubFeed from './components/GithubFeed.vue'
import PushEvent from './components/events/PushEvent.vue'
import PullRequestEvent from './components/events/PullRequestEvent.vue'
import CreateEvent from './components/events/CreateEvent.vue'
import DeleteEvent from './components/events/DeleteEvent.vue'
import WatchEvent from './components/events/WatchEvent.vue'
import IssuesEvent from './components/events/IssuesEvent.vue'
import IssueCommentEvent from './components/events/IssueCommentEvent.vue'
import ForkEvent from './components/events/ForkEvent.vue'
import CommitCommentEvent from './components/events/CommitCommentEvent.vue'
import PublicEvent from './components/events/PublicEvent.vue'

export function install (Vue) {
  Vue.component('github-feed', GithubFeed)
  Vue.component('push-event', PushEvent)
  Vue.component('pull-request-event', PullRequestEvent)
  Vue.component('create-event', CreateEvent)
  Vue.component('watch-event', WatchEvent)
  Vue.component('delete-event', DeleteEvent)
  Vue.component('issues-event', IssuesEvent)
  Vue.component('issue-comment-event', IssueCommentEvent)
  Vue.component('commit-comment-event', CommitCommentEvent)
  Vue.component('fork-event', ForkEvent)
  Vue.component('public-event', PublicEvent)
}

export {
  GithubFeed,
  PushEvent,
  PullRequestEvent,
  CreateEvent,
  WatchEvent,
  DeleteEvent,
  IssuesEvent,
  IssueCommentEvent,
  ForkEvent,
  CommitCommentEvent,
  PublicEvent,
}

const plugin = {
  /* eslint-disable no-undef */
  version: VERSION,
  install,
}

export default plugin

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}
