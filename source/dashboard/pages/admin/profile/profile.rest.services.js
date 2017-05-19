+(function () {

  'use strict';
  angular
    .module('DashboardApplication')
    .service('PersonalInfoRest', ['Restangular', PersonalInfoRestService]);

  function PersonalInfoRestService(Restangular) {
    return Restangular.service('PersonalInfo');
  }

})();