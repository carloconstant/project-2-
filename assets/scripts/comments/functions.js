'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onIndexComments = function (event) {
  event.preventDefault()
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onError)
}
const onShowComment = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.show(formData.comment.id)
    .then(ui.onShowSuccess)
    .catch(ui.onError)
}
const onCreateComment = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.create(formData)
    .then(ui.onCreateSuccess)
    .catch(ui.onError)
}
const onUpdateComment = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  const id = formData.comment.id
  api.update(id, formData)
    .then(ui.onUpdateSuccess)
    .catch(ui.onError)
}
const onDeleteComment = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.deleted(formData.comment.id)
    .then(ui.onDeleteSuccess)
    .catch(ui.onError)
}
const onDynamicUpdateComment = function (event) {
  event.preventDefault()
  const updateForm = event.target
  const id = $(updateForm).data('id')
  const formData = getFormFields(event.target)
  api.update(id, formData)
    .then(ui.onUpdateSuccess)
    .catch(ui.onError)
}
module.exports = {
  onDeleteComment,
  onIndexComments,
  onShowComment,
  onCreateComment,
  onUpdateComment,
  onDynamicUpdateComment
}
