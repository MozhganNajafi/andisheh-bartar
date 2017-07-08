+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('CommentController', [ 'Restangular', CommentController ]);

  function CommentController( Restangular ) {

    var vm = this;

    function getComments() {
      Restangular.all('NewsContent').one('GetContentWithComment').getList().then(function (response) {
        vm.comments = response.data;
      });
    }
    getComments();
  }
})();