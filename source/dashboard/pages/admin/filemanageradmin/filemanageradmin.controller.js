+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('FileManagerAdminController', ['$scope', FileManagerAdminController]);

  function FileManagerAdminController($scope) {
    debugger;
    var vm = this;
    console.log($scope);
  }
})();