+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('FileManagerNewFolderController', ['$scope', '$q', 'Event', 'FoldersRest', FileManagerNewFolderController]);

  function FileManagerNewFolderController($scope, $q, Event, FoldersRest) {
    var vm = this;
    vm.folder = {};
    vm.add = function () {
      if (vm.folder.name == undefined || vm.folder.description == undefined) {
        // toastr.error('وارد کردن نام پوشه و توضیحات الزامیست', 'انجام نشد!');
      } else {
        var newFolder = {
          Name: vm.folder.name,
          Description: vm.folder.description,
          ParentId: $scope.ngDialogData.folderId
        };
        var $defer = $q.defer();
        FoldersRest.post(newFolder).then(function () {
          Event.publish('FOLDERS_TREEVIEW_UPDATED');
          $defer.resolve();
        }, function (error) {
          $defer.reject(error);
        });
        return $defer.promise;
      };
    }
  }

})();