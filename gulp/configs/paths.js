// Defining default Paths of project
var npm = './node_modules',
  bower = './bower_components',
  public = './public',
  src = './source',
  root = './';

var paths = {
  npm: './node_modules',
  bower: './bower_components',
  public: './public',
  src: './source',
  root: './',
  libraries: {
    headJsFiles: [
      bower + '/jquery/dist/jquery.min.js',
      bower + '/angular/angular.min.js'
    ],
    cssFiles: [
      bower + '/foundation-sites/dist/css/foundation.min.css',
      bower + '/font-awesome/css/font-awesome.min.css'
      // bower + '/components-font-awesome/css/font-awesome.min.css'
    ],
    jsFiles: [
      bower + '/foundation-sites/dist/js/foundation.min.js',
      bower + '/angular-ui-router/release/angular-ui-router.min.js',
      bower + '/lodash/dist/lodash.min.js',
      bower + '/restangular/dist/restangular.min.js',
      bower + '/oclazyload/dist/ocLazyLoad.min.js',
      bower + '/angular-breadcrumb/dist/angular-breadcrumb.min.js'
    ],
    fontFiles: []
  },
  sources: {}
};

module.exports = paths;