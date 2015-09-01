'use strict';

/**
 * @ngdoc function
 * @name connectFourApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the connectFourApp
 */
angular.module('connectFourApp')
.controller('Player1Ctrl', ['$scope','boardService',function ($scope,boardService) {

  $scope.player1Column = '0';

  this.submitP1 = function(){
    boardService.pushItem('X',$scope.player1Column);


    console.log(boardService.board);

  };
}]);
