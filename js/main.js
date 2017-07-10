var sections = [
    EXPERIENCIA,
    HABILIDADES,
    HOBBIES,
    INTERESES,
    PROYECTOS
]

var currentLang = "es";

var main = function () {

    var languageContainer = $("<div id='language-container'></div>");
    var langDropdown = $("<div class='dropdown'></div>");
    var langDropdownbutton = $("<button class='btn dropdown-toggle' id='btn-dropdown-lang' data-toggle='dropdown'></button>");
    var langDropdownOptions = $("<ul class='dropdown-menu'><li><a id='lang-esp' href='#'>Español</a></li><li><a id='lang-eng' href='#'>English</a></li></ul>");
    langDropdown.append(langDropdownbutton).append(langDropdownOptions);
    languageContainer.append(langDropdown);

    $("body").append(languageContainer);
    $('#lang-esp').click(function (e) {
        e.preventDefault();
        $("#btn-dropdown-lang").dropdown("toggle");
        changeLanguage("es");
        sweetAlert("Español", "Lenguaje cambiado", "success");
        return false;
    });

    $('#lang-eng').click(function (e) {
        e.preventDefault();
        $("#btn-dropdown-lang").dropdown("toggle");
        changeLanguage("en");
        sweetAlert("English", "Language changed", "success");
        return false;
    });

    initializeAll();
    loadAll();
};

$(document).ready(main);

var currentSection = null;

var hideLoad = function (section) {

    if (currentSection) {
        $("#content-" + currentSection).slideUp(400);
        $("#" + currentSection + "-but").removeClass("btn-categories-current");
    }

    currentSection = (currentSection === section ? null : section);

    if (currentSection) {
        $("#content-" + section).slideToggle(400);
        $("#" + section + "-but").addClass("btn-categories-current");
    }
}

var loadMain = function () {
    $.getJSON("datos/general-" + currentLang + ".json", function (json) {

        $("#descripcion-main").append("<h2>" + json.descripcionPrincipal + "</h2>");
        $("#intereses-but").append("<b>" + json.seccionPerfil + "</b>");
        $("#experiencia-but").append("<b>" + json.seccionExperiencia + "</b>");
        $("#proyectos-but").append("<b>" + json.seccionProyectos + "</b>");
        $("#habilidades-but").append("<b>" + json.seccionHabilidades + "</b>");
        $("#btn-dropdown-lang").append(json.lenguaje);
        $("#hobbies-but").append("<b>" + json.seccionHobbies + "</b>");
        $("#heading-deportes").append("<h4>" + json.headingDeportes + "</h4>");
        $("#heading-videojuegos").append("<h4>" + json.headingVideojuegos + "</h4>");
        $("#contacto-lbl").append(json.contacto);

    });
}

var unloadMain = function () {

    $("#descripcion-main").empty();
    $("#intereses-but").empty();
    $("#experiencia-but").empty();
    $("#proyectos-but").empty();
    $("#habilidades-but").empty();
    $("#btn-dropdown-lang").empty();
    $("#hobbies-but").empty();
    $("#heading-deportes").empty();
    $("#heading-videojuegos").empty();
    $("#contacto-lbl").empty();
}

var initializeAll = function () {

    initializeIntereses();
    initializeExperiencia();
    initializeProyectos();
    initializeHabilidades();
    initializeHobbies();
}

var loadAll = function () {

    loadMain();
    loadIntereses();
    loadExperiencia();
    loadProyectos();
    loadHabilidades();
    loadHobbies();
}

var unloadAll = function () {

    unloadMain();
    unloadIntereses();
    unloadExperiencia();
    unloadProyectos();
    unloadHabilidades();
    unloadHobbies();
}

var changeLanguage = function (language) {
    currentLang = language;
    unloadAll();
    loadAll();

}



