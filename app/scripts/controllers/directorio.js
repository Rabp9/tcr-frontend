'use strict';

/**
 * @ngdoc function
 * @name tcrFrontendApp.controller:DirectorioCtrl
 * @description
 * # DirectorioCtrl
 * Controller of the tcrFrontendApp
 */
angular.module('tcrFrontendApp')
.controller('DirectorioCtrl', function ($scope, ngProgressFactory, infosservice,
    cabecerasservice, $q, contactosservice, $sce, $rootScope, imgResponsiveFilter) {
    
    $scope.init = function() {
        $scope.progressbar = ngProgressFactory.createInstance();
        $scope.progressbar.start();
        return $q.all([
            contactosservice.get().$promise,
            cabecerasservice.getByDescripcion({descripcion: 'directorio-cabecera'}).$promise
        ]).then(function(data) {
            $scope.contactos = data[0].contactos;
            $scope.cabecera = data[1].cabecera.imagen;
            $scope.progressbar.complete();
        });
    };
    
    $scope.getCabeceraSrc = function(cabecera, size) {
        var src = $rootScope.path_location + 'img/cabeceras/' + cabecera;
        return $sce.trustAsResourceUrl(imgResponsiveFilter(src, size));
    };
    
    $scope.init();
});