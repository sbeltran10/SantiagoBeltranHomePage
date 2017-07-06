var sections = [
    EXPERIENCIA,
    HABILIDADES,
    HOBBIES,
    INTERESES,
    PROYECTOS
]

var lastFocus;

var main = function () {

    loadIntereses();
    loadExperiencia();
    loadProyectos();
    loadHabilidades();
    loadHobbies();


    //Se encarga de llenar el contenido de la sección de experiencia y habilidades
    /*
    $.getJSON("datos/trabajos.json", function (json) {
        var trabajos = json;

        for (var i in trabajos) {

            var divHabilidades = $("#seccion-trabajo");

            var divItem = $('<div class="row item-lista"></div>');
            divHabilidades.append(divItem);

            var divCol1 = $('<div class="col-md-1 pull-left"></div>');
            divItem.append(divCol1);

            var spanIcon = $('<span class="glyphicon glyphicon-asterisk"></span>');
            divCol1.append(spanIcon);

            var divCol2 = $('<div class="col-md-3 pull-left"></div>');
            divItem.append(divCol2);

            var divEmpresa = $('<div class="row">' + trabajos[i].nombreEmpresa + '</div>');
            divCol2.append(divEmpresa);

            var divCargo = $('<div class="row">' + trabajos[i].nombreCargo + '</div>');
            divCol2.append(divCargo);

            var divCol3 = $('<div class="col-md-5 pull-left"></div>');
            divItem.append(divCol3);

            var pDescripcion = $(' <p class="p-justify">' + trabajos[i].descripcion + '</p>');
            divCol3.append(pDescripcion);

            var divCol4 = $('<div class="col-md-3 pull-left">' + trabajos[i].fechas + '</div>');
            divItem.append(divCol4);
        }
    });

    $.getJSON("datos/proyectos.json", function (json) {
        var proyectos = json;

        for (var i in proyectos) {

            var divProyecto = $("#seccion-proyectos");

            var divItem = $('<div class="row item-lista"></div>');
            divProyecto.append(divItem);

            var divCol1 = $('<div class="col-md-1 pull-left"></div>');
            divItem.append(divCol1);

            var spanIcon = $('<span class="glyphicon glyphicon-asterisk"></span>');
            divCol1.append(spanIcon);

            var divCol2 = $('<div class="col-md-5 pull-left"></div>');
            divItem.append(divCol2);

            if (proyectos[i].link) {
                var divNombreProy = $('<div class="row"><a href="' + proyectos[i].link + '"+ target="_blank">' + proyectos[i].nombreProyecto + '</a></div>');
                divCol2.append(divNombreProy);
            }
            else {
                var divNombreProy = $('<div class="row">' + proyectos[i].nombreProyecto + '</div>');
                divCol2.append(divNombreProy);
            }

            var divLugar = $('<div class="row">' + proyectos[i].nombreLugar + '</div>');
            divCol2.append(divLugar);

            var divCol3 = $('<div class="col-md-6 pull-left"></div>');
            divItem.append(divCol3);

            var pDescripcion = $(' <p class="p-justify">' + proyectos[i].descripcion + '</p>');
            divCol3.append(pDescripcion);
        }
    });

    $.getJSON("datos/habilidades.json", function (json) {
        var habilidades = json;

        for (var i in habilidades) {

            var divHabilidades = $("#seccion-habilidades");

            var divItem = $('<div class="row item-lista"></div>');
            divHabilidades.append(divItem);

            var divCol1 = $('<div class="col-md-1 pull-left"></div>');
            divItem.append(divCol1);

            var spanIcon = $('<span class="glyphicon glyphicon-asterisk"></span>');
            divCol1.append(spanIcon);

            var divCol2 = $('<div class="col-md-5 pull-left">' + habilidades[i].nombreHabilidad + '</div>');
            divItem.append(divCol2);

            var divCol3 = $('<div class="col-md-3 pull-left">' + habilidades[i].nivelConocimiento + '</div>');
            divItem.append(divCol3);

            var divCol4 = $('<div class="col-md-3 pull-left">' + habilidades[i].tiempo + '</div>');
            divItem.append(divCol4);
        }
    });
    */

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

var changeCurrentSection = function (section) {

}



