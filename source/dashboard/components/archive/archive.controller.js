+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('ArchiveController', ['ArchiveRest','$scope', ArchiveController]);

  function ArchiveController(ArchiveRest,$scope) {

    var vm = this;
    vm.search = search;

    function getArchive() {
      ArchiveRest.one('GetArchive').getList().then(function (response) {
        vm.archive = response.data;

      });
    }
    getArchive();

    function search(keyword) {
      var param = {
        'createDate': keyword,
        'body': null,
        'subject': null,
        'label': null
      };
      ArchiveRest.getList(param).then(function (response) {     
        $scope.$parent.news = response.data;
      });
    }
  }



})();