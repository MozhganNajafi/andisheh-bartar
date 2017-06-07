+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('LinkController', ['$stateParams', 'LinkRest', LinkController]);

  function LinkController($stateParams, LinkRest) {

    var vm = this;


    function getLinks() {
      LinkRest.getList({
        pagesize: 0
      }).then(function (response) {
        vm.links = response.data;
      })
    };
    getLinks();


  }
})();