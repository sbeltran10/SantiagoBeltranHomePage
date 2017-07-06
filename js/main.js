var sections = [
    EXPERIENCIA,
    HABILIDADES,
    HOBBIES,
    INTERESES,
    PROYECTOS
]

var currentLang = "esp";

var main = function () {

    var languageContainer = $("<div id='language-container'></div>");
    var langDropdown = $("<div class='dropdown'></div>");
    var langDropdownbutton = $("<button class='btn dropdown-toggle' data-toggle='dropdown'>Language</button>");
    var langDropdownOptions = $("<ul class='dropdown-menu'><li><a id='lang-esp' href='#'>Español</a></li><li><a id='lang-eng' href='#'>English</a></li></ul>");
    langDropdown.append(langDropdownbutton).append(langDropdownOptions);
    languageContainer.append(langDropdown);
    $("body").append(languageContainer);

    $('#lang-esp').click(function (e) {
        e.preventDefault();
        changeLanguage("esp");
        return false;
    });

    $('#lang-eng').click(function (e) {
        e.preventDefault();
        changeLanguage("eng");
        return false;
    });

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

var loadAll = function () {
    
    loadIntereses();
    loadExperiencia();
    loadProyectos();
    loadHabilidades();
    loadHobbies();
}

var changeLanguage = function (language) {
    currentLang = language;

}



