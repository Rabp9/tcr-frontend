'use strict';

/**
 * @ngdoc service
 * @name tcrFrontendApp.noticiasservice
 * @description
 * # noticiasservice
 * Factory in the tcrFrontendApp.
 */
angular.module('tcrFrontendApp')
.factory('noticiasservice', function ($resource, envservice) {
    return $resource(envservice.getHost() + 'noticias/:id.json', {}, {
        getSome: {
            method: 'GET',
            url: envservice.getHost() + 'noticias/get_some/:amount.json',
        },
    });
});