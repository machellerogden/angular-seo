(function () {

    var app = angular.module('aseo', []);

    app.directive('aseoDynamicContent', function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/js/templates/dynamic-content.html'
        };
    });


}());
