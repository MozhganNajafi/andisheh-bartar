+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('TopbarController', ['Event', 'Actions', TopbarController]);

  function TopbarController(Event, Actions) {
    var vm = this;
    Event.subscribe('ACTIONS_UPDATED', function () {
      vm.actions = Actions.get();
    });

  
  }

})();