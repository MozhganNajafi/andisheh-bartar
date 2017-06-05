+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('AddContentController', ['NewsRest', 'NewsCategoryRest', AddContentController]);

  function AddContentController(NewsRest, NewsCategoryRest) {

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

    function getCategories() {
      NewsCategoryRest.getList().then(function (response) {
        console.log(response);
        vm.categories = response.entity.data;
      });
    }
    getCategories();

    function save() {
      var newArticle = {
        subject: vm.subject,
        body: vm.body,
        categoryId: vm.categoryId,
        keywords: vm.keywords,
        AuthorId: 1,
        Labels: ['label1', 'label2']
      };
      NewsRest.post(newArticle).then(function () {
        alert('خبر با موفقیت ثبت شد.!');
      });

    }


  }
})();