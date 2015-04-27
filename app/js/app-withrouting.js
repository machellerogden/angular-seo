angular.module('aseo', [ 'ngRoute' ]).config([ '$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/content-a', {
                templateUrl: '/app/js/templates/basic-routing-a.html'
            }).
            when('/content-b', {
                templateUrl: '/app/js/templates/basic-routing-b.html'
            }).
            otherwise({
                redirectTo: '/content-a'
            });
    }
]);
