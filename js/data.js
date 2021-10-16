const API_URL = "http://127.0.0.1:8080/";


const cargaTabla = (data) => {

    let tabla = document.querySelector("tbody");

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



const traeDatosTabla = async (url) => {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    
    cargaTabla(datos);
}

traeDatosTabla(`${API_URL}pacientes`);