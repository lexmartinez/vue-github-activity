import GithubFeed from './GithubFeed.vue';

module.exports = {
  install: function (Vue, options) {
    Vue.component('github-feed', GithubFeed);
  }
};