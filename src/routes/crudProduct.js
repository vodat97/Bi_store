const express = require('express');
const router = express.Router();
const crudController = require('../app/controllers/CrudController');

router.get('/list-product',crudController.listProduct);
router.post('/post', crudController.post);
router.delete('/:id', crudController.delete);
router.put('/:id', crudController.update);
router.get('/create', crudController.create);
router.get('/:id/edit', crudController.edit);

module.exports = router;