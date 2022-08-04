var express = require('express');
var router = express.Router();

/* GET home page. */
const mainController = require('../controllers/mainControllers')

/* GET home page. */
router.get('/', mainController.main);

module.exports = router;