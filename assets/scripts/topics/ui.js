'use strict'
const onIndexSuccess = function (reponseData) {
  const topics = reponseData.topics

  let topicsHtml = ''

  topics.forEach(topic => {
    topicsHtml += `
    <h4>Title: ${topic.title}</h4>
    <h5>side1: ${topic.side1}</h5>
    <h5>side2: ${topic.side2}<h5>
    <p>ID: ${topic._.id}</p>
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
  $('#create-message').html('you have successfully created a topic')
  $('#create-message').addClass('success')

  $('#topics-display').html('new topic created check at get all')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#create-message').html('')
    $('#create-message').removeClass('success')
  }, 5000)
}
const onError = function (err) {
  console.error(err)
  $('#error-message').html('<h4>Something went wrong, please try again.</h4>')
  $('#error-message').addClass('failure')
  setTimeout(() => {
    $('#error-message').html('')
    $('#error-message').removeClass('failure')
  }, 5000)
}
module.exports = {
  onIndexSuccess,
  onShowSuccess,
  onError,
  onCreateSuccess
}
