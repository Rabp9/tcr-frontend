'use strict';

/**
 * @ngdoc service
 * @name tcrFrontendApp.serviciosservice
 * @description
 * # serviciosservice
 * Factory in the tcrFrontendApp.
 */
angular.module('tcrFrontendApp')
.factory('serviciosservice', function($resource, envservice) {
    return $resource(envservice.getHost() + 'servicios/:id.json', {}, {
        getSome: {
            method: 'GET',
            url: envservice.getHost() + 'servicios/get_some/:amount.json',
        },
        getIndex: {
            method: 'GET',
            url: envservice.getHost() + 'servicios/getIndex.json'
        }
    });
});