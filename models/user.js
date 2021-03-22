const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true
  },
  hashedPassword: {
    type: String,
    required: true
  },
  token: String
}, {
  timestamps: true,
  toJSON: {
    transform: (_doc, user) => {
      delete user.hashedPassword
      return user
    }
  }
})
module.exports = mongoose.model('User')
