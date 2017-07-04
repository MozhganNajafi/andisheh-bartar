+(function () {

  'use strict';
  angular
    .module('DashboardApplication')
    .service('CommentRest', ['Restangular', CommentRestService]);

  function CommentRestService(Restangular) {
    return Restangular.service('Comment');
  }

})();