+(function () {

    'use strict';

    angular
        .module('DashboardApplication')
        .controller('FileManagerCutCopyController', ['FoldersRest', '$scope', 'FilesRest', 'toastr', FileManagerCutCopyController]);

    function FileManagerCutCopyController(FoldersRest, $scope, FilesRest, toastr) {

        var vm = this;
        vm.cutorcopy = cutorcopy;
        var selectedFiles = $scope.ngDialogData.file;
        var files = $scope.ngDialogData.files;
        var iscopy = $scope.ngDialogData.iscopy;
        if (iscopy) {
            vm.buttonText = 'کپی در';
        } else {
            vm.buttonText = 'انتقال به';
        }

        function getFoldersList() {
            FoldersRest.getList().then(function (response) {
                vm.folders = response.data;
            });
        }
        getFoldersList();

        $scope.$watch('selectedNode', function (node) {
            if (node) {
                vm.newfolderId = node.id;
            }
        });

        function cutorcopy() {
            selectedFiles.forEach(function (file) {
                var obj = {
                    id: file.id,
                    IsCopy: iscopy,
                    NewFolderId: vm.newfolderId
                }
                files.one('paste').customPUT(obj).then(function () {

                    if (iscopy) {
                        toastr.success('فایل با موفقیت کپی شد', 'انجام شد!');
                    } else {
                        toastr.success('فایل با موفقیت منتقل شد', 'انجام شد!');
                    }
                    $scope.closeThisDialog('succeeded');
                });
            });
        }

    }

})();