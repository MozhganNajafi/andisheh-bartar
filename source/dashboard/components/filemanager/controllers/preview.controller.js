+(function() {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('FileManagerPreviewController', 
    [ '$scope', FileManagerPreviewController ]);

  function FileManagerPreviewController( $scope ) {
    var vm = this;
    vm.file = $scope.ngDialogData.file;
    console.log(vm.file);
  }

})();