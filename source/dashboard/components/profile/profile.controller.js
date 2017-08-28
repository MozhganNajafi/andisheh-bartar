+(function () {

    'use strict';

    angular
        .module('DashboardApplication')
        .controller('ProfileController', ['PersonalInfoRest','FilesRest', ProfileController]);

    function ProfileController(PersonalInfoRest,FilesRest) {

        var vm = this;
        function getPersonalInfo() {
            PersonalInfoRest.getList().then(function (response) {
                vm.introduction = response.data.introduction;
            })
        }
        function setPic(){
            FilesRest.one('GetProfile').getList().then(function (response) {
                vm.pic = response.data.fileName;
            })
        }
        getPersonalInfo();
        setPic();


    }



})();