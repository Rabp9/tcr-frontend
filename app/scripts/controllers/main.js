'use strict';

/**
 * @ngdoc function
 * @name tcrFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tcrFrontendApp
 */
angular.module('tcrFrontendApp')
.controller('MainCtrl', function ($scope, $q, $rootScope, slidesservice, $sce, 
    infosservice, imgResponsiveFilter, /* serviciosservice, noticiasservice, */clientesservice, NgMap,
    ngProgressFactory) {
        
    $scope.myInterval = 4000;
    $scope.noWrapSlides = false;
    $scope.path_location = $rootScope.path_location;
    var search = ['transnv_resumen', 'ubicacion_lat_long', 'direccion'];
    $scope.googleMapsUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBN3iXCosOm01j8X97QyrYYGfGRRRuyMFY';
/*
    NgMap.getMap().then(function(map) {
        $scope.map = map;
        google.maps.event.trigger(map, 'resize'); 
    });
  */  
    $scope.init = function() {
        $scope.progressbar = ngProgressFactory.createInstance();
        $scope.progressbar.start();
        return $q.all([
            slidesservice.get().$promise,
           // infosservice.getDataMany(search).$promise,
            //serviciosservice.getSome({amount: 2}).$promise,
            //noticiasservice.get().$promise,
//            clientesservice.get().$promise
        ]).then(function(data) {
            $scope.slides = data[0].slides;
          //  $scope.infos = data[1].info;
            /*
            $scope.servicios = data[2].servicios;
            $scope.noticias = data[3].noticias;
            $scope.clientes = data[4].clientes;
            */
            $scope.progressbar.complete();
            
        });
    };
    
    $scope.getSlideSrc = function(slide, size) {
        var src = $rootScope.path_location + 'img/slides/' + slide.imagen;
        return $sce.trustAsResourceUrl(imgResponsiveFilter(src, size));
    };
    
    $scope.showInfo = function(event) {
        $scope.map.showInfoWindow('myInfoWindow', this);
    };
    
    $scope.init();
});