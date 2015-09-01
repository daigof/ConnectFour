'use strict';


angular.module('connectFourApp')
.directive('boardDirective',['boardService', function(boardService) {
  return {
    restrict: 'E',
    link: function(scope) {
      scope.board = boardService.board;
    },
    template: "<div class='well'><hr/>{{board}}<hr/></div>"
  };

}]);
