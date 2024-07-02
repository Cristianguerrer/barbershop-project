document.addEventListener('DOMContentLoaded', () => {
    // Gestión de Clientes
    const clienteForm = document.getElementById('clienteForm');
    const listaClientes = document.getElementById('listaClientes');
    
    clienteForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const nombre = document.getElementById('nombreCliente').value;
        const email = document.getElementById('emailCliente').value;
        
        const response = await fetch('http://localhost:5000/api/clientes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre, email })
        });
        const cliente = await response.json();
        
        const li = document.createElement('li');
        li.textContent = `${cliente.nombre} - ${cliente.email}`;
        listaClientes.appendChild(li);
        
        clienteForm.reset();
    });

    // Gestión de Citas
    const citaForm = document.getElementById('citaForm');
    const listaCitas = document.getElementById('listaCitas');
    
    citaForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const nombreCliente = document.getElementById('nombreClienteCita').value;
        const servicio = document.getElementById('servicioCita').value;
        const fecha = document.getElementById('fechaCita').value;
        
        const response = await fetch('http://localhost:5000/api/citas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombreCliente, servicio, fecha })
        });
        const cita = await response.json();
        
        const li = document.createElement('li');
        li.textContent = `${cita.nombreCliente} - ${cita.servicio} - ${cita.fecha}`;
        listaCitas.appendChild(li);
        
        citaForm.reset();
        cargarAgenda();
    });

    // Gestión de Servicios
    const servicioForm = document.getElementById('servicioForm');
    const listaServicios = document.getElementById('listaServicios');
    
    servicioForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const nombreServicio = document.getElementById('nombreServicio').value;
        const precio = document.getElementById('precioServicio').value;
        
        const response = await fetch('http://localhost:5000/api/servicios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombreServicio, precio })
        });
        const servicio = await response.json();
        
        const li = document.createElement('li');
        li.textContent = `${servicio.nombreServicio} - $${servicio.precio}`;
        listaServicios.appendChild(li);
        
        servicioForm.reset();
    });

    // Gestión de Empleados
    const empleadoForm = document.getElementById('empleadoForm');
    const listaEmpleados = document.getElementById('listaEmpleados');
    
    empleadoForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const nombre = document.getElementById('nombreEmpleado').value;
        const rol = document.getElementById('rolEmpleado').value;
        
        const response = await fetch('http://localhost:5000/api/empleados', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre, rol })
        });
        const empleado = await response.json();
        
        const li = document.createElement('li');
        li.textContent = `${empleado.nombre} - ${empleado.rol}`;
        listaEmpleados.appendChild(li);
        
        empleadoForm.reset();
    });

    // Cargar la agenda de citas
    async function cargarAgenda() {
        const listaAgenda = document.getElementById('listaAgenda');
        listaAgenda.innerHTML = '';

        const response = await fetch('http://localhost:5000/api/citas', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const citas = await response.json();

        citas.forEach(cita => {
            const li = document.createElement('li');
            li.textContent = `${cita.nombreCliente} - ${cita.servicio} - ${new Date(cita.fecha).toLocaleString()}`;
            listaAgenda.appendChild(li);
        });
    }

    cargarAgenda();
});
