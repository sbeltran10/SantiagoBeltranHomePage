var HABILIDADES = "habilidades";

var initializeHabilidades = function () {
    $("#" + HABILIDADES + "-but").on("click", function () { hideLoad(HABILIDADES) });
}

var loadHabilidades = function () {


    $.getJSON("datos/" + HABILIDADES + "-" + currentLang + ".json", function (json) {

        var leyend = $("<div class='row row-eq-height rowleyenda'></div>");
        $("#main-habilidades").append(leyend);

        var lblLeyend1 = (currentLang === 'en' ? 'Specific languages (programming, markup, query, etc)' : 'Lenguajes específicos (programacion, marcado, consulta, etc)')

        var lblLeyend2 = (currentLang === 'en' ? 'Tools, platforms, frameworks, etc' : 'Herramientas, plataformas, frameworks, etc')

        var lblLeyend3 = (currentLang === 'en' ? 'Natural languages' : 'Lenguajes naturales')

        var colLeyend1;
        if (currentLang === 'en')
            colLeyend1 = $("<div class='col-md-4 col-hab-lenguajes-comp1'>" + lblLeyend1 + "</div>");
        else
            colLeyend1 = $("<div class='col-md-4 col-hab-lenguajes-comp2'>" + lblLeyend1 + "</div>");
        leyend.append(colLeyend1);

        var colLeyend2 = $("<div class='col-md-4 col-hab-herramientas'>" + lblLeyend2 + "</div>");
        leyend.append(colLeyend2);

        var colLeyend3 = $("<div class='col-md-4 col-hab-lenguajes-nat'>" + lblLeyend3 + "</div>");
        leyend.append(colLeyend3);

        var habilidades = json;
        for (var i = 0; i < habilidades.length; i++) {

            var mainSquare = $("<div class='col-md-2 col-hab'></div>");
            var mainContainer = $("<div class='col-md-12 circulo-habilidades circulo-" + habilidades[i].categoria + "'></div>");
            mainSquare.append(mainContainer);

            if ((i % 6) === 0) {
                var mainRow = $("<div id='habrow" + i + "' class='row row-eq-height'></div>");
                mainRow.append(mainSquare);
                $("#main-habilidades").append(mainRow);
            }
            else {
                $("#habrow" + (i - (i % 6))).append(mainSquare);
            }

            var rowNombre = $("<div class ='row habilidad-nombre'><h5>" + habilidades[i].nombreHabilidad + "</h5></div>");;
            mainContainer.append(rowNombre);

            var rowTiempo = $("<div class ='row habilidad-tiempo'>" + habilidades[i].tiempo + "</div>");;
            mainContainer.append(rowTiempo);

            var rowNivelConocimiento = $("<div class ='row habilidad-nivel'>" + habilidades[i].nivelConocimiento + "</div>");;
            mainContainer.append(rowNivelConocimiento);
        }
    });
}

var unloadHabilidades = function () {
    $("#main-habilidades").empty();
}