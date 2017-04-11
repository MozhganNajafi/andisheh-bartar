+(function () {


    'use strict';

    angular
        .module('DashboardApplication')
        .component('link', {

            templateUrl: 'dashboard/components/links/links.html',
            scope: true,
            controller: 'LinkController',
            controllerAs: 'LinkViewModel',

        })



})();