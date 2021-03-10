const api = require('./api')
const ui = require('./api')
const getFormFields = require('../../../lib/get-form-fields')

const onIndexTopics = function () {
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onError)
}
const onShowTopic = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.show(formData.topic.id)
    .then(ui.onShowTopic)
    .catch(ui.onError)
}
const onCreateTopic = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.create(formData)
    .then(ui.onCreateSuccess)
    .catch(ui.onError)
}

module.exports = {
  onIndexTopics,
  onShowTopic,
  onCreateTopic
}
