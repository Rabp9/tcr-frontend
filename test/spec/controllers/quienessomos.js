'use strict';

describe('Controller: QuienessomosCtrl', function () {

  // load the controller's module
  beforeEach(module('tcrFrontendApp'));

  var QuienessomosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QuienessomosCtrl = $controller('QuienessomosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(QuienessomosCtrl.awesomeThings.length).toBe(3);
  });
});
