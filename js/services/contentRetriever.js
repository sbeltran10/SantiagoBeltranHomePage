app.factory('contentRetriever', ['$http', function ($http) {

    return {
        fn: function (dataContent, lang, callback) { 
            $http.get('datos/' + dataContent + '-' + lang + '.json')
                .then(function (data) {
                    callback(data); 
                });
        }
    };
}]);