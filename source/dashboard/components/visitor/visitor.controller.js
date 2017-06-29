+(function () {

    'use strict';

    angular
        .module('DashboardApplication')
        .controller('VisitorController', ['PersonalInfoRest','$timeout','LogRest', VisitorController]);

    function VisitorController(PersonalInfoRest, $timeout, LogRest) {

        var vm = this;
        function getVisitor(){
            LogRest.getList().then(function (response) {
                vm.visitors = response.data;
                console.log(vm.visitors);
            })
        }
        getVisitor();
        $timeout(function updateVisitor() {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var obj = JSON.parse(xhttp.response);
                    // LogRest.post({'IpAddress': obj.ip}).then(function (){
                    //    getVisitor(); 
                    // })
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