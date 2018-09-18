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
                    return 'http://localhost:8000/tcr-backend/';
                case 'tcr.robertobocanegra.com':
                    return 'http://tcr.robertobocanegra.com/api/';
                case 'www.tcr.robertobocanegra.com':
                    return 'http://tcr.robertobocanegra.com/api/';
                case 'tcr.com.pe':
                    return 'http://tcr.com.pe/api/';
                case 'www.tcr.com.pe':
                    return 'http://tcr.com.pe/api/';
            }
        }
    };
});