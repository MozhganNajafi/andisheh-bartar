(function() {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('FileUploaderController', ['$scope', '$q', '$element', 'Upload', 'Event', FileUploaderController]);

  function FileUploaderController($scope, $q, $element, Upload, Event) {
debugger;
    var vm = this;

    var folderId = $scope.$parent.ngDialogData.folderId;
    var fileApiUrl = 'http://localhost:5000/api/file';

    vm.files = [];
    vm.startUploading = startUploading;
    vm.patterns = ['pdf', 'jpg', 'png', 'video', 'audio', 'image','mp3','mp4'];
    vm.uploadIsInProgress = false;

    function startUploading() {
      var newFiles = arguments[2];

      newFiles.forEach(function(file) {
        debugger;
        //for invalid file
        var DetailsFileName = file.name.split(".");
        var fileExtension = DetailsFileName[DetailsFileName.length - 1];
        var indexOf = vm.patterns.indexOf(fileExtension);
        if (indexOf >= 0) {
          vm.files.push(file);
          uploadFile(file);
        } else {
         // toastr.error('فایل انتخابی مجاز نمی باشد', 'انجام نشد!');
        }

      });
    }

    function uploadFile(file) {

      vm.uploadIsInProgress = true;

      file.status = {
        success: false,
        progress: false
      };

      function successHandler(res) {
        file.status.success = true;
        file.status.progress = false;
        vm.uploadIsInProgress = false;
        if (res.data && res.data.messages[0]) {
        //  toastr.error(res.data.messages[0].description, 'انجام نشد!');
        }
      }

      function errorHandler() {
        file.status.success = false;
        file.status.progress = false;
        vm.uploadIsInProgress = false;
      }

      function progressHandler(value) {
        file.status.progress = true;
        var progressPercentage = calculateProgress(value);
        file.progress = progressPercentage;
      }

      function calculateProgress(value) {
        return parseInt(100.0 * value.loaded / value.total);
      }

      function filterFileSize(size) {
        if (isNaN(size))
          size = 0;
        if (size < 1024)
          return size + ' Bytes';
        size /= 1024;
        if (size < 1024)
          return Math.round(size) + ' Kb';
        size /= 1024;
        if (size < 1024)
          return Math.round(size) + ' Mb';
        size /= 1024;
        if (size < 1024)
          return Math.round(size) + ' Gb';
        size /= 1024;
        return Math.round(size) + ' Tb';
      }

      var upload = Upload.upload({
        url: fileApiUrl,
        data: {
          file: file,
          folderId: folderId,
          name: file.name,
          fileSize: filterFileSize(file.size)
        },
        headers: {
          'Content-Type': "multipart/form-data"
        }
      }).then(successHandler, errorHandler, progressHandler);

      // TODO: It does not work for now, need to double check it!
      file.abort = function() {
        upload.abort();
      };

    }

    vm.retry = function(file) {
      uploadFile(file);
    };

    vm.remove = function(file) {
      var index = vm.files.indexOf(file);
      vm.files.splice(index, 1);
    };

    vm.removeInvalidFile = function(file) {
      var index = vm.invalidFiles.indexOf(file);
      vm.invalidFiles.splice(index, 1);
    };

    vm.close = function () {
      $scope.$parent.closeThisDialog();
      Event.publish('SELECTED_SORT_TYPE_CHANGED');
    };
  }

})();