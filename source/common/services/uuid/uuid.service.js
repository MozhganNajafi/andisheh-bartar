(function() {

  'use strict';

  angular
    .module('CommonApplication')
    .service('UUID', UUIDService);

  function UUIDService() {

    var id;

    return {
      generate: generate,
      get: get
    }

    function generate() {
      function guid() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      id = guid() + guid();
      return id;
    }

    function get() {
      return id;
    }

  }

})();