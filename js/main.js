var main = function () {

    //Asigna funciones a los botones principales
    $("#interes-prof").on("click", function () {
        $("#content-hobbies").slideUp(400);
        $("#content-experiencia").slideUp(400);
        $("#content-intereses").slideToggle(400);
    });

    $("#experiencia-habilidades").on("click", function () {
        $("#content-hobbies").slideUp(400);
        $("#content-intereses").slideUp(400);
        $("#content-experiencia").slideToggle(400);
    });

    $("#hobbies").on("click", function () {
        $("#content-intereses").slideUp(400);
        $("#content-experiencia").slideUp(400);
        $("#content-hobbies").slideToggle(400);
    });

    //Se encarga de llenar el contenido de la sección de experiencia y habilidades
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

};
$(document).ready(main);



