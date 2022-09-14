const express = require('express');
const router = express.Router();
const categoryController = require('../app/controllers/CategoryController')

// ------------------------------------------------------ //
router.delete('/:id', categoryController.delete);
router.get('/create', categoryController.create);
router.post('/post', categoryController.post);
router.get('/', categoryController.index);
router.get('/:id/edit', categoryController.edit);
router.put('/:id', categoryController.update);


module.exports = router
