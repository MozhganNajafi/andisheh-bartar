+(function () {


  'use strict';

  angular
        .module('DashboardApplication')
        .component('viewerStatistics', {

          templateUrl: 'dashboard/components/viewer-statistics/viewer-statistics.html',
          scope: true,
          controller: 'ViewerStatisticsController',
          controllerAs: 'ViewerStatisticsViewModel',

        });



})();