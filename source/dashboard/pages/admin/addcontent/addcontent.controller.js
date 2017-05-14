+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('AddContentController', ['NewsRest', AddContentController]);

  function AddContentController(NewsRest) {

    var vm = this;
    vm.save = save;

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

    vm.categories=[{
      id:0,
      categoryName: 'خبری'
    },
    {
      id:1,
      categoryName: 'آموزشی'
    },
    {
      id:2,
      categoryName: 'سرگرمی'
    }];

    function save() {
      debugger;
      var newArticle = {
        subject: vm.subject,
        body: vm.body,
        categoryId: vm.categoryId,
        keywords: vm.keywords
      };
      NewsRest.post(newArticle).then(function(){
        alert('done!');
      });

    }


  }
})();