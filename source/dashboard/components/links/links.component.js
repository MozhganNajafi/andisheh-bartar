+(function () {


    'use strict';

    angular
        .module('DashboardApplication')
        .component('link', {

            templateUrl: 'dashboard/components/link/link.html',
            scope: true,
            controller: 'LinkController',
            controllerAs: 'LinkViewModel',

        })



})();