'use strict';

/**
 * @ngdoc overview
 * @name angularStuffApp
 * @description
 * # angularStuffApp
 *
 * Main module of the application.
 */
angular
  .module('myApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/todos', {
        templateUrl: 'views/todo.html',
        controller: 'TodoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
