const Empleado = require('../models/empleado');

exports.createEmpleado = async (req, res) => {
    try {
        const empleado = new Empleado(req.body);
        await empleado.save();
        res.status(201).json(empleado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};