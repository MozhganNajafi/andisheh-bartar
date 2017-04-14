+(function () {

  'use strict';

  angular
        .module('DashboardApplication')
        .component('archive', {

          templateUrl: 'dashboard/components/archive/archive.html',
          scope: true,
          controller: 'archiveController',
          controllerAs: 'archiveViewModel',

        });



})();