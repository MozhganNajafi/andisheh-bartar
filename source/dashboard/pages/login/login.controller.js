+(function () {

  'use strict';

  angular
        .module('DashboardApplication')
        .controller('LoginController', ['$state',LoginController]);

  function LoginController($state) {

    var vm = this;
    vm.login = login;
    function login(email,password){
     if(email=="moghadasi.tkd@gmail.com" && password=="moghadasi.tkd@gmail.com"){
        $state.go('admin.index');
     }
     else{
       alert("ایمیل یا پسورد صحیح نمیباشد")
     }
    }
  }

})();