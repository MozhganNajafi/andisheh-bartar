+(function () {

  'use strict';
  angular
    .module('DashboardApplication')
    .service('SearchRest', ['Restangular', SearchRestService]);

  function SearchRestService(Restangular) {
    return Restangular.service('NewsContent');
  }

})();