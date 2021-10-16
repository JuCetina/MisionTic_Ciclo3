package api.vacunapp.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import api.vacunapp.models.PacienteModel;

@Repository
public interface PacienteRepository extends CrudRepository <PacienteModel, Long>{
    public abstract ArrayList<PacienteModel> findByNombre(String nombre);
}
