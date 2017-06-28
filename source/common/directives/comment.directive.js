+(function () {

  'use strict';

  angular
        .module('CommonApplication')
        .directive('comment', [CommentDirective]);

  function CommentDirective() {
    return {
      restrict: 'E',
      scope: {
        newsId: '='
      },
      templateUrl: 'common/templates/comment.html',
      controller: 'CommentController',
      controllerAs: 'CommentViewModel'
    };
  }
})();