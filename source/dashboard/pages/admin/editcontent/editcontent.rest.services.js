+(function () {

  'use strict';
  angular
    .module('DashboardApplication')
    .service('EditContentRest', ['Restangular', EditContentRestService ]);

  function EditContentRestService(Restangular) {
    return Restangular.service('');
  }

})();