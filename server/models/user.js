const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const _ = require('lodash')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 5,
    trim: true,
    required: true,
  },
  username: {
    type: String,
    lowercase: true,
    minlength: 5,
    trim: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 8,
    required: true,
  },
  power: {
    type: String,
    default: 'user',
  },
  company: {
    type: String,
    minlength: 1,
    required: true,
  },
  createdAt: {
    type: Number,
    default: new Date().getTime(),
  },
  accessTokens: [
    {
      access: {
        type: String,
        required: true,
      },
      token: {
        type: String,
        required: true,
      },
      system: {
        browser: {
          type: String,
        },
        browser_version: {
          type: String,
        },
        os: {
          type: String,
        },
      },
    },
  ],
})

UserSchema.methods.toJSON = function() {
  const user = this
  const userObject = user.toObject()

  return _.pick(userObject, ['name', 'username', 'power', 'company'])
}

UserSchema.methods.generateAuthToken = function(access, system) {
  const user = this
  const token = jwt
    .sign({ _id: user._id.toHexString(), access, system }, 'secret')
    .toString()

  user.accessTokens.push({ access, system, token })

  return user.save().then(() => {
    return token
  })
}

UserSchema.statics.removeToken = function(token) {
  const user = this

  return user.update({
    $pull: {
      accessTokens: { token },
    },
  })
}

UserSchema.statics.findByToken = function(token) {
  const User = this
  let decoded

  try {
    decoded = jwt.verify(token, 'secret')
  } catch (e) {
    return Promise.reject()
  }

  return User.findOne({
    _id: decoded._id,
    'accessTokens.token': token,
    // "accessTokens.access": "web"
  })
}

UserSchema.statics.findByCredentials = function(username, password) {
  const User = this

  return User.findOne({ username }).then(user => {
    !user ? Promise.reject() : null

    return new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, (e, res) => {
        res ? resolve(user) : reject()
      })
    })
  })
}

UserSchema.pre('save', function(next) {
  const user = this

  user.isModified('password')
    ? bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
          user.password = hash
          next()
        })
      })
    : next()
})

const User = mongoose.model('User', UserSchema)

module.exports = { User }
