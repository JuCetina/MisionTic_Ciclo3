(function($) {
    $(function() {

        $('.sidenav').sidenav();
        $('.parallax').parallax();

    }); // end of document ready
})(jQuery); // end of jQuery name space

//Inicializando campos select
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    let options = {};
    var instances = M.FormSelect.init(elems, options);
  });

//Inicializando calendarios
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.datepicker');
    let options = {
        format: 'yyyy-mm-dd'
    }
    let instances = M.Datepicker.init(elems, options);
});