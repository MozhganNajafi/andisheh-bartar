+(function () {

    'use strict';

    angular
        .module('DashboardApplication')
        .controller('FileManagerRemoveFolderController', ['$scope', '$q', 'Event', 'FoldersRest', 'toastr', FileManagerRemoveFolderController]);

    function FileManagerRemoveFolderController($scope, $q, Event, FoldersRest, toastr) {
        var vm = this;
        var folderId = $scope.ngDialogData.folderId;

        vm.removeFolder = removeFolder;

        function removeFolder() {
            var id = folderId;
            var $defer = $q.defer();
            FoldersRest.one(id).remove().then(function () {
                console.log("FoldersRest");
                debugger;
                Event.publish('FOLDERS_TREEVIEW_UPDATED');
                toastr.success('فولدر با موفقیت حذف شد', 'انجام شد!');
                $defer.resolve();
            }, function (error) {
                $defer.reject(error);
            });
            return $defer.promise;
        }
    }

})();