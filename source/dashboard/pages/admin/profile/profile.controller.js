+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('ProfileController', ['PersonalInfoRest', ProfileController]);

  function ProfileController(PersonalInfoRest) {

    var vm = this;
    vm.aboutus = {};
    vm.save = save;
    vm.cancel = cancel;

    vm.tinymceOptions = {
      directionality: 'rtl',
      selector: 'textarea',
      height: 500,
      theme: 'modern',
      plugins: [
        'advlist autolink lists link image charmap print preview hr anchor pagebreak',
        'searchreplace wordcount visualblocks visualchars code fullscreen',
        'insertdatetime media nonbreaking save table contextmenu directionality',
        'emoticons template paste textcolor colorpicker textpattern imagetools codesample toc'
      ],
      toolbar1: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
      toolbar2: 'print preview media | forecolor backcolor emoticons | codesample',
      image_advtab: true,
      templates: [{
        title: 'Test template 1',
        content: 'Test 1'
      },
      {
        title: 'Test template 2',
        content: 'Test 2'
      }
      ]
    };

    function getAboutUs() {
      PersonalInfoRest.getList().then(function (response) {
        vm.aboutus = response.data;
      })
    }
    getAboutUs();

    function save() {
      PersonalInfoRest.one().customPUT(vm.aboutus,undefined,undefined,undefined).then(function (response) {
        alert('ویرایش با موفقیت انجام شد');
      })
    }

    function cancel() {
      vm.aboutus = '';
    }
  }
})();