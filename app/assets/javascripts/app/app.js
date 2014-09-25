angular
  .module('ngRails', ['ng', 'ngRoute', 'ngActiveResource'])

  .config(function ($routeProvider) {

    $routeProvider

      .when('/', {
        templateUrl: 'views/curricula/index.html',
        controller: 'CurriculaIndexCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });

  })

  .run(['ngActiveResource', function(ngActiveResource) {

    ngActiveResource.api.configure(function(config) {
      config.baseURL = "http://localhost:3000/static/api";
    });

  }]);
