const config = require('./../config')
const store = require('./../store')

const index = function () {
  console.log(config.apiUrl + '/comments')
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/comments',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const show = function (id) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/comments/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const create = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/comments/',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const update = function (id, formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/comments/' + id,
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const deleted = function (id) {
  return $.ajax({
    url: config.apiUrl + '/comments/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  deleted,
  update,
  create,
  show,
  index
}
