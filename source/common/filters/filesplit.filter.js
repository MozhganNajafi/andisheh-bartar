(function () {

  'use strict';

  angular
    .module('CommonApplication')
    .filter('splitStr', splitStringFilter);

  function splitStringFilter() {

    return function( input, splitChar, splitIndex ) {
      return input.split(splitChar)[splitIndex];
    };

  }

})();