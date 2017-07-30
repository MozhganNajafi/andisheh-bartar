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
      toolbar1: 'undo redo | insert | fontselect | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
      toolbar2: 'print preview media | forecolor backcolor emoticons | codesample',
      font_formats: 'Arial=arial,helvetica,sans-serif;sans-serif=sans-serif;tahoma=tahoma;Courier New=courier new,courier,monospace;AkrutiKndPadmini=Akpdmi-n',
      image_title: true, 
      // content_style:,
      automatic_uploads: true,
      images_upload_url: '',
      file_picker_types: 'image', 
      file_picker_callback: function(cb, value, meta) {
      var input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');

    input.onchange = function() {
      var file = this.files[0];
      
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        var id = 'blobid' + (new Date()).getTime();
        var blobCache =  tinymce.activeEditor.editorUpload.blobCache;
        var base64 = reader.result.split(',')[1];
        var blobInfo = blobCache.create(id, file, base64);
        blobCache.add(blobInfo);
        cb(blobInfo.blobUri(), { title: file.name });
      };
    };
    
    input.click();
  }
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
        submitDate: vm.content.submitDate,
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