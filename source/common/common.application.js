+(function () {

  'use strict';

  angular.module('CommonApplication', [
    'ui.router',
    'oc.lazyLoad',
    'restangular',
    'ui.tinymce'
  ]);

  angular.module('CommonApplication').config(function () {
    tinyMCE.baseURL = '/assets/tinymce';
    tinyMCE.suffix = '.min';
  });


})();