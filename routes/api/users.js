const router = require('express').Router()
const userCtrl = require('../../controllers/api/users')
const checkToken = require('../../config/checkToken')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

/* /api/users
SignUp */
router.post('/', userCtrl.signUp, userCtrl.respondWithToken)
/* /api/users/login
Login */
router.post('/login', userCtrl.login, userCtrl.respondWithToken)
/* /api/users/items
Get items By User */
router.get('/items', checkToken, ensureLoggedIn, userCtrl.getItemsByUser, userCtrl.respondWithItems)

module.exports = router