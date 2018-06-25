'use strict';

describe('Controller: HeroCtrl', function () {

  // load the controller's module
  beforeEach(module('tcrFrontendApp'));

  var HeroCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HeroCtrl = $controller('HeroCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HeroCtrl.awesomeThings.length).toBe(3);
  });
});
