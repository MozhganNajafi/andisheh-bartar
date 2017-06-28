+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('NewsController', ['$stateParams', 'NewsRest', '$sce', NewsController]);

  function NewsController($stateParams, NewsRest, $sce) {

    var vm = this;
    vm.id = $stateParams.id;
    vm.openCommentPanel = openCommentPanel;
    vm.openPanel = false;

    NewsRest.one(vm.id).get().then(function (response) {
      vm.body = $sce.trustAsHtml(response.entity.data.body);
      vm.selectedNews = response.entity.data;
    });

    function openCommentPanel() {
      vm.openPanel = !vm.openPanel;
    }

  }
})();