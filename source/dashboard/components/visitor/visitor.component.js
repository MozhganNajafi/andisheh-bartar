+(function () {


    'use strict';

    angular
        .module('DashboardApplication')
        .component('visitor', {

            templateUrl: 'dashboard/components/visitor/visitor.html',
            scope: true,
            controller: 'VisitorController',
            controllerAs: 'VisitorViewModel',

        })



})();