(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .config(['$breadcrumbProvider', function ($breadcrumbProvider) {

      $breadcrumbProvider.setOptions({

        includeAbstract: true,
        template: '<div> \
        <span ng-repeat="step in steps"> \
        <span class="font-medium" ng-if="$first">{{step.ncyBreadcrumbLabel}}</span> \
        <span ng-if="!$first">| {{step.ncyBreadcrumbLabel}}</span> \
        </span> \
        </div>'
      });
    }]);

})();