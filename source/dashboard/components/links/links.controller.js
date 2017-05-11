+(function () {

    'use strict';

    angular
        .module('DashboardApplication')
        .controller('LinkController', ['LinkRest', LinkController]);

    function LinkController(LinkRest) {

        var vm = this;

        function getLinks() {
            LinkRest.getList().then(function (response) {
                vm.links = response.data;
            })
        }
        getLinks();

    }



})();