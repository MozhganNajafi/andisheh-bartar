+(function () {

    'use strict';

    angular
        .module('DashboardApplication')
        .controller('FileManagerController',[ '$scope', 'TreeviewOptions', 'TreeviewHelper','ArrayHelper', 'FilesRest', 'FoldersRest', 'Event', 'Dialog', FileManagerController]);

    function FileManagerController($scope, TreeviewOptions, TreeviewHelper, ArrayHelper, FilesRest, FoldersRest, Event, Dialog) {
      var vm = this;
      var selectedMultiFile = [];
      TreeviewOptions.reset();
      TreeviewOptions.set(vm.options);
      vm.treeOptions = TreeviewOptions.get();
      vm.setProfile = setProfile;
        // $scope.folders = [];
      // vm.selectNode = function( node ) {
      //   vm.selectedNode = node;
      // };
      vm.close = close;
      vm.files = [];
      vm.selectedFile;
      vm.selectedFiles = [];
      vm.selectedNode;
      vm.openNewFolderPopup = openNewFolderPopup;
      vm.openFileUploaderPopup = openFileUploaderPopup;
      vm.openCutPopup = openCutPopup;
      vm.openCopyPopup = openCopyPopup;
      vm.openRenamePopup = openRenamePopup;
      vm.removeFile = removeFile;
      vm.removeFolder = removeFolder;
      // vm.selectAll = selectAll;
      vm.openRenameFilePopup = openRenameFilePopup;

    function getFoldersList() {
      FoldersRest.getList().then(function (response) {
        vm.folders = response.data;
        $scope.$watch('folders', function () {
          $scope.folders = vm.folders;
          var nodes = TreeviewHelper.parseJSON($scope.folders);
          vm.ngModel = ArrayHelper.clean(nodes, null);
           if (vm.nodeRefForSelect === undefined && vm.selectedNode === undefined) {
          vm.nodeRefForSelect = vm.ngModel[0];
          // for external use cases. as result of treeview node selection for other
          // components
          vm.selectedNode = vm.ngModel[0];
          $scope.selectedNode = vm.selectedNode;
        } else if (vm.nodeRefForSelect === undefined && vm.selectedNode !== undefined) {
          vm.nodeRefForSelect = vm.ngModel[vm.ngModel.length - 1];
          vm.selectedNode = vm.ngModel[vm.ngModel.length - 1];
          $scope.selectedNode = vm.selectedNode;
        } else { //for selected new folder
          vm.nodeRefForSelect = JSON.parse(JSON.stringify(vm.nodeRefForSelect));
          vm.selectedNode = JSON.parse(JSON.stringify(vm.selectedNode));
          $scope.selectedNode = vm.selectedNode;
        }
        // for internal use cases of treeview
        //   vm.nodeRefForSelect = vm.ngModel[0];
        // // for external use cases. as result of treeview node selection for other
        // // components
        //   vm.selectedNode = vm.ngModel[0];
       
      });
      });
    }

    vm.selectNode = function (node) {
      if (vm.selectedNode && vm.selectedNode.id && vm.selectedNode.id == node.id)
        vm.selectedNode = null;
      else
        vm.selectedNode = node;
        $scope.selectedNode = vm.selectedNode;
      // if (node) {
      //   vm.folderId = node.id;
      //   vm.folderName = node.Name;
      //   vm.selectedNode = node;
      //   getFiles();
      // } else {
      //   vm.folderId = null;
      //   vm.folderName = " ";
      //   getFiles();
      // }
    };
    getFoldersList();

    Event.subscribe('FOLDERS_TREEVIEW_UPDATED', function () { 
      getFoldersList();
      // TODO: It should be in another place
      if (Dialog) {
        Dialog.close();
      }
    });

    // if (vm.initialFolderId) {
    //   vm.folderId = parseInt(vm.initialFolderId);
    //   getFiles();
    // }
    $scope.selectedNode = vm.selectedNode;
    $scope.$watch('selectedNode', function (node) {
      
      console.log($scope.selectedNode);
      
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

    function openRenameFilePopup() {
      vm.fileId = vm.selectedFile.id;
      if (vm.fileId) {
        FilesRest.one(vm.fileId).get().then(function (response) {
          vm.response = response;
          vm.file = response.entity.data;
          vm.fileName = vm.file.name.split(".")[0];

          Dialog.open({
            template: 'dashboard/components/filemanager/templates/renameFile.html',
            width: '30%',
            data: {
              fileId: vm.fileId,
              file: vm.file,
              response: vm.response,
              fileName: vm.fileName,
              fileApi: vm.fileApiResponse,
            },
            controller: 'FileManagerRenameFileController',
            controllerAs: 'FileManagerRenameFileViewModel'
          });
          $scope.$on('ngDialog.closed', function (e) {
            getFiles();
          });
        });
      } else {
        alert('فایلی برای تغییر نام انتخاب نشده است', 'انجام نشد!');
      }
    }

    function setProfile(){
      var id = vm.selectedFile.id;
      FilesRest.one('SetProfile').customPUT(null, null,{'id':id}).then(function (response) {
        if (response.succeeded) {
          alert('تصویر پروفایل با موفقیت انتخاب شد');
          vm.updateMode = false;
          vm.selectedId = null;
        }
      });
    }

    function removeFile() {
      var id = vm.selectedFile.id;
      FilesRest.one(id).remove().then(function () {
        getFiles();
       alert('فایل با موفقیت حذف شد', 'انجام شد!');
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
       alert('فولدری برای حذف انتخاب نشده است', 'انجام نشد!');
      }
    }

    // function selectAll() {
    //   if (vm.files.length > 0) {
    //     vm.files.forEach(function (file) {
    //       file.selected = !file.selected;
    //       if (file.selected)
    //         vm.selectedFiles.push(file);
    //       else
    //         vm.selectedFiles.splice(vm.selectedFiles.indexOf(file), 1);
    //     })
    //   }
    // }

    vm.selectItem = function (file) {
          
          if(vm.selectedFile ){
            if(vm.selectedFile == file){
              vm.selectedFile.selected = !vm.selectedFile.selected;
              vm.selectedFile = []; 
            } 
            else{
              vm.selectedFile.selected = !vm.selectedFile.selected;
              file.selected = !file.selected
              vm.selectedFile = []; 
              vm.selectedFile = file;
            }
          }
          else{
            file.selected = !file.selected;
          }
          
          if (file.selected) {
            vm.selectedFile = file;
          } else {
            vm.selectedFile = [];
            vm.selectedFiles = [];
          }
        };

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