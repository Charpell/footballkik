const monggose = require('mongoose');

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    unique: true
  },
  fullName: {
    type: String,
    unique: true,
    default: ''
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    default: ''
  },
  userImage: {
    type: String,
    default: 'default.png'
  },
  facebook: {
    type: String,
    default: ''
  },
  fbTokens: Array,
  google: {
    type: String,
    default: ''
  },
  googleTokns: Array

})

module.exports = mongoose.model('User', userSchema)