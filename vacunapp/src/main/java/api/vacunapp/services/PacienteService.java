package api.vacunapp.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import api.vacunapp.models.PacienteModel;
import api.vacunapp.repositories.PacienteRepository;

@Service
public class PacienteService {
    @Autowired
    PacienteRepository pacienteRepository;

    public ArrayList<PacienteModel> obtenerPacientes(){
        return (ArrayList<PacienteModel>) pacienteRepository.findAll();
    }

    public PacienteModel guardarPaciente(PacienteModel paciente){
        return pacienteRepository.save(paciente);
    }

    public Optional<PacienteModel> obtenerPorCedula(Long cedula){
        return pacienteRepository.findById(cedula);
    }

    public ArrayList<PacienteModel> obtenerPorNombre(String nombre){
        return pacienteRepository.findByNombre(nombre);
    }

    public boolean eliminarPaciente(Long cedula){
        try{
            pacienteRepository.deleteById(cedula);
            return true;
        }catch(Exception err){
            return false;
        }
    }
}