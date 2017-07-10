var EXPERIENCIA = "experiencia";

var initializeExperiencia = function () {

    $("#" + EXPERIENCIA + "-but").on("click", function (e) {
        hideLoad(EXPERIENCIA);
    });
}

var loadExperiencia = function () {

    $.getJSON("datos/" + EXPERIENCIA + "-" + currentLang + ".json", function (json) {

        var trabajos = json;
        for (var i = 0; i < trabajos.length; i++) {

            var mainSquare = $("<div class='col-md-6 col-exp'></div>");
            if (trabajos[i].nombreEmpresa)
                var mainContainer = $("<div class='col-md-12 cuadro-experiencia'></div>");
            mainSquare.append(mainContainer);

            if ((i % 2) === 0) {
                var mainRow = $("<div id='exprow" + i + "' class='row row-eq-height'></div>");
                mainRow.append(mainSquare);
                $("#main-experiencia").append(mainRow);
            }
            else {
                $("#exprow" + (i - 1)).append(mainSquare);
            }


            var nombreEmpresa = $("<div class ='row experiencia-nombre'><h4>" + trabajos[i].nombreEmpresa + "</h4></div>");
            mainContainer.append(nombreEmpresa);
            var nombreCargo = $("<div class ='row experiencia-cargo'>" + trabajos[i].nombreCargo + "</div>");
            mainContainer.append(nombreCargo);
            var descripcion = $("<div class ='row experiencia-descripcion'><p class='p-justify'>" + trabajos[i].descripcion + "</p></div>");
            mainContainer.append(descripcion);
            var fechas = $("<div class ='row experiencia-fechas'>" + trabajos[i].fechas + "</div>");
            mainContainer.append(fechas);

        }
    })
}

var unloadExperiencia = function () {
    $("#main-experiencia").empty();
}
