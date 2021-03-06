'use strict';

/**
 * @ngdoc function
 * @name tcrFrontendApp.controller:UbicacionCtrl
 * @description
 * # UbicacionCtrl
 * Controller of the tcrFrontendApp
 */
angular.module('tcrFrontendApp')
.controller('UbicacionCtrl', function ($scope, ngProgressFactory, infosservice,
    cabecerasservice, $q, $sce, $rootScope, imgResponsiveFilter) {
    var search = ['ubicacion_lat_long', 'direccion'];
    
    $scope.init = function() {
        $scope.progressbar = ngProgressFactory.createInstance();
        $scope.progressbar.start();
        return $q.all([
            infosservice.getDataMany(search).$promise,
            cabecerasservice.getByDescripcion({descripcion: 'ubicacion-cabecera'}).$promise
        ]).then(function(data) {
            $scope.infos = data[0].info;
            $scope.cabecera = data[1].cabecera.imagen;
            $scope.progressbar.complete();
        });
    };
    
    $scope.getCabeceraSrc = function(cabecera, size) {
        var src = $rootScope.path_location + 'img/cabeceras/' + cabecera;
        return $sce.trustAsResourceUrl(imgResponsiveFilter(src, size));
    };
    
    $scope.showInfo = function(event) {
        $scope.map.showInfoWindow('myInfoWindow', this);
    };
    
    $scope.init();
});