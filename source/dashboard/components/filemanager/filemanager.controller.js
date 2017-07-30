+(function () {

    'use strict';

    angular
        .module('DashboardApplication')
        .controller('FileManagerController',[ '$scope', 'TreeviewOptions', 'TreeviewHelper','ArrayHelper', 'FilesRest', 'FoldersRest', 'Event', 'Dialog', FileManagerController]);

    function FileManagerController($scope, TreeviewOptions, TreeviewHelper, ArrayHelper, FilesRest, FoldersRest, Event, Dialog) {
        var vm = this;
        // var TController = $scope.$ctrl;
        // vm.items = [
        //     { title: 'پوشه جدید', icon: 'icon-new-folder', click: openNewFolderPopup }, 
        //     { title: 'بارگذاری', icon: 'icon-upload', click: openFileUploaderPopup }, 
        //     { title: 'برش', icon: 'icon-cut' , click: openCutPopup }, 
        //     { title: 'کپی', icon: 'icon-copy', click: openCopyPopup}, 
        //     { title: 'تغییر نام', icon: 'icon-rename', click: openRenamePopup }, 
        //     // { title: 'انتقال به', icon: 'icon-move-to' }, 
        //     // { title: 'کپی در', icon: 'icon-copy-to' }, 
        //     { title: 'حذف', icon: 'icon-delete', click: TController.removeFile }, 
        //     { title: 'انتخاب همه', icon: 'icon-select-all', click: TController.selectAll }
        //     ];
        // console.log(vm.items);

        //tree
        vm.treeOptions = TreeviewOptions.get();
        // $scope.folders = [];
    $scope.$watch('folders', function () {
    $scope.folders = vm.folders;
      var nodes = TreeviewHelper.parseJSON($scope.folders);
        vm.ngModel = ArrayHelper.clean(nodes, null);
        // for internal use cases of treeview
        vm.nodeRefForSelect = vm.ngModel[0];
        // for external use cases. as result of treeview node selection for other
        // components
        vm.selectedNode = vm.ngModel[0];
    });

    vm.selectNode = function( node ) {
      vm.selectedNode = node;
    };

        vm.close = close;

    vm.files = [];
    vm.selectedFile;
    vm.selectedFiles;
    vm.selectedNode;


    vm.openNewFolderPopup = openNewFolderPopup;
    vm.openFileUploaderPopup = openFileUploaderPopup;
    vm.openCutPopup = openCutPopup;
    vm.openCopyPopup = openCopyPopup;
    vm.openRenamePopup = openRenamePopup;
    vm.removeFile = removeFile;
    vm.removeFolder = removeFolder;
    vm.selectAll = selectAll;

    // function getFoldersList() {
    //   FoldersRest.getList().then(function (response) {
    //     vm.folders = response.data;
    //   });
    // }
    // getFoldersList();

    vm.folders = [{"parentId":null,"name":"خانه","title":null,"id":1},{"parentId":null,"name":"اجتماعی","title":null,"id":2},{"parentId":2,"name":"اجتماعی بچه","title":null,"id":3},{"parentId":3,"name":"0","title":null,"id":4},{"parentId":null,"name":"aswddfd","title":null,"id":5},{"parentId":2,"name":"test","title":null,"id":7},{"parentId":null,"name":"01","title":null,"id":9}];

    Event.subscribe('FOLDERS_TREEVIEW_UPDATED', function () {
      getFoldersList();

      // TODO: It should be in another place
      if (Dialog) {
        Dialog.close();
      }
    });
    $scope.selectedNode;

    if (vm.initialFolderId) {
      vm.folderId = parseInt(vm.initialFolderId);
      getFiles();
    }

    $scope.$watch('selectedNode', function (node) {
      if (node) {
        vm.folderId = node.id;
        vm.folderName = node.Name;
        vm.selectedNode = node;
        getFiles();
      } else {
        vm.folderId = null;
        vm.folderName = " ";
        getFiles();
      }
    });

    function getFiles() {
      FilesRest.getList({
        FolderId: vm.folderId,
        SortTypeId: 0
      }).then(function (response) {
        vm.fileApiResponse = response;
        vm.files = response.data;
      });
    }

    Event.subscribe('SELECTED_SORT_TYPE_CHANGED', function (data) {
      FilesRest.getList({
        FolderId: vm.folderId,
        SortTypeId: data.sorttypeid || 0
      }).then(function (response) {
        vm.files = response.data;
      });
    });

    function openNewFolderPopup() {
      Dialog.open({
        template: 'dashboard/components/filemanager/templates/newfolder.html',
        width: '30%',
        data: {
          folderId: vm.folderId
        },
        controller: 'FileManagerNewFolderController',
        controllerAs: 'FileManagerNewFolderViewModel'
      });
    }

    function openFileUploaderPopup() {
      Dialog.open({
        template: '<uploader></uploader>',
        plain: true,
        data: {
          folderId: vm.folderId
        }
      });
    }

    function openCutPopup() {
      if (vm.selectedFile != undefined || vm.selectedFile != null || vm.selectedFiles.length > 0) {
        Dialog.open({
          template: 'dashboard/components/filemanager/templates/cutcopy.html',
          width: '30%',
          data: {
            file: vm.selectedFiles,
            files: vm.fileApiResponse,
            iscopy: false
          },
          controller: 'FileManagerCutCopyController',
          controllerAs: 'FileManagerCutCopyViewModel'
        });
        $scope.$on('ngDialog.closed', function (e) {
          getFiles();
          vm.selectedFiles = [];
        });
      } else {
   // toastr.error('فایلی برای انتقال، انتخاب نشده است', 'انجام نشد!');
      }

    }

    function openCopyPopup() {
      if (vm.selectedFile != undefined || vm.selectedFile != null || vm.selectedFiles.length > 0) {
        Dialog.open({
          template: 'dashboard/components/filemanager/templates/cutcopy.html',
          width: '30%',
          data: {
            file: vm.selectedFiles,
            files: vm.fileApiResponse,
            iscopy: true
          },
          controller: 'FileManagerCutCopyController',
          controllerAs: 'FileManagerCutCopyViewModel'
        });
        $scope.$on('ngDialog.closed', function (e) {
          getFiles();
          vm.selectedFiles = [];
        });
      } else {
      //  toastr.error('فایلی برای کپی، انتخاب نشده است', 'انجام نشد!');
      }
    }

    function openRenamePopup() {
      if (vm.folderId) {
        Dialog.open({
          template: 'dashboard/components/filemanager/templates/rename.html',
          width: '30%',
          data: {
            folderId: vm.folderId
          },
          controller: 'FileManagerRenameController',
          controllerAs: 'FileManagerRenameViewModel'
        });
      } else {
      //  toastr.error('فولدری برای تغییر نام انتخاب نشده است', 'انجام نشد!');
      }
    }

    function removeFile() {
      var id = vm.selectedFile.id;
      FilesRest.one(id).remove().then(function () {
        getFiles();
     //   toastr.success('فایل با موفقیت حذف شد', 'انجام شد!');
      });
      vm.selectedFile = null;
    }

    function removeFolder() {
      if (vm.folderId) {
        Dialog.open({
          template: 'dashboard/components/filemanager/templates/removefolder.html',
          width: '30%',
          data: {
            folderId: vm.folderId
          },
          controller: 'FileManagerRemoveFolderController',
          controllerAs: 'FileManagerRemoveFolderViewModel'
        });
      } else {
      //  toastr.error('فولدری برای حذف انتخاب نشده است', 'انجام نشد!');
      }
    }

    function selectAll() {
      if (vm.files.length > 0) {
        vm.files.forEach(function (file) {
          file.selected = !file.selected;
          if (file.selected)
            vm.selectedFiles.push(file);
          else
            vm.selectedFiles.splice(vm.selectedFiles.indexOf(file), 1);
        })
      }
    }

    function close() {
      vm.ngModel = _.filter(vm.files, function (file) {
        return file.selected;
      });
      Dialog.close(null, vm.ngModel);
    }

    vm.listView = function () {
      Event.publish('VIEW_MODE_CHANGED', {
        viewMode: 'list'
      });
    };

    vm.gridView = function () {
      Event.publish('VIEW_MODE_CHANGED', {
        viewMode: 'grid'
      });
    };

    Event.subscribe('OPEN_PREVIEW', function (data) {
      Dialog.open({
        template: 'dashboard/components/filemanager/templates/preview.html',
        width: '30%',
        data: {
          file: data.file
        },
        controller: 'FileManagerPreviewController',
        controllerAs: 'FileManagerPreviewViewModel'
      });
    });
  }



})();