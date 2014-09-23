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
    $scope.todoList = [
      {
        title: 'Todo list title',
        desc: 'Todo list description',
        complete: true
      }
    ];
    $scope.update = function() {
      $scope.todoList.push($scope.todo);
    }
  });
