+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('EditContentController', [EditContentController]);

  function EditContentController() {

    var vm = this;
    vm.edit = edit;
    vm.remove = remove;

    vm.news = [{
        'id': 1,
        'title': 'news1',
        'datetime': '1396/06/03'
      },
      {
        'id': 2,
        'title': 'news2',
        'datetime': '1396/08/08'
      }
    ];

    function edit(id) {

      console.log(id);
    }

    function remove() {


    }



  }
})();