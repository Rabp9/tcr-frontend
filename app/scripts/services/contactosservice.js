'use strict';

/**
 * @ngdoc service
 * @name tcrFrontendApp.contactosservice
 * @description
 * # contactosservice
 * Factory in the tcrFrontendApp.
 */
angular.module('tcrFrontendApp')
.factory('contactosservice', function ($resource, envservice) {
    return $resource(envservice.getHost() + 'contactos/:id.json');
});