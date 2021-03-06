+(function () {


  angular
    .module('CommonApplication')
    .controller('CommentController', ['$scope', 'CommentRest', CommentController]);

  function CommentController($scope, CommentRest) {
    var vm = this;
    vm.comment = {};
    vm.comment.context = vm.comment.name = vm.comment.email = '';
    vm.comment.isPrivate = false;
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
        if(vm.comment.email == '' || vm.comment.context == '' || vm.comment.name == '' ){
          alert('لطفا همه موارد را وارد کنید');
        }
        // else if(!vm.comment.postEmail.$valid){
        // alert('فرمت ایمیل صحیح نمیباشد');
        // }
        // else if(vm.comment.postEmail.$valid && vm.comment.postEmail !=="" || vm.comment.postEmail !== undefined){
          else{
            CommentRest.post(newComment).then(function () {
          alert('نظر شما با موفقیت ثبت شد.!');
          vm.comment = {};
        });
          }
          
      // }
    }

    function getComments() {
      CommentRest.getList().then(function (response) {
        vm.comments = response.data;
      });
    }
  }
})();