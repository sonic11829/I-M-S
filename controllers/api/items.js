const Item = require('../../models/itemSchema')

const dataController = {
    checkForError (err, res) {
        if (err) {
            res.status(400).send({
                msg: err.message
            })
            return true
        } else {return false}
    },

    index (req, res, next) {
        Item.find({}, (err, foundItems) => {
            if (this.checkForError(err, res) === false) {
                res.locals.data.items = foundItems
                next()
            }
        })
    },

    create (req, res, next) {
        Item.create(req.body, (err, createdItem) => {
            if (this.checkForError(err, res) === false) {
                res.locals.data.items = createdItem
                next()
            }
        })
    },

    show (req, res, next) {
        Item.findById(req,params.id, (err, foundItem) => {
            if (this.checkForError(err, res) === false) {
                res.locals.data.items = foundItem
                next()
            }
        })
    },

    update (req, res, next) {
        Item.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedItem) => {
            if (this.checkForError(err, res) === false) {
                res.locals.data.item = updatedItem
                next()
            }
        })
    },

    delete (req, res, next) {
        Item.findByIdAndDelete(req.params.id, (err, deletedItem) => {
            if (this.checkForError(err, res) === false) {
                res.locals.data.item = deletedItem
                next()
            }
        })
    }
}

const apiController = {
    index (req, res, next) {
        res.json(res.locals.data.items)
    },

    show (req, res, next) {
        res.json(res.locals.data.item)
    }
}

module.exports = { dataController, apiController}