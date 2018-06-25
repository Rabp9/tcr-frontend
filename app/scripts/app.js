'use strict';

/**
 * @ngdoc overview
 * @name tcrFrontendApp
 * @description
 * # tcrFrontendApp
 *
 * Main module of the application.
 */
angular
.module('tcrFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
    var heroState = {
        templateUrl: 'views/hero.html',
        controller: 'HeroCtrl'
    };
    
    var quienesSomosState = {
        templateUrl: 'views/quienessomos.html',
        controller: 'QuienessomosCtrl'
    };
    
    var eventosState = {
        templateUrl: 'views/eventos.html',
        controller: 'EventosCtrl'
    };
    
    var galeriaState = {
        templateUrl: 'views/galeria.html',
        controller: 'GaleriaCtrl'
    };
    var contactenosState = {
        templateUrl: 'views/contactenos.html',
        controller: 'ContactenosCtrl'
    };
    
    var mainState = {
        name: 'main',
        url: '/',
        views: {
            'hero': heroState,
            'quienesSomos': quienesSomosState,
            'eventos': eventosState,
            'galeria': galeriaState,
            'contactenos': contactenosState
        },
        title: 'Inicio'
    };
    
    $stateProvider.state(mainState);
    $urlRouterProvider.when('', '/');
});