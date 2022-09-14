const express = require('express');
const router = express.Router();
const crudController = require('../app/controllers/CrudController');

// const multer = require('multer');
// const path = require('path');
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, '../Bi_store/src/public/product_images')
//     },
//     filename: (req, file, cb) => {
//         console.log(file);
//         cb(null, Date.now() + path.extname(file.originalname))
//     }
// });
// const upload = multer({storage: storage})


router.get('/list-product',crudController.listProduct);
router.get('/create', crudController.create);
router.get('/:id/edit', crudController.edit);
// router.post('/post', upload.single('image'), crudController.post);
router.post('/post', crudController.post);
router.delete('/:id', crudController.delete);
router.put('/:id', crudController.update);

module.exports = router;