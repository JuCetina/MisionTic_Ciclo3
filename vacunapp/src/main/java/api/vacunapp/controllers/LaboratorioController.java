package api.vacunapp.controllers;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import api.vacunapp.models.LaboratorioModel;
import api.vacunapp.services.LaboratorioService;

@RestController
@RequestMapping("/laboratorios")
public class LaboratorioController {
    @Autowired
    LaboratorioService laboratorioService;

    @GetMapping()
    public ArrayList<LaboratorioModel> obtenerLaboratorio(){
        return laboratorioService.obtenerLaboratorios();
    }

    @PostMapping()
    public LaboratorioModel guardarLaboratorios(@RequestBody LaboratorioModel laboratorio){
        return this.laboratorioService.guardarLaboratorio(laboratorio);
    }

    @GetMapping(path = "/{id}")
    public Optional<LaboratorioModel> obtenerLaboratorioPorId(@PathVariable("id") Long id){
        return this.laboratorioService.obtenerPorId(id);
    }

    @GetMapping("/query")
    public ArrayList<LaboratorioModel> obtenerLaboratorioPorNombre(@RequestParam("laboratorio") String laboratorio){
        return this.laboratorioService.obtenerPorLaboratorio(laboratorio);
    }
}
