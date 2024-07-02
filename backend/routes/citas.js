const express = require('express');
const router = express.Router();
const citaController = require('../controllers/citaController');

router.post('/', citaController.createCita);
router.get('/', citaController.getCitas);

module.exports = router;

