+(function () {

  'use strict';
  angular
    .module('DashboardApplication')
    .service('NewsContentRest', ['Restangular', NewsContentRestService]);

  function NewsContentRestService(Restangular) {
    return Restangular.service('newscontent');
  }

  angular
    .module('DashboardApplication')
    .service('CommentRest', ['Restangular', CommentRestService]);

  function CommentRestService(Restangular) {
    return Restangular.service('Comment');
  }

})();