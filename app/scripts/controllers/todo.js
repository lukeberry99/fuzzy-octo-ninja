'use strict';

/**
 * @ngdoc function
 * @name myApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the myApp
 */
angular.module('myApp')
  .controller('TodoCtrl', function ($scope) {
    $scope.todo = {};
    $scope.todoList = [];
    $scope.update = function() {
      $scope.todoList.push($scope.todo);
    }
  });
