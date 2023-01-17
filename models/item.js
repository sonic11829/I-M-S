const { Schema, model } = require('mongoose')

const itemSchema = new Schema({
    name: { type: String, required: true },
    quantity: { type: Number, min: 0, required: true }
}, {
    timestamps: true
})

module.exports = model('Item', itemSchema)
