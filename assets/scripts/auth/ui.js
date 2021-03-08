'use strict'
const store = require('./../store')
const api = require('./api')
const functions = require('./functions')

const signUpSuccess = function (data) {
  $('#message').text('Thank you for signing up.')
  $('#sign-up').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').hide()
  $('#change-password').show()
}
const signUpFailure = function (data) {
  $('#message').text('Sign Up failed, try again.')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#message').text('Welcome')
  $('#sign-in').trigger('reset')
  $('#change-password').show()
  $('#sign-out').hide()
  $('#sign-in').hide()
  $('#sign-up').hide()
}

const signInFailure = function (data) {
  $('#message').text('Sign in failed, try again.')
}
const changePasswordSuccess = function () {
  $('#message').text('your password was changed')
  $('#message').removeClass()
  $('#message').addClass('success')

  $('#change-password').trigger('reset')
}
const changePasswordFailure = function (error) {
  $('message').text('that was not your password')
  $('message').removeClass()
  $('message').addClass()
  console.error('you made a mistake ', error)
}
const signOut = function (event) {
  $('message').text('you signed out')
  $('#sign-out').trigger('reset')

  $('#change-password').hide()
  $('#sign-up').show()
  $('#sign-in').show()
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordFailure,
  changePasswordSuccess,
  signOut
}
