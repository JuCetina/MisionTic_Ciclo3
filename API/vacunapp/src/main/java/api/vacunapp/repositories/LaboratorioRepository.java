package api.vacunapp.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import api.vacunapp.models.LaboratorioModel;

@Repository
public interface LaboratorioRepository extends CrudRepository <LaboratorioModel, Long>{
    public abstract ArrayList<LaboratorioModel> findByLaboratorio(String laboratorio);
}
