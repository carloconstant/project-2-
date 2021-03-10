'use strict'

const auth = require('./auth/functions')
const topic = require('./topics/functions')

$(() => {
  $('#topic-page').hide()
  $('#sign-up').on('submit', auth.onSignUp)
  $('#sign-in').on('submit', auth.onSignIn)
  $('#sign-out').on('submit', auth.onSignOut)
  $('#topic-index').on('submit', topic.onIndexTopic)
  $('#show-topic').on('submit', topic.onShowTopic)
  $('#create-topic').on('submit', topic.onCreateTopic)
  $('#change-password').on('submit', auth.onChangePassword)
})
