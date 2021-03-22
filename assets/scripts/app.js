'use strict'

const auth = require('./auth/functions')
const topic = require('./topics/functions')

$(() => {
  $('#topic-page').hide()
  $('#comment-page').hide()
  // $('#comment').show()
  $('#sign-up').on('submit', auth.onSignUp)
  $('#sign-in').on('submit', auth.onSignIn)
  $('#sign-out').on('submit', auth.onSignOut)
  $('#topics').on('submit', topic.onIndexTopics)
  $('#show-topic').on('submit', topic.onShowTopic)
  $('#create-topic').on('submit', topic.onCreateTopic)
  $('#change-password').on('submit', auth.onChangePassword)
  $('#update-topic').on('submit', topic.onUpdateTopic)
  $('#delete-topic').on('submit', topic.onDeleteTopic)
  // $('#comments').on('submit', comment.onIndexComments)
  // $('#show-comment').on('submit', comment.onShowComment)
  // $('#create-comment').on('submit', comment.onCreateComment)
  // $('#update-comment').on('submit', comment.onUpdateComment)
})
