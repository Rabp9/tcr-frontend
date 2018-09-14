'use strict';

/**
 * @ngdoc service
 * @name tcrFrontendApp.envservice
 * @description
 * # envservice
 * Factory in the tcrFrontendApp.
 */
angular.module('tcrFrontendApp')
.factory('envservice', function () {
    return {
        getHost: function() {
            switch (window.location.hostname) {
                case 'localhost':
                    return 'http://localhost:8000/transnv-backend/';
                case 'tcr.robertobocanegra.com':
                    return 'http://transnv.robertobocanegra.com/api/';
                case 'www.tcr.robertobocanegra.com':
                    return 'http://transnv.robertobocanegra.com/api/';
                case 'tcr.com.pe':
                    return 'http://transnv.com.pe/api/';
                case 'www.tcr.com.pe':
                    return 'http://transnv.com.pe/api/';
            }
        }
    };
});