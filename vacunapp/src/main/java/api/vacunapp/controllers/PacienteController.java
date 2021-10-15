package api.vacunapp.controllers;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import api.vacunapp.models.PacienteModel;
import api.vacunapp.services.PacienteService;

@RestController
@RequestMapping("/pacientes")
public class PacienteController {
    @Autowired
    PacienteService pacienteService;

    @GetMapping()
    public ArrayList<PacienteModel> obtenerPaciente(){
        return pacienteService.obtenerPacientes();
    }

    @PostMapping()
    public PacienteModel guardarPacientes(@RequestBody PacienteModel paciente){
        return this.pacienteService.guardarPaciente(paciente);
    }

    @GetMapping(path = "/{cedula}")
    public Optional<PacienteModel> obtenerPacientePorCedula(@PathVariable("cedula") Long cedula){
        return this.pacienteService.obtenerPorCedula(cedula);
    }

    @GetMapping("/query")
    public ArrayList<PacienteModel> obtenerPacientePorNombre(@RequestParam("nombre") String nombre){
        return this.pacienteService.obtenerPorNombre(nombre);
    }

    @DeleteMapping(path = "/{cedula}")
    public String eliminarPacientePorId(@PathVariable("cedula") Long cedula){
        boolean eliminado = this.pacienteService.eliminarPaciente(cedula);
        if(eliminado){
            return "Se ha eliminado el paciente con cédula: " + cedula;
        }
        else{
            return "Ocurrió un error, no fue posible eliminar el paciente.";
        }
    }
}
