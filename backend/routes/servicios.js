const express = require('express');
const router = express.Router();
const servicioController = require('../controllers/servicioController');

router.post('/', servicioController.createServicio);
// Agrega más rutas según sea necesario

module.exports = router;