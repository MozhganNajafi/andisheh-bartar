+(function () {

  'use strict';
  angular
    .module('DashboardApplication')
    .service('LogRest', ['Restangular', LogRestService]);

  function LogRestService(Restangular) {
    return Restangular.service('log');
  }

})();