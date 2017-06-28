+(function () {


  angular
        .module('CommonApplication')
        .controller('CommentController', [ '$scope', 'CommentRest', CommentController ]);

  function CommentController($scope, CommentRest) {
    var vm = this;
    vm.add = add;
    vm.getComment = getComments;

    function add() {
      debugger;
      var newComment = {
        name: vm.comment.name,
        email: vm.comment.email,
        isprivate: vm.comment.isPrivate,
        context: vm.comment.context,
        newsId: $scope.newsId
      };
      if (vm.comment.context === '') {
        alert('نظر خود را وارد نمایید');
      } else {
        CommentRest.post(newComment).then(function () {
          alert('نظر شما با موفقیت ثبت شد.!');
          vm.comment = {};
        });
      }
    }

    function getComments() {
      CommentRest.getList().then(function (response) {
        vm.comments = response.data;
      });
    }
  }
})();