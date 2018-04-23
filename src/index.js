import GithubFeed from './components/GithubFeed.vue'
import GithubEvent from './components/GithubEvent.vue'
import PushEvent from './components/events/PushEvent.vue'

export function install (Vue) {
  Vue.component('github-feed', GithubFeed)
  Vue.component('github-event', GithubEvent)
  Vue.component('push-event', PushEvent)
}

export {
  GithubFeed,
  GithubEvent,
  PushEvent,
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
