package api.vacunapp.models;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Table;

import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Column;

@Entity
@Table(name="paciente")
public class PacienteModel {

    @Id
    @Column(unique = true, nullable = false)
    private long cedula;

    @Column(nullable = false)
    private String nombre;

    @Column(nullable = false)
    private String telefono;

    @ManyToOne
    @JoinColumn(name = "laboratorio_id", nullable = false)
    private LaboratorioModel laboratorio;

    @Column(nullable = false)
    private Date primera_dosis;

    private Date segunda_dosis;

    @Column(nullable = false)
    private Boolean esquema_completo;


    public long getCedula() {
        return cedula;
    }

    public void setCedula(long cedula) {
        this.cedula = cedula;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public LaboratorioModel getLaboratorio() {
        return laboratorio;
    }

    public void setLaboratorio(LaboratorioModel laboratorio) {
        this.laboratorio = laboratorio;
    }

    public Date getPrimera_dosis() {
        return primera_dosis;
    }

    public void setPrimera_dosis(Date primera_dosis) {
        this.primera_dosis = primera_dosis;
    }

    public Date getSegunda_dosis() {
        return segunda_dosis;
    }

    public void setSegunda_dosis(Date segunda_dosis) {
        this.segunda_dosis = segunda_dosis;
    }

    public Boolean getEsquema_completo() {
        return esquema_completo;
    }

    public void setEsquema_completo(Boolean esquema_completo) {
        this.esquema_completo = esquema_completo;
    }

    
    
}
