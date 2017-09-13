+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('VisitorController', ['LogRest', VisitorController]);

  function VisitorController(LogRest) {

    var vm = this;
    vm.data = [];
    vm.labels = [];
    vm.chart = false;
    function getVisitor(){
      LogRest.getList().then(function (response) {
        vm.visitors = response.data;
        console.log(vm.visitors);
      })
    }
    getVisitor();
    function chartData(){
      LogRest.one('GetLastTen').getList().then(function (response) {
        vm.log = response.data;
        vm.log.forEach(function(element) {
          vm.data.push(element.value);
          vm.labels.push(element.key);
          vm.chart = true;
          
        }, this);
    //      vm.options = {
    //   data: vm.data,
    //   dimensions: {
    //     key: {
    //       axis: 'x'
    //     },
    //     value: {
    //       axis: 'y'
    //     }
    //   }
    // };
    
    // // optional (direct access to c3js API http://c3js.org/reference.html#api) 
    // vm.instance = null;
  //   vm.labels = ["January", "February", "March", "April", "May", "June", "July"];
  // vm.series = ['Series A', 'Series B'];
  // vm.data = [
  //   [65, 59, 80, 81, 56, 55, 40]
  // ];
  vm.onClick = function (points, evt) {
    console.log(points, evt);
  };
      })
    }
    chartData();


  }
})();