+(function () {

  'use strict';
  angular
    .module('DashboardApplication')
    .service('LeadRest', ['Restangular', LeadRestService]);

  function LeadRestService(Restangular) {
    return Restangular.service('');
  }

})();