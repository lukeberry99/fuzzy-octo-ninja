'use strict';

describe('Controller: TodoCtrl', function () {

  // load the controller's module
  beforeEach(module('myApp'));

  var TodoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TodoCtrl = $controller('TodoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of todoItems to the scope', function () {
    expect(scope.todoList.length).toBe(1);
  });
  
});
