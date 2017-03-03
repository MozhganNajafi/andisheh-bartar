(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .component('sidebar', {

      templateUrl: 'dashboard/components/sidebar/sidebar.html',
      scope: true,
      controller: 'SidebarController',
      controllerAs: 'sidebar',
      transclude: true
    });


})();