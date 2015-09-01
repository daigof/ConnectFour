'use strict';


angular.module('connectFourApp').
factory('boardService',[ '$http', function($http) {


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

      window.sessionStorage.setItem('board', JSON.stringify(board));


    };

    var checkWin = function(){
      for(var i = 0; i < 6; i++){
        for(var j = 0; j < 7; j++){
          if(j < 4){
            if (board[i][j] === board[i][j+1] && board[i][j] === board[i][j+2] && board[i][j] === board[i][j+3]  && board[i][j] !== ' ' ){
              console.log(board[i][j],' WON');
              window.alert (board[i][j]+' WON');
          }
        }

          if(i < 3){
            if (board[i][j] === board[i+1][j] && board[i+2][j] === board[i][j] && board[i][j] === board[i+3][j]  && board[i][j] !== ' ' ){
              console.log(board[i][j],' WON');
              window.alert (board[i][j]+' WON');
          }

        }

      //Diagonal check should be more of the SAME :)


        }


      }

    };

    var redraw = function(){
       return $http.get('#/board');
    };

//returns a funtion that returns a promise. Handling response data is part of Controller responsibility
return {
  pushItem : pushItem,
  checkWin: checkWin,
  board: board,
  redraw: redraw
};



}]);
