(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .component('uploader', {
      scope: true,
      bindings: {
        abort: '&',
        retry: '&'
      },
      templateUrl: 'dashboard/components/uploader/uploader.html',
      controller: 'FileUploaderController'
    });
    
})();