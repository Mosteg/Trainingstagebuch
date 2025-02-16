const express = require('express');
const apiController = require('../controllers/apiController');

const router = express.Router();

router.post('/getUserByEmail', apiController.getUserByEmail);
router.post('/getUserByUsername', apiController.getUserByUsername);
router.post('/createAccount', apiController.createAccount);

module.exports = router;