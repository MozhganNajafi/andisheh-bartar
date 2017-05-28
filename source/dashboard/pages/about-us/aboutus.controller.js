+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('AboutUsController', ['PersonalInfoRest','$sce', AboutUsController]);

  function AboutUsController(PersonalInfoRest,$sce) {

    var vm = this;
    vm.aboutus = {};
    PersonalInfoRest.getList().then(function (response) {
      vm.aboutus.body = $sce.trustAsHtml(response.data.cv);
    });

  }
})();