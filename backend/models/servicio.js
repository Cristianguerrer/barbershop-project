const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServicioSchema = new Schema({
    nombreServicio: { type: String, required: true },
    precio: { type: Number, required: true }
});

module.exports = mongoose.model('Servicio', ServicioSchema);