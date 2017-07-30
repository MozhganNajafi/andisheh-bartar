(function() {

  'use strict';

  angular
    .module('DashboardApplication')
    .service('TreeviewHelper', TreeviewHelperService);

  function TreeviewHelperService() {

    return {
      parseJSON: parseJSON
    };

    function parseJSON( object ) {
      var source = [];
      var children = [];
      // build hierarchical source.
      for (var i = 0; i < object.length; i++) {
        var item = object[i];
        var label = item["name"];
        var title = item["title"] || "پوشه بدون نام";
        var parentid = item["parentId"];
        var id = item["id"];
        var type = item["type"];

        if (children[parentid]) {
          var item = {
            parentid: parentid,
            label: label,
            title: title,
            id: id,
            type: type
          };
          if (!children[parentid].children) {
            children[parentid].children = [];
          }
          children[parentid].children[children[parentid].children.length] = item;
          children[id] = item;
        } else {
          children[id] = {
            parentid: parentid,
            label: label,
            title: title,
            id: id,
            type: type
          };
          source[id] = children[id];
        }
      }
      return source;
    }

  }

})();