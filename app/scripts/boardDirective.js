'use strict';


angular.module('connectFourApp')
.directive('boardDirective',['boardService', function(boardService) {
  return {
    restrict: 'E',
    link: function(scope) {
      scope.board = JSON.parse(window.sessionStorage.getItem('board'));
      scope.board2 = boardService.board();
    },
    templateUrl: "views/boardTemplate.html"
  };

}]);
