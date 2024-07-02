const express = require('express');
const router = express.Router();
const citaController = require('../controllers/citaController');

router.post('/', citaController.createCita);
// Agrega más rutas según sea necesario

module.exports = router;