+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('CommentDetailsController', ['CommentRest','$stateParams','cfpLoadingBar',CommentDetailsController]);

  function CommentDetailsController(CommentRest,$stateParams,cfpLoadingBar) {

    var vm = this;
    vm.id = $stateParams.id;
    vm.update = update;
    vm.remove = remove;
    vm.enableReply = enableReply;
    vm.enableReplyVal = false;
    vm.save = save;
    vm.cancel = cancel;
    angular.element('#admincountcomment').scope();
    function getComments() {
      cfpLoadingBar.start();
      CommentRest.one('GetRelatedComment').get({
        'NewsId': vm.id
      }).then(function (response) {
        cfpLoadingBar.complete();
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
  function enableReply(id,newsId) {
    vm.enableReplyVal = true;
    vm.itemId = id;
    vm.itemNewsId = newsId
  }
  function save(){
    // customPOST([elem, path, params, headers])
       CommentRest.one('Admin').customPOST({
      "NewsId": vm.itemNewsId,
      "ParentId":vm.itemId, 
      "Context":vm.selectedItem.reply
    }).then(function(response){
        alert('پاسخ شما ذخیره شد'); 
        vm.enableReplyVal = false; 
        vm.selectedItem.reply='';
        getComments();
      });
  }
  function cancel(){
    vm.enableReplyVal = false;
  }
  }
})();