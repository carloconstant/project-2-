const config = require('./../config')
const store = require('./../store')

const index = function () {
  console.log(config.apiUrl + '/topics')
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/topics',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const show = function (id) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/topics/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const create = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/topics/',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const update = function (id, formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/topics/' + id,
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
module.exports = {
  update,
  create,
  show,
  index
}
