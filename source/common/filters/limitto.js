+(function(){

    angular
        .module('CommonApplication')
        .filter('limit', function (str) {
            return str.length>10 ? str.substr(0,10-1)+'...' : str.toString();
            
    });




})();