const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/UserController');

const csrf = require('csurf');
const csrfProtection = csrf();
router.use(csrfProtection);

router.get('/sign-up', userController.signUp);

module.exports = router;