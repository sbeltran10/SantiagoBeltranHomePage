var INTERESES = "intereses";

var loadIntereses = function () {

    $("#" + INTERESES + "-but").on("click", function () { hideLoad(INTERESES) });

    $.getJSON("datos/"+INTERESES+".json", function (json) {

        $("#"+INTERESES+"-descripcion").append($("<p>" + json.descripcion + "</p>"));

        var intereses = json.intereses;
        for (var i = 0; i < intereses.length; i++) {
            $("#t-interes"+(i+1)).append($("<h4>" + intereses[i].nombre + "</h4>"));
            $("#c-interes"+(i+1)).append($("<p class='p-justify'>" + intereses[i].descripcion + "</p>"));
        }
        
    })
}