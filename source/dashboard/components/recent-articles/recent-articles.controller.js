+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('RecentArticlesController', ['NewsRest', RecentArticlesController]);

  function RecentArticlesController(NewsRest) {

    var vm = this;
    function getRecenetArticles() {
      NewsRest.getList().then(function (response) {
        vm.articles = response.data;
      });
    }
    getRecenetArticles();
  }



})();