'use strict';

/**
 * @ngdoc service
 * @name tcrFrontendApp.infosservice
 * @description
 * # infosservice
 * Factory in the tcrFrontendApp.
 */
angular.module('tcrFrontendApp')
.factory('infosservice', function($resource, envservice) {
    return $resource(envservice.getHost() + 'infos/:id.json', {}, {
        getDataMany: {
            method: 'POST',
            url: envservice.getHost() + 'infos/getDataMany.json',
        }
    });
});