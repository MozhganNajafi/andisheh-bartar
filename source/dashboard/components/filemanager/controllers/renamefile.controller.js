
+(function () {

    'use strict';

    angular
        .module('DashboardApplication')
        .controller('FileManagerRenameFileController', ['$scope', '$q', 'Event', 'FoldersRest', FileManagerRenameFileController]);

    function FileManagerRenameFileController($scope, $q, Event, FoldersRest) {
        var vm = this;
        var fileId = $scope.ngDialogData.fileId;
        vm.response = $scope.ngDialogData.response;
        vm.file = $scope.ngDialogData.file;
        vm.fileName = $scope.ngDialogData.fileName;
        vm.fileApi = $scope.ngDialogData.fileApi;
        vm.renameFile = renameFile;
        var fullName = vm.file.name;

        function renameFile() {
            if (vm.fileName == "") {
                alert('وارد کردن نام الزامیست', 'انجام نشد!');
            } else {
                var indexOf = fullName.indexOf(".");
                var fileExtension = fullName.substring(indexOf);
                var newName = vm.fileName + fileExtension;

                var obj = {
                    Id: fileId,
                    Name: newName
                }
                var $defer = $q.defer();
                vm.fileApi.one('Rename').customPUT(obj).then(function () {
                    Event.publish('FILE_TREEVIEW_UPDATED');
                    alert('نام فایل با موفقیت تغییر یافت', 'انجام شد!');
                    $scope.closeThisDialog('succeeded');
                    $defer.resolve();
                }, function (error) {
                    $defer.reject(error);
                });
                return $defer.promise;
            }
        }
    }
})();
