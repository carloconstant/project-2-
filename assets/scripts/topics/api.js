const config = require('./../config')

const index = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/topics'
  })
}

const show = function (id) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/topics/' + id
  })
}

const create = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/topics/',
    data: formData
  })
}

const update = function (id, formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/topics/' + id,
    data: formData
  })
}
module.exports = {
  update,
  create,
  show,
  index
}
