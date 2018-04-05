# vue-github-activity

[![Build Status](https://travis-ci.org/lexmartinez/vue-github-activity.svg?branch=master)](https://travis-ci.org/lexmartinez/vue-github-activity)
[![GitHub license](https://img.shields.io/github/license/lexmartinez/vue-github-activity.svg)](https://github.com/lexmartinez/vue-github-activity/blob/master/LICENSE.md)
[![Last version](https://img.shields.io/badge/vue--github--activity-v1.0.1-lightgrey.svg)](https://github.com/lexmartinez/vue-github-activity/blob/master/CHANGELOG.md)
<br/>

Simple VueJS component that creates a feed panel with your recent GitHub activity. It displays the user's name, username, photo, and a list of each individual activity type.

> Inspired by [caseyscarborough/github-activity](https://github.com/caseyscarborough/github-activity) repository.

See it in action on [my website](https://lexmartinez.com/)

![](https://github.com/lexmartinez/vue-github-activity/raw/master/screenshot.png)

## Installation

`npm install --save vue-github-activity`

## Dependencies

Insert an octicons.css file in your html file to load the icons.

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/octicons/3.5.0/octicons.min.css">
```

> Also **axios** http client and  **moment** are required as dependencies of your host project use `npm install --save axios moment` to include them

## Usage

The most common use case is to register the component globally.

```js
//in your host component
import {GithubFeed} from 'vue-github-activity';

export default {
  name: 'HostComponent',
  components: { GithubFeed },
  resource: 'HostComponent'
} ...
```

On your template you can now use html like this to render the activity feed: 

```html
<github-feed login="lexmartinez"></github-feed>
```

## License

This project is licensed under MIT License - see the [LICENSE.md](https://github.com/lexmartinez/vue-github-activity/blob/master/LICENSE.md) file for details