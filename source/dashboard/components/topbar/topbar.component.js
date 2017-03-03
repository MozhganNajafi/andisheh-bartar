(function() {

  'use strict';

  angular
    .module('DashboardApplication')
    .component('topbar', {
      templateUrl: 'dashboard/components/topbar/topbar.html',
      controller: 'TopbarController'
    });

})();
