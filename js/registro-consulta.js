const API_URL = "http://127.0.0.1:8080/";


//Carga las vacunas existentes en el select de vacunas
const selectVacunas = document.querySelector('#farmaceutica');
let template = `<option class="opcion_vacuna" value="" disabled selected>Laboratorio Farmaceutico</option>`;

const cargaSelectVacunas = (data) => {
    data.forEach(vacuna => {
        template += `<option class="opcion_vacuna" value="${vacuna.id}">${vacuna.laboratorio}</option>`;
    });

    selectVacunas.innerHTML = template;
}

//Trae los datos de las vacunas existentes
const traeVacunas = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    cargaSelectVacunas(data);
}

traeVacunas(`${API_URL}laboratorios`);



//Carga los datos del paciente en los campos correspondientes
const campoCedula = document.querySelector('#cedula');
const campoNombre = document.querySelector('#nombre');
const campoTelefono = document.querySelector('#telefono');
const campoPrimerDosis = document.querySelector('#primer_dosis');
const campoSegundaDosis = document.querySelector('#segunda_dosis');
const campoEsquema = document.querySelector('#esquema');


const labelCedula = document.querySelector('#cedula_label');
const labelNombre = document.querySelector('#nombre_label');
const labelTelefono = document.querySelector('#telefono_label');
const labelPrimerDosis = document.querySelector('#primer_dosis_label');
const labelSegundaDosis = document.querySelector('#segunda_dosis_label');



const cargaPacienteEncampos = (data) => {
    const opcionesVacunas = document.querySelectorAll('.opcion_vacuna');
    labelCedula.classList.add('active');
    campoCedula.value = data.cedula;
    labelNombre.classList.add('active');
    campoNombre.value = data.nombre;
    labelTelefono.classList.add('active');
    campoTelefono.value = data.telefono;
    opcionesVacunas.forEach(opcionVacuna => {
        opcionVacuna.value == data.laboratorio.id ? opcionVacuna.setAttribute('selected', '') : '';
    });
    labelPrimerDosis.classList.add('active');
    campoPrimerDosis.value = data.primera_dosis;
    labelSegundaDosis.classList.add('active');
    campoSegundaDosis.value = data.segunda_dosis;
    if(data.esquema_completo){
        campoEsquema.checked = true;
    }
    else{
        campoEsquema.checked = false;
    }
}


//Resetea los campos con los datos consultados del paciente
const btnReset = document.querySelector('.btn-reset');
btnReset.addEventListener('click', () => {
    const opcionesVacunas = document.querySelectorAll('.opcion_vacuna');
    labelCedula.classList.remove('active');
    campoCedula.value = "";
    labelNombre.classList.remove('active');
    campoNombre.value = "";
    labelTelefono.classList.remove('active');
    campoTelefono.value = "";
    opcionesVacunas.forEach(opcionVacuna => {
        opcionVacuna.hasAttribute('selected') ? opcionVacuna.removeAttribute('selected') : '';
    });
    opcionesVacunas[0].setAttribute('selected', '');
    labelPrimerDosis.classList.remove('active');
    campoPrimerDosis.value = "";
    labelSegundaDosis.classList.remove('active');
    campoSegundaDosis.value = "";
    campoEsquema.checked = false;
});



//Trae datos del paciente buscado por cédula
const traePaciente = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    
    cargaPacienteEncampos(data);
}



//Escuchador de evento de 'click' en el botón de buscar que ejecuta la función traePaciente()
const btnBuscar = document.querySelector('.btn_buscar');
const campoBuscarCedula = document.querySelector('.busca_cedula');

btnBuscar.addEventListener('click', () => {
    traePaciente(`${API_URL}pacientes/${campoBuscarCedula.value}`);
});




//Función para control de campos de esquema y de fechas
selectVacunas.addEventListener('change', () => {
    campoEsquema.checked = false;
    campoPrimerDosis.value = "";
    campoSegundaDosis.value = "";
    campoPrimerDosis.removeAttribute('disabled');
    campoSegundaDosis.setAttribute('disabled', '');
});

//Control de vacunas con dosis única y dosis doble
campoPrimerDosis.addEventListener('change', () => {
    campoSegundaDosis.value = "";
    if(selectVacunas.value == 4){
        campoSegundaDosis.setAttribute('disabled', '');
        campoEsquema.checked = true;
        M.toast({ html: "Esquema de vacunación completado", classes: "rounded" });
    }
    else {
        campoSegundaDosis.removeAttribute('disabled');
        campoEsquema.checked = false;
    }
});

//Control del esquema al diligenciar fecha de segunda dosis
campoSegundaDosis.addEventListener('change', () => {
    campoEsquema.checked = true;
    M.toast({ html: "Esquema de vacunación completado", classes: "rounded" });
});