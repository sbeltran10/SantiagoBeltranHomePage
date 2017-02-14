var main = function () {
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
};
$(document).ready(main);



