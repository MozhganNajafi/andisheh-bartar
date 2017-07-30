+(function () {


  'use strict';

  angular
        .module('DashboardApplication')
        .component('filemanager', {

          templateUrl: 'dashboard/components/filemanager/filemanager.html',
          scope: true,
          controller: 'FileManagerController'

        });



})();