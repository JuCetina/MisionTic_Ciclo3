package api.vacunapp.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import api.vacunapp.models.LaboratorioModel;
import api.vacunapp.repositories.LaboratorioRepository;

@Service
public class LaboratorioService {
    @Autowired
    LaboratorioRepository laboratorioRepository;

    public ArrayList<LaboratorioModel> obtenerLaboratorios(){
        return (ArrayList<LaboratorioModel>) laboratorioRepository.findAll();
    }

    public LaboratorioModel guardarLaboratorio(LaboratorioModel laboratorio){
        return laboratorioRepository.save(laboratorio);
    }

    public Optional<LaboratorioModel> obtenerPorId(Long id){
        return laboratorioRepository.findById(id);
    }

    public ArrayList<LaboratorioModel> obtenerPorLaboratorio(String laboratorio){
        return laboratorioRepository.findByLaboratorio(laboratorio);
    }
}