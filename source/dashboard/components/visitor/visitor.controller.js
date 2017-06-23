+(function () {

    'use strict';

    angular
        .module('DashboardApplication')
        .controller('VisitorController', ['PersonalInfoRest','$timeout', VisitorController]);

    function VisitorController(PersonalInfoRest, $timeout) {

        var vm = this;
        $timeout(function updateVisitor() {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var obj = JSON.parse(xhttp.response);
                    console.log(obj);
                    console.log(obj.ip);
                }
            };
            xhttp.open("GET", "//freegeoip.net/json/?callback=", true);
            xhttp.send();
        }, 10000);
        function getPersonalInfo() {
            PersonalInfoRest.getList().then(function (response) {
                vm.introduction = response.data.introduction;
            })
        }

        getPersonalInfo();


    }



})();