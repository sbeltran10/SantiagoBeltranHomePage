var PROYECTOS = "proyectos";

var loadProyectos = function () {

    $("#" + PROYECTOS + "-but").on("click", function () {
        hideLoad(PROYECTOS)
    });

    $.getJSON("datos/" + PROYECTOS + ".json", function (json) {

        var proyectos = json;
        for (var i = 0; i < proyectos.length; i++) {

            var mainRow = $("<div id='proyrow" + i + "' class='row row-eq-height'></div>");
            var mainContainer;

            if (i === proyectos.length - 1)
                mainContainer = $("<div class='col-md-12 cuadro-proyectos-last'></div>");
            else
                mainContainer = $("<div class='col-md-12 cuadro-proyectos'></div>");

            mainRow.append(mainContainer);
            var colImagen;

            if (proyectos[i].link)
                colImagen = $("<div class='col-md-5'><a href='" + proyectos[i].link + "' target='_blank'><img class='img-proyecto' src='img/proyectos/" + proyectos[i].imagen + "' alt='" + proyectos[i].nombreProyecto + "'></a></div>")
            else
                colImagen = $("<div class='col-md-5'><img class='img-proyecto' src='img/proyectos/" + proyectos[i].imagen + "' alt='" + proyectos[i].nombreProyecto + "'></div>")

            mainContainer.append(colImagen);

            var colContent = $("<div class='col-md-6 proyectos-content'></div>");
            mainContainer.append(colContent);

            var rowNombre = $("<div class ='row proyectos-nombre'><h4>" + proyectos[i].nombreProyecto + "</h4></div>");
            colContent.append(rowNombre);

            var rowDescripcion = $("<div class ='row proyectos-descripcion'><p class='p-justify'>" + proyectos[i].descripcion + "</p></div>");;
            colContent.append(rowDescripcion);

            var rowTecnologias = $("<div class ='row proyectos-tecnologias'>Construido con " + proyectos[i].tecnologias + "</div>");;
            colContent.append(rowTecnologias);

            if (proyectos[i].repo) {
                var colRepo = $("<div class='col-md-1 proy-repo'><a href='" + proyectos[i].repo + "' target='_blank'><img src='icons/github-logo-proy.png' alt='github'></a></div>");
                mainContainer.append(colRepo);
            }

            $("#main-proyectos").append(mainRow);

        }
    });
}