'use strict'
const onIndexSuccess = function (reponseData) {
  console.log('get success')
  const topics = reponseData.topics

  let topicsHtml = ''

  topics.forEach(topic => {
    topicsHtml += `
    <h4>Title: ${topic.title}</h4>
    <h5>side1: ${topic.side1}</h5>
    <h5>side2: ${topic.side2}<h5>
    <p>ID: ${topic._id}</p>
  `
  })
  $('#topics-display').html(topicsHtml)
}

const onShowSuccess = function (responseData) {
  const topic = responseData.topic

  const topicsHtml = `
    <h4>Title: ${topic.title}</h4>
    <p>side1: ${topic.side1}</p>
    <p>side2: ${topic.side2}</p>
    <p>ID: ${topic._id}</p>
`
  $('#topics-display').html(topicsHtml)

  $('form').trigger('reset')
}
const onCreateSuccess = function () {
  $('#message').html('you have successfully created a topic')
  $('#message').addClass('success')

  $('#topics-display').html('new topic created check at get all')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
    $('#create-message').removeClass('success')
  }, 5000)
}
const onUpdateSuccess = function (responseData) {
  $('#message').html('Update complete!')
  $('#topics-display').html('changes: ')
  $('#update-message').addClass('success')
  setTimeout(() => {
    $('#update-message').html('')
    $('#update-message').removeClass('success')
  }, 5000)
  $('form').trigger('reset')
}
const onError = function (error) {
  console.error(error)
  $('#message').html('<h4>Something went wrong, please try again.</h4>')
  $('#message').addClass('failure')
  setTimeout(() => {
    $('#message').html('')
    $('#message').removeClass('failure')
  }, 5000)
}
// const commentPage = function () {
//   $('#message').html('you have made it to the comments page')
//   $('#topic-page').hide()
//   $('#login').hide()
//   $('#comment-page').show()
// }
const onDeleteSuccess = function () {
  $('#delete-message').html('the comment was deleted')
  $('#topics-display').html('check the comments for the update')
  $('#delete-message').addClass('success')

  setTimeout(() => {
    $('#delete-message').html('')
    $('#delete-message').removeClass('success')
  }, 5000)

  $('form').trigger('reset')
}
module.exports = {
  onDeleteSuccess,
  // commentPage,
  onIndexSuccess,
  onShowSuccess,
  onError,
  onCreateSuccess,
  onUpdateSuccess
}
