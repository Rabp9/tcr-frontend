'use strict';

/**
 * @ngdoc service
 * @name tcrFrontendApp.cabecerasservice
 * @description
 * # cabecerasservice
 * Factory in the tcrFrontendApp.
 */
angular.module('tcrFrontendApp')
.factory('cabecerasservice', function($resource, envservice) {
    return $resource(envservice.getHost() + 'cabeceras/:id.json', {}, {
        getByDescripcion: {
            method: 'GET',
            url: envservice.getHost() + 'cabeceras/getByDescripcion.json',
        }
    });
});