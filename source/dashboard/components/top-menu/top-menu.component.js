+(function () {


  'use strict';

  angular
        .module('DashboardApplication')
        .component('topMenu', {

          templateUrl: 'dashboard/components/top-menu/top-menu.html',
          scope: true,
          controller: 'TopMenuController',
          controllerAs: 'TopMenuViewModel',

        });



})();