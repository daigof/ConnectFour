'use strict';

/**
 * @ngdoc function
 * @name connectFourApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the connectFourApp
 */
angular.module('connectFourApp')
  .controller('MainCtrl', ['boardService',function (boardService) {
      this.clearBoard = boardService.clearBoard;
  }]);
