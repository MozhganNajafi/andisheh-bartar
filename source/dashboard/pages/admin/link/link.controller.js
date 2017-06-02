+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('LinkController', ['LinkRest', LinkController]);

  function LinkController(LinkRest) {

    var vm = this;
    vm.link = {};
    vm.updateMode = false;
    vm.update = update;
    vm.save = save;
    vm.cancel = cancel;


    function getLinks() {
      LinkRest.getList({
        pagesize: 0
      }).then(function (response) {
        vm.links = response.data;
      });
    }
    getLinks();

    function update(id) {
      vm.updateMode = true;
      vm.selectedId = id;
      LinkRest.one(id).get().then(function (response) {
        var selectedLink = response.entity.data;
        vm.link.name = selectedLink.name;
        vm.link.url = selectedLink.url;
      });
    }

    function save() {
      debugger;
      if (vm.updateMode) {
        LinkRest.one(vm.selectedId).customPUT(vm.link).then(function () {
          alert('ویرایش با موفقیت انجام شد');
          getLinks();
        });
      } else {
        LinkRest.post(vm.link).then(function () {
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
  }
})();