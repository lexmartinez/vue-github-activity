import GithubFeed from './GithubFeed.vue';
import FeedEvent from './FeedEvent.vue';

module.exports = {
  install: function (Vue, options) {
    Vue.component('github-feed', GithubFeed);
    Vue.component('feed-event', FeedEvent);
  }
};