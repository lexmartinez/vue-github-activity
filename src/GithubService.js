'use strict'

import axios from 'axios'

const client = axios.create({
  baseURL: 'https://api.github.com/users/'
})

export default {
  user: (login) => {
    return client.get(login)
  },
  events: (login) => {
    return client.get(login + '/events')
  }
}
