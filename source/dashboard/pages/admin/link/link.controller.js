+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('LinkController', ['LinkRest','cfpLoadingBar', LinkController]);

  function LinkController(LinkRest,cfpLoadingBar) {

    var vm = this;
    vm.link = {};
    vm.updateMode = false;
    vm.update = update;
    vm.save = save;
    vm.cancel = cancel;
    vm.remove = remove;


    function getLinks() {
      cfpLoadingBar.start();
      LinkRest.getList({
        pagesize: 0
      }).then(function (response) {
        vm.links = response.data;
        cfpLoadingBar.complete();
      });
    }
    getLinks();

    function update(id) {
      cfpLoadingBar.start();
      vm.updateMode = true;
      vm.selectedId = id;
      LinkRest.one(id).get().then(function (response) {
        cfpLoadingBar.complete();
        var selectedLink = response.entity.data;
        vm.link.name = selectedLink.name;
        vm.link.url = selectedLink.url;
      });
    }

    function save() {
      cfpLoadingBar.start();
      if (vm.updateMode) {
        LinkRest.one(vm.selectedId).customPUT(vm.link).then(function () {
          cfpLoadingBar.complete();
          alert('ویرایش با موفقیت انجام شد');
          getLinks();
        });
      } else {
        LinkRest.post(vm.link).then(function () {
          cfpLoadingBar.complete();
          alert('ثبت با موفقیت انجام شد');
          getLinks();
        });
      }
      vm.link = {};
    }

    function cancel() {
      vm.updateMode = false;
      vm.link = {};
    }

    function remove(id) {
      cfpLoadingBar.start();
      LinkRest.one(id).remove().then(function () {
        cfpLoadingBar.complete();
        alert('حذف با موفقیت انجام شد');
        getLinks();
      })
    }
  }
})();