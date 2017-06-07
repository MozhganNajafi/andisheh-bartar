+(function () {

    'use strict';

    angular
        .module('DashboardApplication')
        .controller('ProfileController', ['PersonalInfoRest', ProfileController]);

    function ProfileController(PersonalInfoRest) {

        var vm = this;
        function getPersonalInfo() {
            PersonalInfoRest.getList().then(function (response) {
                vm.introduction = response.data.introduction;
            })
        }

        getPersonalInfo();


    }



})();