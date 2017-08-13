+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('AdminController', ['CommentRest', AdminController]);

  function AdminController(CommentRest) {
    debugger;

    var vm = this;
    CommentRest.one('GetCountNotConfirm').getList().then(function(response){
      vm.allCommentConfirm = response.data;
    })

  }
})();