+(function () {

  'use strict';
  angular
    .module('DashboardApplication')
    .service('ArchiveRest', ['Restangular', ArchiveRestService]);

  function ArchiveRestService(Restangular) {
    return Restangular.service('NewsContent');
  }

})();