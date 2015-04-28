angular.module('aseo', [ 'ngRoute' ]).config([ '$locationProvider', '$routeProvider',
    function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
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
