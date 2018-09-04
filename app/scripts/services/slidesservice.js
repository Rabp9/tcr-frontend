'use strict';

/**
 * @ngdoc service
 * @name tcrFrontendApp.slidesservice
 * @description
 * # slidesservice
 * Factory in the tcrFrontendApp.
 */
angular.module('tcrFrontendApp')
.factory('slidesservice', function ($resource, envservice) {
    return $resource(envservice.getHost() + 'slides/:id.json');
});