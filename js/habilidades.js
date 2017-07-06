var HABILIDADES = "habilidades";

var loadHabilidades = function () {

    $("#" + HABILIDADES + "-but").on("click", function () { hideLoad(HABILIDADES) });

    $.getJSON("datos/" + HABILIDADES + ".json", function (json) {

        var leyend = $("<div class='row row-eq-height rowleyenda'></div>");
        $("#main-habilidades").append(leyend);

        var colLeyend1 = $("<div class='col-md-4 col-hab-lenguajes-comp'>Lenguajes especificos (Programacion, marcado, consulta, etc.)</div>");
        leyend.append(colLeyend1);

        var colLeyend2 = $("<div class='col-md-4 col-hab-herramientas'>Herramientas, plataformas y frameworks</div>");
        leyend.append(colLeyend2);

        var colLeyend3 = $("<div class='col-md-4 col-hab-lenguajes-nat'>Lenguajes naturales</div>");
        leyend.append(colLeyend3);

        var habilidades = json;
        for (var i = 0; i < habilidades.length; i++) {

            var mainSquare = $("<div class='col-md-3 col-hab'></div>");
            var mainContainer = $("<div class='col-md-12 circulo-habilidades circulo-" + habilidades[i].categoria + "'></div>");
            mainSquare.append(mainContainer);

            if ((i % 4) === 0) {
                var mainRow = $("<div id='habrow" + i + "' class='row row-eq-height'></div>");
                mainRow.append(mainSquare);
                $("#main-habilidades").append(mainRow);
            }
            else {
                $("#habrow" + (i - (i % 4))).append(mainSquare);
            }

            var rowNombre = $("<div class ='row habilidad-nombre'><h5>" + habilidades[i].nombreHabilidad + "</h5></div>");;
            mainContainer.append(rowNombre);

            var rowNivelConocimiento = $("<div class ='row habilidad-nivel'>" + habilidades[i].nivelConocimiento + "</div>");;
            mainContainer.append(rowNivelConocimiento);

            var rowTiempo = $("<div class ='row habilidad-tiempo'>" + habilidades[i].tiempo + "</div>");;
            mainContainer.append(rowTiempo);
        }
    });
}