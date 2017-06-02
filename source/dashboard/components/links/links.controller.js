+(function () {

    'use strict';

    angular
        .module('DashboardApplication')
        .controller('LinkController', ['LinkRest', '$state', LinkController]);

    function LinkController(LinkRest, $state) {

        var vm = this;
        vm.seeMore = seeMore;

        function getLinks() {
            LinkRest.getList({
                pagesize: 10
            }).then(function (response) {
                vm.links = response.data;
            })
        }
        getLinks();

        function seeMore() {
            $state.go('dashboard.links');
        }
    }



})();