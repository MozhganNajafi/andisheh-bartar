+(function () {

  'use strict';
  angular
    .module('DashboardApplication')
    .service('NewsRest', ['Restangular', NewsRestService]);

  function NewsRestService(Restangular) {
    return Restangular.service('NewsContent');
  }
  angular
    .module('DashboardApplication')
    .service('PersonalInfoRest', ['Restangular', PersonalInfoRestService]);

  function PersonalInfoRestService(Restangular) {
    return Restangular.service('personalInfo');
  }

})();