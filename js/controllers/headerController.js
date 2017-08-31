app.controller('HeaderController', ['$scope', 'contentRetriever', function ($scope, contentRetriever) {

    $scope.language = 'es';
    $scope.headerMainInfo = {}

    contentRetriever.fn('general', 'es', function (data) {
        $scope.headerMainInfo = data.data
    });

    $scope.changeCurrentView = function (newView) {

    }

    $scope.changeInfoShown = function (seccion) {
        var newSection = '';
        switch (seccion) {
            case "Perfil Profesional" || "Profile":
                newSection = "intereses";
                break;
            case "Experiencia Laboral" || "Work Experience":
                newSection = "experiencia";
                break;
            case "Proyectos" || "Projects":
                newSection = "proyectos";
                break;
            case "Habilidades" || "Skills":
                newSection = "habilidades";
                break;
            case "Hobbies" || "Hobbies":
                newSection = "hobbies";
                break;
            default:
                newSection = "general";
                break;
        }
        contentRetriever.fn(newSection, $scope.language, function (data) {
            console.log(data);
        });
    }
}])