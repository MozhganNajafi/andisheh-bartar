+(function () {

  'use strict';
  angular
    .module('CommonApplication')
    .service('CommentRest', ['Restangular', CommentRestService ]);

  function CommentRestService(Restangular) {
    return Restangular.service('comment');
  }

})();