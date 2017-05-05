+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('HomeController', ['$state', 'NewsRest', HomeController]);

  function HomeController($state, NewsRest) {

    var vm = this;
    vm.redirect = redirect;

    function redirect(newsId) {
      $state.go('dashboard.news', { id: newsId });
    }

    function getNews() {
      NewsRest.getList().then(function (response) {
        console.log(response);
      })

    }
    getNews();


  }
})();