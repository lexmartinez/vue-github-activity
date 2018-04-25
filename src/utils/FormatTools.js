'use strict'

import moment from 'moment'

const fromNow = (time) => {
  return moment(time).fromNow()
}

const hash = (sha) => {
  return sha.substr(sha.length - 6)
}

const branch = (ref) => {
  return ref.replace('refs/heads/', '')
}

export {
  fromNow,
  hash,
  branch,
}
