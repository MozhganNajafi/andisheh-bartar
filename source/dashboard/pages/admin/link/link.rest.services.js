+(function () {

  'use strict';
  angular
    .module('DashboardApplication')
    .service('NewsRest', ['Restangular', NewsRestService]);

  function NewsRestService(Restangular) {
    return Restangular.service('');
  }

})();