require('dotenv').config()
const Item = require('../../models/item')
const User = require('../../models/user')

// delete item
const destroyItem = async (req, res, next) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id)
    res.locals.data.item = deletedItem
    next()
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}
// update item
const updateItem = async (req, res, next) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.locals.data.item = updatedItem
    next()
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}
// create item
const createItem = async (req, res, next) => {
  try {
    const createdItem = await Item.create(req.body)
    const user = await User.findOne({ email: res.locals.data.email })
    user.items.addToSet(createdItem)
    await user.save()
    res.locals.data.item = createdItem
    next()
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

const respondWithItem = (req, res) => {
  res.json(res.locals.data.item)
}

module.exports = {
  destroyItem,
  updateItem,
  createItem,
  respondWithItem
}
