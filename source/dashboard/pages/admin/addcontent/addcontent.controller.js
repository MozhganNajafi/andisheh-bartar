+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('AddContentController', ['NewsRest', 'NewsCategoryRest','cfpLoadingBar', AddContentController]);

  function AddContentController(NewsRest, NewsCategoryRest, cfpLoadingBar) {

    var vm = this;
    vm.save = save;
    vm.tags = [];
    vm.content = {
      subject: '',
      body: '',
      highlight:'',
      categoryId: '',
      keywords: '',
      AuthorId: 1,
      labels: []
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
        'emoticons template paste textcolor colorpicker textpattern imagetools codesample toc lineheight'
      ],
      toolbar1: 'undo redo | insert | fontselect | fontsizeselect | styleselect | lineheightselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
      toolbar2: 'print preview media | forecolor backcolor emoticons | codesample',
      font_formats: 'Arial=arial,helvetica,sans-serif;sans-serif=sans-serif;tahoma=tahoma;Courier New=courier new,courier,monospace;AkrutiKndPadmini=Akpdmi-n',
      fontsize_formats: "8pt 10pt 12pt 14pt 18pt 24pt 36pt",
      lineheight_formats: "8pt 9pt 10pt 11pt 12pt 14pt 16pt 18pt 20pt 22pt 24pt 26pt 36pt",
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
        vm.categories.push({name:"",id:""})
      });
    }
    getCategories();

    function save() {
      if(vm.content.labels[0]){
        vm.content.labels.forEach(function(element) {
        vm.tags.push(element.text)
      }, this);
      }
      
      var newArticle = {
        subject: vm.content.subject,
        body: vm.content.body,
        categoryId: vm.content.categoryId,
        keywords: vm.content.keywords,
        createDate: vm.content.submitDate,
        highlight: vm.content.highlight,
        AuthorId: 1,
        labels: vm.tags
      };
      if (vm.content.subject == '' || vm.content.highlight == ''  || vm.content.body == '') {
        if(vm.content.subject == ''){
          alert('وارد کردن عنوان خبر الزامیست');
        }
        if(vm.content.highlight == ''){
          alert('وارد کردن خلاصه خبر الزامیست');
        }
        if(vm.content.body == ''){
          alert('وارد کردن متن خبر الزامیست');
        }
      } else {
        cfpLoadingBar.start();
        NewsRest.post(newArticle).then(function () {
          cfpLoadingBar.complete()
          alert('خبر با موفقیت ثبت شد.!');
          vm.content = {};
        });
      }

        
      // }
    }


  }
})();