+(function () {

  'use strict';
  angular
    .module('DashboardApplication')
    .service('NewsRest', ['Restangular', LeadRestService]);

  function LeadRestService(Restangular) {
    return Restangular.service('NewsContent');
  }

})();