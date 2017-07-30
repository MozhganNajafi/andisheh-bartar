(function() {

  'use strict';

  angular
    .module('DashboardApplication')
    .service('TreeviewOptions', [ TreeviewOptionsService ]);

  function TreeviewOptionsService() {

    function get() {
      return {
        nodeChildren: 'children',
        dirSelectable: true,
        templateUrl: 'treecontrol.html',
        injectClasses: {
          ul: 'treeview',
          li: 'treeview-node',
          liSelected: 'treeview-node-selected',
          iExpanded: 'treeview-node-expanded',
          iCollapsed: 'treeview-node-collapsed',
          iLeaf: 'treeview-node-iLeaf',
          label: 'treeview-node-label',
          labelSelected: 'treeview-nodel-labelSelected'
        }
      };
    }

    return {
      get: get
    };

  }


})();