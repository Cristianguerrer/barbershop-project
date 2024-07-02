const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmpleadoSchema = new Schema({
    nombre: { type: String, required: true },
    rol: { type: String, required: true }
});

module.exports = mongoose.model('Empleado', EmpleadoSchema);