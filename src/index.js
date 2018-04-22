import GithubFeed from './components/GithubFeed.vue'
import GithubEvent from './components/GithubEvent.vue'

export function install (Vue) {
  Vue.component('github-feed', GithubFeed)
  Vue.component('github-event', GithubEvent)
}

export {
  GithubFeed,
  GithubEvent,
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
