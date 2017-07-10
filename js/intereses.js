var INTERESES = "intereses";

var initializeIntereses = function () {
    $("#" + INTERESES + "-but").on("click", function () { hideLoad(INTERESES) });
}

var loadIntereses = function () {

    $.getJSON("datos/" + INTERESES + "-" + currentLang + ".json", function (json) {

        $("#" + INTERESES + "-descripcion").append($("<p class='p-justify'>" + json.descripcion + "</p>"));

        var intereses = json.intereses;
        for (var i = 0; i < intereses.length; i++) {
            $("#t-interes" + (i + 1)).append($("<h4>" + intereses[i].nombre + "</h4>"));
            $("#c-interes" + (i + 1)).append($("<p class='p-justify'>" + intereses[i].descripcion + "</p>"));
        }

    })
}

var unloadIntereses = function () {
    $("#" + INTERESES + "-descripcion").empty();
    $("#t-interes1").empty();
    $("#t-interes2").empty();
    $("#t-interes3").empty();
    $("#c-interes1").empty();
    $("#c-interes2").empty();
    $("#c-interes3").empty();
}