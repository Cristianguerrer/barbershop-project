const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const clienteRoutes = require('./routes/clientes');
const citaRoutes = require('./routes/citas');
const servicioRoutes = require('./routes/servicios');
const empleadoRoutes = require('./routes/empleados');
const app = express();

mongoose.connect('mongodb://mongo:27017/beauty_spa', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/clientes', clienteRoutes);
app.use('/api/citas', citaRoutes);
app.use('/api/servicios', servicioRoutes);
app.use('/api/empleados', empleadoRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});