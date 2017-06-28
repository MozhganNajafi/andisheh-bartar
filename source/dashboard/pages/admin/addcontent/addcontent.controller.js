+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('AddContentController', ['NewsRest', 'NewsCategoryRest', AddContentController]);

  function AddContentController(NewsRest, NewsCategoryRest) {

    var vm = this;
    vm.save = save;
    vm.content = {
      subject: '',
      body: '',
      categoryId: '',
      keywords: '',
      AuthorId: 1,
      Labels: []
    };

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
        vm.categories = response.data;
      });
    }
    getCategories();

    function save() {
      var newArticle = {
        subject: vm.content.subject,
        body: vm.content.body,
        categoryId: vm.content.categoryId,
        keywords: vm.content.keywords,
        date: vm.content.date,
        AuthorId: 1,
        Labels: ['label1', 'label2']
      };
      if (vm.content.categoryId === '') {
        alert('وارد کردن گروه خبر الزامیست');
      } else {
        NewsRest.post(newArticle).then(function () {
          alert('خبر با موفقیت ثبت شد.!');
          vm.content = {};
        });
      }
    }


  }
})();