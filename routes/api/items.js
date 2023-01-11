const express = require('express')
const router = express.Router()
const { dataController, apiController } = require('../../controllers/api/items')

// Index /api/items
router.get('/', dataController.index.bind(dataController), apiController.index)
// Create /api/items
router.post('/', dataController.create.bind(dataController), apiController.show)
// Show /api/items/:id
router.get('/:id', dataController.show.bind(dataController), apiController.show)
// Update /api/items/:id
router.put('/:id', dataController.update.bind(dataController), apiController.show)
// Delete /api/items/:id
router.delete('/:id', dataController.delete.bind(dataController), apiController.show)

module.exports = router