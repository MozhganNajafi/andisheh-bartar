+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('EditContentController', ['NewsRest', 'NewsCategoryRest','cfpLoadingBar', EditContentController]);

  function EditContentController(NewsRest, NewsCategoryRest,cfpLoadingBar) {

    var vm = this;
    vm.selectedItem = {};
    vm.updateMode = false;
    vm.remove = remove;
    vm.update = update;
    vm.save = save;
    vm.cancel = cancel;
    vm.labels = [];

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
      image_title: true, 
      font_formats: 'Arial=arial,helvetica,sans-serif;sans-serif=sans-serif;tahoma=tahoma;Courier New=courier new,courier,monospace;AkrutiKndPadmini=Akpdmi-n',
      fontsize_formats: "8pt 10pt 12pt 14pt 18pt 24pt 36pt",
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

        // call the callback and populate the Title field with the file name
        cb(blobInfo.blobUri(), { title: file.name });
      };
    };
    
    input.click();
  }
    };

    function getCategories() {
      NewsCategoryRest.getList().then(function (response) {
        vm.categories = response.data;
        vm.categories.push({name:"", id:""});
      });
    }
    getCategories();


    function getNews() {
      cfpLoadingBar.start();
      NewsRest.getList({pageSize:0}).then(function (response) {
        vm.news = response.data;
        cfpLoadingBar.complete();
      });
    }
    getNews();

    function update(id) {
      cfpLoadingBar.start();
      vm.updateMode = true;
      vm.selectedId = id;
      vm.tags = [];
      NewsRest.one(vm.selectedId).get().then(function (response) {
        cfpLoadingBar.complete();
        var news = response.entity.data;
        if(news.labels.length != 0){
          news.labels.forEach(function(element) {
          vm.tags.push(element.name);
        }, this);
        }
        
        vm.selectedItem.subject = news.subject;
        vm.selectedItem.body = news.body;
        vm.selectedItem.categoryId = news.categoryId;
        vm.selectedItem.keywords = news.keywords;
        vm.selectedItem.labels = vm.tags;
        vm.selectedItem.submitDate  = news.createDate;
        vm.selectedItem.highlight  = news.highlight

      });
    }

    function remove(id) {
      cfpLoadingBar.start();
      NewsRest.one(id).remove().then(function (response) {
        if (response.succeeded) {
          cfpLoadingBar.complete();
          alert('حذف با موفقیت انجام شد');
          getNews();
        }
      })

    }

    function save() {
      if (vm.selectedItem.subject == '' || vm.selectedItem.highlight == ''  || vm.selectedItem.body == '') {
        if(vm.selectedItem.subject == ''){
          alert('وارد کردن عنوان خبر الزامیست');
        }
        if(vm.selectedItem.highlight == '' || vm.selectedItem.highlight == null ){
          alert('وارد کردن خلاصه خبر الزامیست');
        }
        if(vm.selectedItem.body == ''){
          alert('وارد کردن متن خبر الزامیست');
        }
      } else {
      debugger;
      vm.selectedItem.authorId = 1;
      if(vm.selectedItem.labels[0]){
      vm.selectedItem.labels.forEach(function(element) {
        vm.labels.push(element.text)
      }, this);
      }
      vm.selectedItem.labels = vm.labels;
      vm.selectedItem.createDate = vm.selectedItem.submitDate;
      cfpLoadingBar.start();
      NewsRest.one(vm.selectedId).customPUT(vm.selectedItem).then(function (response) {
        if (response.succeeded) {
          cfpLoadingBar.complete();
          alert('ویرایش با موفقیت انجام شد');

          vm.updateMode = false;
          vm.selectedId = null;
        }
        getNews();
      });
      
    }
    }

    function cancel() {
      vm.updateMode = false;
      vm.selectedId = null;
      getNews();
    }



  }
})();