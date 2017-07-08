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
        
        function updateVisitor() {
            LogRest.post().then(function (){
                getVisitor(); 
            })
        }
        updateVisitor();

    }



})();