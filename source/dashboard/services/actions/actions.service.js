(function() {

  'use strict';

  angular
    .module('DashboardApplication')
    .service('Actions', [ 'Event', ActionsService ]);

  function ActionsService( Event ) {
    
    var actions = [];

    // { title: '', type: 'link/button', href: '', click:'' }

    return {
      get: get,
      set: set,
      clean: clean
    };

    function get() {
      return actions;
    }

    function clean() {
      actions = [];
      Event.publish('ACTIONS_UPDATED');
    }

    function set( newActions ) {
      actions = newActions;
      Event.publish('ACTIONS_UPDATED');
    }
  }

})();