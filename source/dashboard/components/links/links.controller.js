+(function () {

    'use strict';

    angular
        .module('DashboardApplication')
        .controller('LinkController', [LinkController]);

    function LinkController() {

        var vm = this;

        vm.links = [{
            'href': 'www.google.com',
            'title': 'موسسه راهبران رستاک'
        },
        {
            'href': 'www.time.ir',
            'title': 'علی فروزش'
        }];

    }



})();