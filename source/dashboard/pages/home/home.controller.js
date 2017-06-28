+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('HomeController', ['$state', 'NewsRest', '$scope', HomeController]);

  function HomeController($state, NewsRest, $scope) {

    var vm = this;
    vm.redirect = redirect;

    function redirect(newsId) {
      $state.go('dashboard.news', {
        id: newsId
      });
    }

    function getNews() {
      NewsRest.getList().then(function (response) {
        $scope.$parent.news = response.data;
      });

    }
    getNews();


  }
})();