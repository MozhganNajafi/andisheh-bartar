+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('EditContentController', ['NewsRest', EditContentController]);

  function EditContentController(NewsRest) {

    var vm = this;
    vm.selectedItem = {};
    vm.updateMode = false;
    vm.remove = remove;
    vm.update = update;
    vm.save = save;
    vm.cancel = cancel;

    vm.categories = [{
        id: 0,
        categoryName: 'خبری'
      },
      {
        id: 1,
        categoryName: 'آموزشی'
      },
      {
        id: 2,
        categoryName: 'سرگرمی'
      }
    ];


    function getNews() {
      NewsRest.getList().then(function (response) {
        vm.news = response.data;
      });
    }
    getNews();

    function update(id) {
      vm.updateMode = true;
      vm.selectedId = id;
      NewsRest.one(vm.selectedId).get().then(function (response) {
        var news = response.entity.data;
        vm.selectedItem.subject = news.subject;
        vm.selectedItem.categoryId = news.categoryId;
        vm.selectedItem.keywords = news.keywords;
        vm.selectedItem.body = news.body;
      });
    }

    function remove(id) {


    }

    function save() {
      debugger;
      NewsRest.one(vm.selectedId).put(vm.selectedItem).then(function (response) {
        console.log(response);
        if (response.succedeed) {
          alert('ویرایش با موفقیت انجام شد');
          vm.updateMode = false;
          vm.selectedId = null;
        }
      });
    }

    function cancel() {
      vm.updateMode = false;
      vm.selectedId = null;
    }



  }
})();