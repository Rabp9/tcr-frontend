'use strict';

/**
 * @ngdoc service
 * @name tcrFrontendApp.clientesservice
 * @description
 * # clientesservice
 * Factory in the tcrFrontendApp.
 */
angular.module('tcrFrontendApp')
.factory('clientesservice', function ($resource, envservice) {
    return $resource(envservice.getHost() + 'clientes/:id.json');
});