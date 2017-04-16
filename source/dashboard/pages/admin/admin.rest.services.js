+(function () {

  'use strict';
  angular
    .module('DashboardApplication')
    .service('AdminRest', ['Restangular', AdminRestService ]);

  function AdminRestService(Restangular) {
    return Restangular.service('');
  }

})();