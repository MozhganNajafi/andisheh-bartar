+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('RecentArticlesController', ['NewsRest','$state', RecentArticlesController]);

  function RecentArticlesController(NewsRest,$state) {

    var vm = this;

    function getRecenetArticles() {
      NewsRest.one('GetRecent').get().then(function (response) {
        vm.articles = response.entity.data;
      });
    }
    getRecenetArticles();

    vm.redirect = redirect;

    function redirect(newsId) {
      $state.go('dashboard.news', {
        id: newsId
      });
    }
  }



})();