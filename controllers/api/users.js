require('dotenv').config()
const jwt = require('jsonwebtoken')
const User = require('../../models/user')
const bcrypt = require('bcrypt')
const crypto = require('crypto')

const signUp = async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    const token = createJWT(user)
    res.locals.data.user = user
    res.locals.data.token = token
    next()
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) throw new Error('User not found, email was invalid')
    const password = crypto.createHmac('sha256', process.env.SECRET).update(req.body.password).digest('hex').split('').reverse().join('')
    const match = await bcrypt.compare(password, user.password)
    if (!match) throw new Error('Password did not match')
    res.locals.data.user = user
    res.locals.data.token = createJWT(user)
    next()
  } catch {
    res.status(400).json({ msg: error.messsage })
  }
}

const getItemsByUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: res.locals.data.email }).populate('items').sort('items.createdAt').exec()
    const items = user.items
    res.locals.data.items = items
    next()
  } catch (error) {
    res.status(400).json({ msg: error.messsage })
  }
}

const respondWithToken = (req, res) => {
  res.json(res.locals.data.token)
}

const respondWithUser = (req, res) => {
  res.json(res.locals.data.user)
}

const respondWithItems = (req, res) => {
  res.json(res.locals.data.items)
}

module.exports = {
  signUp,
  login,
  getItemsByUser,
  respondWithToken,
  respondWithItems,
  respondWithUser
}

function createJWT (user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: '24h' })
}