+(function () {

  'use strict';
  angular
    .module('DashboardApplication')
    .service('NewsContentRest', ['Restangular', NewsContentRestService]);

  function NewsContentRestService(Restangular) {
    return Restangular.service('newscontent');
  }

})();