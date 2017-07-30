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
      toolbar1: 'undo redo | insert | fontselect | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
      toolbar2: 'print preview media | forecolor backcolor emoticons | codesample',
      font_formats: 'Arial=arial,helvetica,sans-serif;sans-serif=sans-serif;tahoma=tahoma;Courier New=courier new,courier,monospace;AkrutiKndPadmini=Akpdmi-n',
      image_title: true, 
  // enable automatic uploads of images represented by blob or data URIs
  automatic_uploads: true,
  // URL of our upload handler (for more details check: https://www.tinymce.com/docs/configure/file-image-upload/#images_upload_url)
  images_upload_url: '',
  // here we add custom filepicker only to Image dialog
  file_picker_types: 'image', 
  // and here's our custom image picker
  file_picker_callback: function(cb, value, meta) {
    var input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');

    input.onchange = function() {
      var file = this.files[0];
      
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        // Note: Now we need to register the blob in TinyMCEs image blob
        // registry. In the next release this part hopefully won't be
        // necessary, as we are looking to handle it internally.
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

    function getAboutUs() {
      PersonalInfoRest.getList().then(function (response) {
        vm.aboutus = response.data;
      })
    }
    getAboutUs();

    function save() {
      debugger;
      // PersonalInfoRest.one(1).customPUT(undefined,undefined,vm.aboutus, undefined).then(function (response) {
      //   alert('ویرایش با موفقیت انجام شد');
      // }) intori be onvane parameter tuye query string mifreste vali be surate payin tuye body mifreste
      PersonalInfoRest.one(1).customPUT(vm.aboutus).then(function (response) {
        alert('ویرایش با موفقیت انجام شد');
      })
    }

    function cancel() {
      vm.aboutus = '';
    }
  }
})();