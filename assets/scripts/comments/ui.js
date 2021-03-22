'use strict'
const onIndexSuccess = function (reponseData) {
  console.log('get success')
  const comments = reponseData.comments

  let commentsHtml = ''

  comments.forEach(comment => {
    commentsHtml += `
    <h4>user: ${comment.user}</h4>
    <h5>topic: ${comment.topic}</h5>
    <h5>post: ${comment.post}<h5>
    <p>ID: ${comment._id}</p>
  `
  })
  $('#comments-display').html(commentsHtml)
}

const onShowSuccess = function (responseData) {
  const comment = responseData.comment

  const commentsHtml = `
    <h4>user: ${comment.user}</h4>
    <h5>topic: ${comment.topic}</h5>
    <h5>post: ${comment.post}<h5>
    <p>ID: ${comment._id}</p>
`
  $('#comments-display').html(commentsHtml)

  $('form').trigger('reset')
}
const onCreateSuccess = function () {
  $('#message').html('you have successfully created a comment')
  $('#message').addClass('success')

  $('#comments-display').html('new comment created check at get all')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
    $('#create-comment-message').removeClass('success')
  }, 5000)
}
const onUpdateSuccess = function (responseData) {
  $('#message').html('Update complete!')
  $('#comments-display').html('changes: ')
  $('#update-comment-message').addClass('success')
  setTimeout(() => {
    $('#update-comment-message').html('')
    $('#update-comment-message').removeClass('success')
  }, 5000)
  $('form').trigger('reset')
}
const onError = function (err) {
  console.error(err)
  $('#message').html('<h4>Something went wrong, please try again.</h4>')
  $('#message').addClass('failure')
  setTimeout(() => {
    $('#message').html('')
    $('#message').removeClass('failure')
  }, 5000)
}
const onDeleteSuccess = function () {
  $('#delete-message').html('the comment was deleted')
  $('#comment-display').html('check the comments for the update')
  $('#delete-message').addClass('success')

  setTimeout(() => {
    $('#delete-message').html('')
    $('#delete-message').removeClass('success')
  }, 5000)

  $('form').trigger('reset')
}

module.exports = {
  onIndexSuccess,
  onShowSuccess,
  onError,
  onCreateSuccess,
  onUpdateSuccess,
  onDeleteSuccess
}
