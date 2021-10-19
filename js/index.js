const API_URL = "http://127.0.0.1:8080/";


let tabla = document.querySelector("tbody");

//Carga datos en la tabla de los pacientes registrados
const cargaTabla = (data) => {


    let template = tabla.innerHTML;

    for(let i = 0; i < data.length; i++){

        template += `<tr>
                        <td>${data[i].cedula}</td>
                        <td>${data[i].nombre}</td>
                        <td>${data[i].telefono}</td>
                        <td>${data[i].laboratorio.laboratorio}</td>
                        <td>${data[i].primera_dosis}</td>
                        <td>${data[i].segunda_dosis}</td>
                        <td>${data[i].esquema_completo ? "Si" : "No"}</td>
                    </tr>`;

    }

    tabla.innerHTML = template;
}


//Trae datos de todos los pacientes registrados
const traeDatosTabla = async (url) => {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    
    cargaTabla(datos);
}

traeDatosTabla(`${API_URL}pacientes`);



//Carga datos en la tabla del paciente encontrado
const cargaPacienteEnTabla = (info) => {
    if(info){

        template = `<tr>
                    <th>Cédula</th>
                    <th>Nombre</th>
                    <th>Teléfono</th>
                    <th>Laboratorio Vacuna</th>
                    <th>Fecha primera dosis</th>
                    <th>Fecha segunda dosis (Si aplica)</th>
                    <th>Esquema completo</th>
                </tr>

                <tr>
                    <td>${info.cedula}</td>
                    <td>${info.nombre}</td>
                    <td>${info.telefono}</td>
                    <td>${info.laboratorio.laboratorio}</td>
                    <td>${info.primera_dosis}</td>
                    <td>${info.segunda_dosis}</td>
                    <td>${info.esquema_completo ? "Si" : "No"}</td>
                </tr>`;

        tabla.innerHTML = template;
    }
    
}


//Trae datos del paciente buscado por cédula
const traePaciente = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    
    cargaPacienteEnTabla(data);
}

//Escuchador de evento 'input' en campo de búsqueda que ejecuta traePaciente()
const campoBusqueda = document.getElementById('search');
campoBusqueda.addEventListener('input', () => {
    traePaciente(`${API_URL}pacientes/${campoBusqueda.value}`);
});



//Limpia campo de búsqueda y trae todos los datos para cargar la tabla
const btnReset = document.querySelector('.btn-reset');
btnReset.addEventListener('click', () => {
    campoBusqueda.value = "";
    tabla.innerHTML = `<tr>
                    <th>Cédula</th>
                    <th>Nombre</th>
                    <th>Teléfono</th>
                    <th>Laboratorio Vacuna</th>
                    <th>Fecha primera dosis</th>
                    <th>Fecha segunda dosis (Si aplica)</th>
                    <th>Esquema completo</th>
                </tr>`;
    traeDatosTabla(`${API_URL}pacientes`);
});

