(function() {

  'use strict';

  angular
    .module('CommonApplication')
    .service('ObjectHelper', ObjectHelperService);

  function ObjectHelperService() {

    return {
      isEmpty: isEmpty
    };

    function isEmpty( obj ) {
      for(var key in obj) {
        if (obj.hasOwnProperty(key)) {
          return false;
        }
      }
      return true;
    }

  }

})();