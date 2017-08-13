(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .service('TreeviewOptions', [TreeviewOptionsService]);

  function TreeviewOptionsService() {
    var options = {
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
    var defaultOptions = {
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
    function get() {
      return options;
    }

    function reset() {
      angular.copy(defaultOptions, options);
    }

    function set(params) {
      if (params) {
        for (var attr in params) {
          options[attr] = params[attr];
        }
      }
    }


    return {
      get: get,
      set: set,
      reset: reset
    };

  }

})();