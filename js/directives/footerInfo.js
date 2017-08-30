app.directive('footerInfo', function () {
    return {
        restrict: 'AE',
        scope: true,
        templateUrl: 'views/footerInfo.html',
        controller: 'FooterController'
    };
});