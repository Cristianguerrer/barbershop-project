const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitaSchema = new Schema({
    nombreCliente: { type: String, required: true },
    servicio: { type: String, required: true },
    fecha: { type: Date, required: true }
});

module.exports = mongoose.model('Cita', CitaSchema);