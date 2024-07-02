const Cita = require('../models/cita');

exports.createCita = async (req, res) => {
    try {
        const cita = new Cita(req.body);
        await cita.save();
        res.status(201).json(cita);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};