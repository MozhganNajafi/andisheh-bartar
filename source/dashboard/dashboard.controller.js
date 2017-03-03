+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('DashboardController', [DashboardController]);

  function DashboardController() {
    var vm = this;
    vm.files = {
      fotnawesome: ['/assets/stylesheets/fontawesome.css']
    };

  }



})();