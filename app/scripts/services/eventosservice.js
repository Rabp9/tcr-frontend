'use strict';

/**
 * @ngdoc service
 * @name tcrFrontendApp.eventosservice
 * @description
 * # eventosservice
 * Factory in the tcrFrontendApp.
 */
angular.module('tcrFrontendApp')
.factory('eventosservice', function($resource, envservice) {
    return $resource(envservice.getHost() + 'eventos/:id.json', {}, {
        getSome: {
            method: 'GET',
            url: envservice.getHost() + 'eventos/getSome/:amount.json',
        }
    });
});