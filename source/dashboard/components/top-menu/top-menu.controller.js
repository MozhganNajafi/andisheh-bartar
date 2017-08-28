+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('TopMenuController', ['SearchRest', '$scope', TopMenuController]);

  function TopMenuController(SearchRest, $scope) {

    var vm = this;

    vm.search = search;

    function search(keyword) {
      debugger;
      var param = {
        'createDate': null,
        'keyword': keyword
      };
      SearchRest.getList(param).then(function (response) {
        $scope.$parent.response = response;
      });
    }

    $scope.$on('$routeChangeStart', function (next, current) {
      search('undefined');
    });

  }



})();