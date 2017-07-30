+(function() {

  'use strict';

  angular
    .module('CommonApplication')
    .service('Range', RangeService);
  
  function RangeService() {

    return {
      range: range
    }

    function range( min, max, step ) {
      step = step || 1;
      var input = [];
      for (var i = min; i <= max; i += step) {
          input.push(i);
      }
      return input;
    }

  }

})();