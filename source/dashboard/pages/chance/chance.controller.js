+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('ChanceController', ['$scope', 'Actions', ChanceController]);

  function ChanceController($scope, Actions) {

    var vm = this;
    $scope.$parent.DashboardViewModel.pageTitle = '| فرصت های من';

    Actions.set([{
      title: 'تبدیل به مشتری',
      type: 'button',
      click: vm.addContact
    }, {
      title: 'فرصت جدید',
      type: 'button',
      click: vm.addChance
    }]);
  }

})();