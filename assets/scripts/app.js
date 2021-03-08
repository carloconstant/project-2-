'use strict'

const auth = require('./auth/functions')

$(() => {
  $('#sign-up').on('submit', auth.onSignup)
  $('#change-password').hide()
  $('#sign-out').hide()
})
