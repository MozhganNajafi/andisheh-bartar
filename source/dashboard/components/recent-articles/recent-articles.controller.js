+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('RecentArticlesController', ['NewsRest', RecentArticlesController]);

  function RecentArticlesController(NewsRest) {

    var vm = this;
    function getRecenetArticles() {
      NewsRest.one('GetRecent').get().then(function (response) {
        console.log(response);
        vm.articles = response.entity.data;
      });
    }
    getRecenetArticles();
  }



})();