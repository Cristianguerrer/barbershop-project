const Servicio = require('../models/servicio');

exports.createServicio = async (req, res) => {
    try {
        const servicio = new Servicio(req.body);
        await servicio.save();
        res.status(201).json(servicio);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};