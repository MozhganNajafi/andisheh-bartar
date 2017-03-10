+(function () {


    'use strict';

    angular
        .module('DashboardApplication')
        .component('profile', {

            templateUrl: 'dashboard/components/profile/profile.html',
            scope: true,
            controller: 'ProfileController',
            controllerAs: 'ProfileViewModel',

        })



})();