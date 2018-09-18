'use strict';

describe('Service: eventosservice', function () {

  // load the service's module
  beforeEach(module('tcrFrontendApp'));

  // instantiate service
  var eventosservice;
  beforeEach(inject(function (_eventosservice_) {
    eventosservice = _eventosservice_;
  }));

  it('should do something', function () {
    expect(!!eventosservice).toBe(true);
  });

});
