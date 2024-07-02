const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleadoController');

router.post('/', empleadoController.createEmpleado);
// Agrega más rutas según sea necesario

module.exports = router;