'use strict'
const store = require('./../store')

const signUpSuccess = function (response) {
  $('#message').text('Thank you for signing up.')
  $('#sign-up').trigger('reset')

  $('#topic-page').show()
  $('#login').hide()
  return response
}
const signUpFailure = function (response) {
  $('#message').text('Sign Up failed, try again.')
}

const signInSuccess = function (response) {
  store.user = response.user
  console.log(response)
  $('#message').text('Welcome Back')
  $('#sign-in').trigger('reset')

  $('#topic-page').show()
  $('#login').hide()
}

const signInFailure = function (response) {
  $('#message').text('Sign in failed, try again.')
}
const changePasswordSuccess = function (response) {
  $('#message').text('your password was changed')
  $('#change-password').trigger('reset')
}
const changePasswordFailure = function (error) {
  $('#message').text('that was not your password')
  console.error('you made a mistake ', error)
}
const signOut = function (event) {
  $('#message').text('you signed out')
  $('#sign-out').trigger('reset')

  $('#topic-page').hide()
  $('#login').show()
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
