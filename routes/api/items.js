const router = require('express').Router()
const itemCtrl = require('../../controllers/api/items')
const checkToken = require('../../config/checkToken')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

/* /api/items/:id DELETE */
router.delete('/:id', checkToken, ensureLoggedIn, itemCtrl.destroyItem, itemCtrl.respondWithItem)
/* /api/items/:id PUT */
router.put('/:id', checkToken, ensureLoggedIn, itemCtrl.updateItem, itemCtrl.respondWithItem)
/* /api/item POST */
router.post('/', checkToken, ensureLoggedIn, itemCtrl.createItem, itemCtrl.respondWithItem)

module.exports = router