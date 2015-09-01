'use strict';


angular.module('connectFourApp').
factory('boardService', [function() {


  var board = [
    [' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' '] ];

    var pushItem = function(player, column){

      for(var i = 0; i < board[column].length; i++){
        console.log(board[column][i]);
        if (board[column][i] === ' '){
            board[column][i] = player;
            break;
        }
      }


    };

    var checkWin = function(val){console.log(val);};

//returns a funtion that returns a promise. Handling response data is part of Controller responsibility
return {
  pushItem : pushItem,
  checkWin: checkWin,
  board: board
};



}]);
