(function() {

  'use strict';

  angular
    .module('CommonApplication')
    .service('ApplicationConfig', 
    [ 'Dialog', ApplicationConfigService ]);

  function ApplicationConfigService( Dialog ) {

    return {

      getUploadsFolder: function() {
        return 'http://localhost:5000/content/folders';
      },

      LANGUAGES: {
        ALL: 0,
        FA: 1,
        EN: 2,
      },
      
      tinymce: {
        directionality: 'rtl',
        plugins: [
          'advlist autolink lists link image charmap print preview hr anchor pagebreak',
          'searchreplace wordcount visualblocks visualchars code fullscreen',
          'insertdatetime media nonbreaking save table contextmenu directionality',
          'emoticons template paste textcolor colorpicker textpattern imagetools codesample toc'
        ],
        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | insertMedia',
        toolbar1: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
        toolbar2: 'print preview media | forecolor backcolor emoticons | codesample | insertMedia',
        menubar: false,
        setup: function(editor) {
          editor.addButton('insertMedia', {
            tooltip: 'Open File Manager',
            icon: 'media',
            onclick: function() {
              var dialog = Dialog.open({
                template: '<filemanager display-mode="popup" mode="full"></filemanager>',
                plain: true,
                width: '90%'
              });
              dialog.closePromise.then(function(data) {
                var files = data.value;
                if (files) {
                  files.forEach(function( file ) {
                    var element = undefined;
                    switch(file.fileTypeName) {
                    case 'image':
                      element = '<img src=' + uploadsFolder + file.url + '>';
                      break;
                    case 'audio':
                      element = '<audio controls><source src=' + uploadsFolder + file.url + ' type="audio/mp3"></audio>';
                      break;
                    case 'video':
                      element = '<video controls><source src=' + uploadsFolder + file.url + ' type="video/mp4"></video>';
                      break;
                    default:
                      break;
                    }
                    editor.insertContent(element);
                  }); 
                }
              });
            }
          });
        }
      }
    };
  }

})();