+(function () {

  'use strict';
  angular
    .module('DashboardApplication')
    .service('LinkRest', ['Restangular', LinkRestService]);

  function LinkRestService(Restangular) {
    return Restangular.service('link');
  }

})();