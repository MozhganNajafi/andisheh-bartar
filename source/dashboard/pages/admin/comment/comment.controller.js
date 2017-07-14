+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('CommentController', ['CommentRest', 'NewsRest', CommentController]);

  function CommentController(CommentRest, NewsRest) {

    var vm = this;
    vm.getComments = getComments;

    function getCategories() {
      NewsRest.getList().then(function (response) {

      })
    }
    getCategories();

    function getComments() {
      CommentRest.one(vm.newsId).get().then(function (response) {
        vm.comments = response.data;
      })
    }

  }
})();