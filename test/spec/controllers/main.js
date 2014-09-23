'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('myApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attacha list of marketingItems to the scope', function () {
    expect(scope.marketingItems.length).toBe(3);
  });
});
