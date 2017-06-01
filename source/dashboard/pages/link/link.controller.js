+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('LinkController', ['$stateParams', 'LinkRest', LinkController]);

  function LinkController($stateParams, LinkRest) {

    var vm = this;

    vm.seeMore = seeMore;


    function seeMore(){
      alert ('hi');
      LinkRest.getlist().then(function(){
        vm.links=response.entity.data;
      })
    }


  }
})();