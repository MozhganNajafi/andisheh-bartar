+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('FileManagerRenameController', ['$scope', '$q', 'Event', 'FoldersRest', FileManagerRenameController]);

  function FileManagerRenameController($scope, $q, Event, FoldersRest) {

    var vm = this;
    var folderId = $scope.ngDialogData.folderId;

    vm.rename = rename;

    FoldersRest.one(folderId).get().then(function (response) {
      vm.response = response;
      vm.folder = response.entity;
    });

    function rename() {
      vm.response.entity = vm.folder;
      if (vm.folder.name == "") {
        alert('وارد کردن نام الزامیست', 'انجام نشد!');
      } else {
        var $defer = $q.defer();
        vm.response.customPUT(vm.response.entity).then(function () {
          Event.publish('FOLDERS_TREEVIEW_UPDATED');
          $defer.resolve();
        }, function (error) {
          $defer.reject(error);
        });
        return $defer.promise;
      }
    }

  }

})();