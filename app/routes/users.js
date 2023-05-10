const express = require('express');
const router = express.Router();
const checkOrigin = require('../middleware/origin')
const checkAuth = require('../middleware/auth')
const checkRoleAuth = require('../middleware/roleAuth')

const { getItems, getItem, createItem, deleteItem, updateItem } = require('../controllers/users')
const { validateCreate } = require('../validators/users')

console.log(checkRoleAuth)

router.get('/', checkAuth, checkRoleAuth(['admin']), getItems)

router.get('/:id', checkOrigin, getItem)

router.post('/', checkOrigin, validateCreate, createItem)

router.patch('/:id', checkOrigin, validateCreate, createItem)

router.delete('/:id', checkOrigin, deleteItem)


module.exports = router