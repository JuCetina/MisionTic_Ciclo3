(function($) {
    $(function() {

        $('.sidenav').sidenav();
        $('.parallax').parallax();

    }); // end of document ready
})(jQuery); // end of jQuery name space


//SELECT
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
});

// Or with jQuery

$(document).ready(function() {
    $('select').formSelect();
});
//DATE
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, options);
});

// Or with jQuery

$(document).ready(function() {
    $('.datepicker').datepicker();
});

//funcion para fecha
$(function() {
    $("#farmaceutica").change(function() {
        if ($(this).val() === "janssen") {
            $("#2da_dosis").prop("disabled", true);
            $("#esquema").prop("checked","checked")
            $("#2da_dosis").val("No Aplica");
        } else {
            $("#2da_dosis").prop("disabled", false);
            
            
        }
    });
});



// $("#esquema").prop("checked","checked")