+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('CommentController', [ 'Restangular','cfpLoadingBar', CommentController ]);

  function CommentController( Restangular, cfpLoadingBar ) {

    var vm = this;

    function getComments() {
      cfpLoadingBar.start();
      Restangular.all('NewsContent').one('GetContentWithComment').getList().then(function (response) {
        cfpLoadingBar.complete();
        vm.comments = response.data;
      });
    }
    getComments();
  }
})();