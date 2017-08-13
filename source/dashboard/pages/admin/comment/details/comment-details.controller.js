+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('CommentDetailsController', ['CommentRest','$stateParams',CommentDetailsController]);

  function CommentDetailsController(CommentRest,$stateParams) {

    var vm = this;
    vm.id = $stateParams.id;
    vm.update = update;
    vm.remove = remove;
    angular.element('#admincountcomment').scope();
    function getComments() {
      CommentRest.one('GetRelatedComment').get({
        'NewsId': vm.id
      }).then(function (response) {
        vm.comments = response.entity.data;
      });
    }
    getComments();

    function update(id,confirm) {
      vm.updateMode = true;
      vm.selectedId = id;
      CommentRest.one('Confirm').customPUT({
        "Id": id,
        "IsConfirm": !confirm
      }).then(function (response) {
        alert('ویرایش با موفقیت انجام شد');
        getComments();
        CommentRest.one('GetCountNotConfirm').getList().then(function(response){
          angular.element('#admincountcomment').controller().allCommentConfirm= response.data;
        })
      });
    }
    
    function remove(id) {
      CommentRest.one(id).remove().then(function () {
        alert('حذف با موفقیت انجام شد');
        getComments();
        CommentRest.one('GetCountNotConfirm').getList().then(function(response){
          angular.element('#admincountcomment').controller().allCommentConfirm= response.data;
        })
        
      })
    }
  }
})();