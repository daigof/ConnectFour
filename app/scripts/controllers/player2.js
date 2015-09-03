'use strict';

/**
 * @ngdoc function
 * @name connectFourApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the connectFourApp
 */
angular.module('connectFourApp')
  .controller('Player2Ctrl', ['$scope','boardService',function ($scope,boardService) {

    $scope.player2Column = '1';

    this.submitP2 = function(){
      boardService.pushItem('2',$scope.player2Column);
      boardService.checkWin();

    //console.log(boardService.redraw());

/*  var promise = boardService.redraw();
  promise.then(function(response){

    $scope.board = response.data;
  });
*/
      console.log(boardService.board);

    };
  }]);
