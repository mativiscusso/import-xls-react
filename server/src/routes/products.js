const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController')

router.post('/', productsController.bulkImport)

module.exports = router