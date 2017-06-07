+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('NewsController', ['$stateParams', 'NewsRest', NewsController]);

  function NewsController($stateParams, NewsRest) {

    var vm = this;
    var id = $stateParams.id;

    NewsRest.one(id).get().then(function (response) {
      vm.totalNews = response.entity.data.body;
    });



  }
})();