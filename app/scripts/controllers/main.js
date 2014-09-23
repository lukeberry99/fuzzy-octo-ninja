'use strict';

/**
 * @ngdoc function
 * @name myApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myApp
 */
angular.module('myApp')
  .controller('MainCtrl', function ($scope) {
    $scope.fancyArr = [
      { 
        title: 'HTML5 Boilerplate',
        desc: 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.'
      },
      {
        title: 'Angular',
        desc: 'AngularJS is a toolset for building the framework most suited to your application development.'
      },
      {
        title: 'Karma',
        desc: 'Spectacular Test Runner for JavaScript.'
      }
    ];
  });
