+(function () {

  'use strict';
  angular
    .module('DashboardApplication')
    .service('AddContentRest', ['Restangular', AddContentRestService ]);

  function AddContentRestService(Restangular) {
    return Restangular.service('');
  }

})();