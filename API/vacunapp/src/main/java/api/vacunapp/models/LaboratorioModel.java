package api.vacunapp.models;

import javax.persistence.Entity;
import javax.persistence.Table;

import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.Column;
import javax.persistence.GenerationType;

@Entity
@Table(name="laboratorio")
public class LaboratorioModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private long id;

    @Column(nullable = false)
    private String laboratorio;
    


    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getLaboratorio() {
        return laboratorio;
    }
    public void setLaboratorio(String laboratorio) {
        this.laboratorio = laboratorio;
    }

}
