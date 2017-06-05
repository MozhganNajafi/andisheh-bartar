+(function () {

  'use strict';
  angular
    .module('DashboardApplication')
    .service('NewsCategoryRest', ['Restangular', NewsCategoryRestService ]);

  function NewsCategoryRestService(Restangular) {
    return Restangular.service('NewsCategory');
  }

})();