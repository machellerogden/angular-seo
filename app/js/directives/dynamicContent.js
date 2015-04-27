
angular.module('aseo')
    .directive('aseoDynamicContent', function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/js/templates/dynamic-content.html'
        };
    });
