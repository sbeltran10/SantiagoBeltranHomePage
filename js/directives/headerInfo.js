app.directive('headerInfo', function () {
    return {
        restrict: 'AE',
        scope: true,
        templateUrl: 'views/headerInfo.html',
        replace: true,
        controller: 'HeaderController'
    };
});