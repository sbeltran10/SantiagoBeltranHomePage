var main = function () {

    //Asigna funciones a los botones principales
    $("#interes-prof").on("click", function () {
        $("#shown-content").slideUp(400);
        $("#content-experiencia").slideUp(400);
        $("#content-intereses").slideToggle(400);
    });

    $("#experiencia-habilidades").on("click", function () {
        $("#shown-content").slideUp(400);
        $("#content-intereses").slideUp(400);
        $("#content-experiencia").slideToggle(400);
    });

    $("#hobbies").on("click", function () {
        $("#content-intereses").slideUp(400);
        $("#content-experiencia").slideUp(400);
        $("#shown-content").slideToggle(400);
    });

    //Se encarga de llenar el contenido de la sección de experiencia y habilidades
    $.getJSON("test.json", function (json) {
        var trabajos = JSON.parse(json);
        console.log(trabajos);
    });

    $.getJSON("test.json", function (json) {
        var proyectos = JSON.parse(json);
    });

    $.getJSON("test.json", function (json) {
        var habilidades = JSON.parse(json);
    });

};
$(document).ready(main);



