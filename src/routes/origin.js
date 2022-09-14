const express = require('express');
const router = express.Router();
const originController = require('../app/controllers/OriginController');

router.get('/', originController.index);
router.delete('/:id', originController.delete);
router.get('/create', originController.create);
router.post('/post', originController.post);
router.get('/:id/edit', originController.edit);
router.put('/:id', originController.update);

module.exports = router;