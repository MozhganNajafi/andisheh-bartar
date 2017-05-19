+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('AboutUsController', ['PersonalInfoRest', AboutUsController]);

  function AboutUsController(PersonalInfoRest) {

    var vm = this;
    vm.aboutus = {};
    PersonalInfoRest.getList().then(function (response) {
      debugger;
      vm.aboutus.body = response.data.name;
    })

  }
})();