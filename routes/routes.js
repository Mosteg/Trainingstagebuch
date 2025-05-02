const express = require('express');
const controller = require('../controllers/controller');

const router = express.Router();

router.get('/', controller.index);
router.get('/challenge', controller.challenge);



module.exports = router;