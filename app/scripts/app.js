'use strict';

/**
 * @ngdoc overview
 * @name connectFourApp
 * @description
 * # connectFourApp
 *
 * Main module of the application.
 */
angular
  .module('connectFourApp', [
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/games/1', {
        templateUrl: 'views/player1.html',
        controller: 'Player1Ctrl',
        controllerAs: 'player1'
      })
      .when('/games/2', {
        templateUrl: 'views/player2.html',
        controller: 'Player2Ctrl',
        controllerAs: 'player2'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
