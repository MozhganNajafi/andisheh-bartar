+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('HomeController', ['$state', 'NewsRest', '$scope', HomeController]);

  function HomeController($state, NewsRest, $scope) {

    var vm = this;
    vm.redirect = redirect;
    vm.getPageIndex = getPageIndex;
    function redirect(newsId) {
      $state.go('dashboard.news', {
        id: newsId
      });
    }

    function getNews() {
      NewsRest.getList({
        pageIndex:vm.pageIndex,
          pageSize:vm.pageSize
      }).then(function (response) {
        $scope.$parent.news = response.data;
        vm.total = response.searchRequest.total.result;
      });
    }


    $scope.$watch('response', function (response) {
      $scope.$parent.news = response.data;
      vm.total = response.searchRequest.total.result;
        });
    $scope.pageIndex = vm.pageIndex;
    function getPageIndex(){
        NewsRest.getList({
          pageIndex:vm.pageIndex,
          pageSize:vm.pageSize
        }).then(function (response) {
          $scope.$parent.news = response.data;
        });
    }

    vm.pageSize = 5;
    getNews();


  }
})();