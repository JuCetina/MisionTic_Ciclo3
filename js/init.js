(function($) {
    $(function() {

        $('.sidenav').sidenav();
        $('.parallax').parallax();

    }); // end of document ready
})(jQuery); // end of jQuery name space

// Or with jQuery

$(document).ready(function() {
    $('select').formSelect();
});

// Or with jQuery

$(document).ready(function() {
    $('.datepicker').datepicker();
});

//funcion para fecha

$(function() {
    $("#farmaceutica").change(function() {
        $("#esquema").prop("checked", ""); // esquema incompleto
        $("#1er_dosis").val(""); // Deje en blanco la fecha 1
        $("#2da_dosis").val(""); // Deje en blanco la fecha 2
        $("#1er_dosis").prop("disabled", false); // active solo fecha 1
        $("#2da_dosis").prop("disabled", true); // desactive la fecha 2
    });
});
$("#1er_dosis").change(function() {
    $("#2da_dosis").val(""); // Deje en blanco la fecha 2
    if ($("#farmaceutica").val() === "janssen") {
        $("#2da_dosis").prop("disabled", true); // desactive la fecha 2
        $("#esquema").prop("checked", "checked"); // esquema completo
        M.toast({ html: "Esquema de Vacunacion Completado", classes: "rounded" });
    } else if ($("#farmaceutica").val() !== "janssen") {
        $("#2da_dosis").prop("disabled", false); // active la fecha 2
        $("#esquema").prop("checked", ""); // esquema incompleto
    }
});
$("#2da_dosis").change(function() {
    if ($("#1er_dosis").val().length == 0) {
        M.toast({ html: "No hay fecha de la Primera Dosis", classes: "rounded" });
        $("#2da_dosis").val(""); // Deje en blanco la fecha 2
    } else {
        $("#esquema").prop("checked", "checked"); // esquema completo
        M.toast({ html: "Esquema de Vacunacion Completado", classes: "rounded" });
    }
});