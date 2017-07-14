+(function () {

  'use strict';

  angular
    .module('DashboardApplication')
    .controller('EditContentController', ['NewsRest', 'NewsCategoryRest', EditContentController]);

  function EditContentController(NewsRest, NewsCategoryRest) {

    var vm = this;
    vm.selectedItem = {};
    vm.updateMode = false;
    vm.remove = remove;
    vm.update = update;
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
      image_title: true, 
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
      });
    }
    getCategories();


    function getNews() {
      NewsRest.getList().then(function (response) {
        vm.news = response.data;
      });
    }
    getNews();

    function update(id) {
      vm.updateMode = true;
      vm.selectedId = id;
      NewsRest.one(vm.selectedId).get().then(function (response) {
        var news = response.entity.data;
        vm.selectedItem.subject = news.subject;
        vm.selectedItem.body = news.body;
        vm.selectedItem.categoryId = news.categoryId;
        vm.selectedItem.keywords = news.keywords;
        vm.selectedItem.submitDate  = news.submitDate

      });
    }

    function remove(id) {
      NewsRest.one(id).remove().then(function (response) {
        if (response.succeeded) {
          alert('حذف با موفقیت انجام شد');
          getNews();
        }
      })

    }

    function save() {
      debugger;
      vm.selectedItem.authorId = 1;
      vm.selectedItem.labels = ['label1', 'label2'];
      NewsRest.one(vm.selectedId).customPUT(vm.selectedItem).then(function (response) {
        if (response.succeeded) {
          alert('ویرایش با موفقیت انجام شد');
          vm.updateMode = false;
          vm.selectedId = null;
        }
      });
    }

    function cancel() {
      vm.updateMode = false;
      vm.selectedId = null;
    }



  }
})();