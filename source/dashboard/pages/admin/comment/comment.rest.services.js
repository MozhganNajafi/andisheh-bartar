+(function () {

  'use strict';
  angular
    .module('DashboardApplication')
<<<<<<< HEAD
    .service('NewsContentRest', ['Restangular', NewsContentRestService]);

  function NewsContentRestService(Restangular) {
    return Restangular.service('newscontent');
=======
    .service('CommentRest', ['Restangular', CommentRestService]);

  function CommentRestService(Restangular) {
    return Restangular.service('Comment');
>>>>>>> 73138de3c8792c05a4347427c4d10d70f094c06c
  }

})();