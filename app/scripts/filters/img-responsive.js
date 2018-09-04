'use strict';

/**
 * @ngdoc filter
 * @name tcrFrontendApp.filter:imgResponsive
 * @function
 * @description
 * # imgResponsive
 * Filter in the tcrFrontendApp.
 */
angular.module('tcrFrontendApp')
.filter('imgResponsive', function () {
    return function (input, size) {
        var ext = input.split('.').pop();
        
        for (var i = input.length - 1; i > 0; i--) {
            if (input.charAt(i) === '.') {
                input = input.slice(0, i);
                break;
            }
        }
        
        input = input + size + '.' + ext;
        return input;
    };
});
