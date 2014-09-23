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
    $scope.todoList = [
      {
        title: 'Todo list title',
        desc: 'Todo list description',
        complete: true
      },
      {
        title: 'Todo list title 2',
        desc: 'Todo list description',
        complete: false
      },
      {
        title: 'Todo list title 3',
        desc: 'Todo list description',
        complete: false
      },
      {
        title: 'Todo list title 4',
        desc: 'Todo list description',
        complete: true
      },
      {
        title: 'test',
        desc: 'test',
        complete: false
      }
    ];
  });
