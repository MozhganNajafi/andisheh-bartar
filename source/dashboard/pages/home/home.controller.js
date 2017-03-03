+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('HomeController', ['$timeout','Actions', HomeController]);

  function HomeController($timeout,Actions) {

    var vm = this;
    vm.leads = [];
    vm.redirect = redirect;

    function redirect() {
     
    }

    $timeout(function() {
      Actions.set([
        { type: 'link', href: '', class: 'fa fa-bars' },
        { title: 'انتساب به دیگری', type: 'button', click: vm.save, class: 'success' },
        { title: 'انتساب به خودم', type: 'button', click: vm.reset, class: 'success' },
        { title: 'سرنخ جدید', type: 'link', href:'#/dashboard/addlead' , class: 'primary' }       
      ]);
    });

  }
})();