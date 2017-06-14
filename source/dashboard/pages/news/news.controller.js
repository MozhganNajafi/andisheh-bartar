+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('NewsController', ['$stateParams', 'NewsRest', '$sce', NewsController]);

  function NewsController($stateParams, NewsRest, $sce) {

    var vm = this;
    var id = $stateParams.id;

    NewsRest.one(id).get().then(function (response) {
      vm.body = $sce.trustAsHtml(response.entity.data.body);
      vm.selectedNews = response.entity.data;
    });



  }
})();